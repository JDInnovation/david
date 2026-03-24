// Vercel Serverless Function — wraps the Express backend
// Environment variables (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, JWT_SECRET)
// must be set in the Vercel dashboard.

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

import app from '../backend/src/index';

export default app;
