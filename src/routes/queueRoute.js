const express = require('express');
const { Queue } = require('bullmq');
const redisClient = require('../redisClient');
const router = express.Router();

const emailQueue = new Queue('emailQueue', { connection: redisClient });

router.post('/send-email', async (req, res) => {
    const { email, content } = req.body;
    await emailQueue.add('sendEmail', { email, content });
    res.send('Email job queued');
});

module.exports = router;