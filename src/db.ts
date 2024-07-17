// src/db.ts
import mongoose from 'mongoose';
import config from './config';

const MONGODB_URI = config.mongoURI

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;
