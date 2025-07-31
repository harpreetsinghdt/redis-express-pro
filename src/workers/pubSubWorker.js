const redisClient = require('../redisClient');
const subscriber = redisClient.duplicate();
subscriber.connect();

subscriber.subscribe('notifications', (message) => {
    console.log(`Received Notification: ${message}`);
});

subscriber.on('error', (err) => {
    console.error('Redis subscriber error:', err);
});