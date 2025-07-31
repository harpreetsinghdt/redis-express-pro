const { Worker } = require('bullmq');
const redisClient = require('../redisClient');

const worker = new Worker('emailQueue', async job => {
    console.log(`Processing Email Job to: ${job.data.email}, Content: ${job.data.content}`);
}, { connection: redisClient });

worker.on('error', err => {
    console.error('Email worker error:', err);
});