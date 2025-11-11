import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

// Database connection
import connectDB from './src/configs/database.js';

// Middlewares
import logVisitor from './src/middlewares/logVisitor.js';
import trackActivity from './src/middlewares/trackActivity.js';

// Import routers
import routers from './src/routes/index.js';


// Connect to MongoDB
connectDB(process.env.MONGODB_URI);

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logVisitor);     // Логирование
app.use(trackActivity);  // Трекинг активности

// Routes
app.use('/api/v1/', routers);

// Error handling (basic)
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('[!] Something broke!');
});

const PORT = process.env.PORT || 3000;
console.log(`[>>>] http://127.0.0.1:${PORT}`);

app.listen(PORT, () => console.log(`[!] Server running on port ${PORT}`));

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('[!] Shutting down...');
    server.close(() => process.exit(0));
});