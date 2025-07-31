const express = require('express');
const redisClient = require('../redisClient');
const router = express.Router();

router.post('/publish', async (req, res) => {
    const message = req.body.message;
    await redisClient.publish('notifications', message);
    res.send('Published!');
});

module.exports = router;