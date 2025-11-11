// src/controllers/FooterController.js
import FooterService from '../services/FooterService.js';

class FooterController {

    // GET /api/v1/footer → получить
    async get(req, res) {
        try {
            const footer = await FooterService.getFooter();
            res.json(footer);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    // POST /api/v1/footer → создать
    async create(req, res) {
        try {
            const footer = await FooterService.createFooter(req.body);
            res.status(201).json({ message: "Footer created", footer });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    // PUT /api/v1/footer → обновить
    async update(req, res) {
        try {
            const updated = await FooterService.updateFooter(req.body);
            res.json({ message: "Footer updated", footer: updated });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    // DELETE /api/v1/footer → удалить
    async delete(req, res) {
        try {
            const result = await FooterService.deleteFooter();
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default new FooterController();