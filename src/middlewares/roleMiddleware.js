export default function roleMiddleware(allowedRoles) {
    return function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const userRole = req.user.role;

        const allowed = Array.isArray(allowedRoles)
            ? allowedRoles
            : [allowedRoles]; // <-- вот это добавь

        if (!allowed.includes(userRole)) {
            return res.status(403).json({ error: "Forbidden: insufficient permissions" });
        }

        next();
    };
}