const express = require('express');
const redisClient = require('../redisClient');
const router = express.Router();

router.get('/like', async (req, res) => {
    const count = await redisClient.incr('likes');
    res.send(`Total Likes: ${count}`);
});

module.exports = router;