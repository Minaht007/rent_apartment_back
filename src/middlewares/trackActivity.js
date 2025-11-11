// src/middleware/trackActivity.js
import VisitTracking from '../models/VisitTracking.js';
import dayjs from 'dayjs';

export default async (req, res, next) => {
    const path = req.path;
    const dateKey = dayjs().format('DD.MM.YYYY'); // 07.11.2025

    try {
        await VisitTracking.findOneAndUpdate(
            { date: dateKey, path },
            { $inc: { count: 1 } },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
    } catch (err) {
        console.error('[ERROR] User Tracking tracking failed:', err);
    }

    next();
};