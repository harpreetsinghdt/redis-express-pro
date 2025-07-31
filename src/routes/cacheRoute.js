const express = require('express');
const redisClient = require('../redisClient');
const router = express.Router();

router.get('/', async (req, res) => {
    const key = 'cache:data';
    const cached = await redisClient.get(key);
    if (cached) {
        return res.send(`Cached: ${cached}`);
    }
    const data = 'New Data Fetched';
    await redisClient.setEx(key, 60, data);
    res.send(`Fresh: ${data}`);
});

module.exports = router;