// controllers/MemberController.js
import MemberService from '../services/MemberService.js';

class MemberController {

    // POST /api/v1/members → создать
    async create(req, res) {
        try {
            const member = await MemberService.createMember(req.body, req.file);
            res.status(201).json(member);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // GET /api/v1/members → получить список
    async getAll(req, res) {
        try {
            const members = await MemberService.getAllMembers();
            res.json(members);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // GET /api/v1/members → получить по ID
    async getById(req, res) {
        try {
            const member = await MemberService.getMemberById(req.params.id);
            res.json(member);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    // PUT /api/v1/members → обновить
    async update(req, res) {
        try {
            const member = await MemberService.updateMember(req.params.id, req.body, req.file);
            res.json(member);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // PUT /api/v1/members → удалить
    async delete(req, res) {
        try {
            const result = await MemberService.deleteMember(req.params.id);
            res.json(result);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

export default new MemberController();