// src/services/FooterService.js
import Footer from '../models/Footer.js';

class FooterService {

    // GET — получить единственный футер
    async getFooter() {
        const footer = await Footer.findOne();
        if (!footer) {
            throw new Error("Footer not found. Create one first.");
        }
        return footer;
    }

    // POST — создать (только если нет)
    async createFooter(data) {
        const exists = await Footer.findOne();
        if (exists) {
            throw new Error("Footer already exists. Use update.");
        }

        const socials = data.socials
            ? data.socials.split(',').map(s => s.trim()).filter(Boolean)
            : [];

        return await Footer.create({ ...data, socials });
    }

    // PUT — обновить (найти и обновить единственный)
    async updateFooter(data) {
        const footer = await Footer.findOne();
        if (!footer) {
            throw new Error("Footer not found. Create one first.");
        }

        const socials = data.socials
            ? data.socials.split(',').map(s => s.trim()).filter(Boolean)
            : footer.socials;

        return await Footer.findOneAndUpdate(
            {},
            { ...data, socials },
            { new: true, runValidators: true }
        );
    }

    // DELETE — удалить единственный
    async deleteFooter() {
        const footer = await Footer.findOne();
        if (!footer) {
            throw new Error("Footer not found");
        }
        await Footer.deleteOne({});
        return { message: "Footer deleted" };
    }
}

export default new FooterService();