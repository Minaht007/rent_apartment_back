// services/MemberService.js
import Member from '../models/Member.js';
import fs from 'fs';
import path from 'path';

class MemberService {

    async createMember(data, photoFile) {
        const memberData = { ...data };

        if (photoFile) {
            const photoName = `${Date.now()}_${photoFile.originalname}`;
            const photoPath = path.join(process.cwd(), 'uploads', 'members', photoName);
            await fs.promises.mkdir(path.dirname(photoPath), { recursive: true });
            await fs.promises.writeFile(photoPath, photoFile.buffer);
            memberData.photo = `/uploads/members/${photoName}`;
        }

        return await Member.create(memberData);
    }

    async getAllMembers() {
        return await Member.find().select('-__v');
    }

    async getMemberById(id) {
        const member = await Member.findById(id).select('-__v');
        if (!member) throw new Error('Member not found');
        return member;
    }

    async updateMember(id, data, photoFile) {
        const member = await this.getMemberById(id);

        if (photoFile) {
            // Удаляем старое фото
            if (member.photo) {
                const oldPath = path.join(process.cwd(), member.photo);
                if (fs.existsSync(oldPath)) {
                    await fs.promises.unlink(oldPath).catch(() => {});
                }
            }

            const photoName = `${Date.now()}_${photoFile.originalname}`;
            const photoPath = path.join(process.cwd(), 'uploads', 'members', photoName);
            await fs.promises.mkdir(path.dirname(photoPath), { recursive: true });
            await fs.promises.writeFile(photoPath, photoFile.buffer);
            data.photo = `/uploads/members/${photoName}`;
        }

        return await Member.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async deleteMember(id) {
        const member = await this.getMemberById(id);

        // Удаляем фото с диска
        if (member.photo) {
            const photoPath = path.join(process.cwd(), member.photo);
            if (fs.existsSync(photoPath)) {
                await fs.promises.unlink(photoPath).catch(() => {});
            }
        }

        await Member.findByIdAndDelete(id);
        return { message: 'Member deleted successfully' };
    }
}

export default new MemberService();