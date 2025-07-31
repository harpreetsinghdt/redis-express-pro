const express = require('express');
const redisClient = require('../redisClient');
const router = express.Router();

router.get('/', async (req, res) => {
    const ip = req.ip;
    console.log(ip);
    const key = `rate-limit:${ip}`;
    const count = await redisClient.incr(key);
    if (count === 1) await redisClient.expire(key, 60);

    if (count > 10) {
        return res.status(429).send('Rate limit exceeded');
    }

    res.send(`Request Count: ${count}`);
});

module.exports = router;