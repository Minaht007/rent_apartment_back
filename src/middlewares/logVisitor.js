// src/middlewares/logVisitor.js

export default async (req, res, next) => {
    // Short Log Data
    const logData = {
        ip: req.headers['x-forwarded-for']?.split(',').shift()?.trim() || req.ip,
        userAgent: req.headers['user-agent'] || 'Unknown',
    };

    console.log(`[IP]: ${logData.ip}, [UA]: ${logData.userAgent}`);
    next();
};