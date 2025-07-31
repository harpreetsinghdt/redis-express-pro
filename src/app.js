const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const redisClient = require('./redisClient');

const sessionRoute = require('./routes/sessionRoute');
const cacheRoute = require('./routes/cacheRoute');
const pubSubRoute = require('./routes/pubSubRoute');
const rateLimitRoute = require('./routes/rateLimitRoute');
const queueRoute = require('./routes/queueRoute');
const counterRoute = require('./routes/counterRoute');

const app = express();
app.use(express.json());

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'my_secret_key',
  resave: false,
  saveUninitialized: false
}));

app.use('/session', sessionRoute);
app.use('/cache', cacheRoute);
app.use('/pubsub', pubSubRoute);
app.use('/ratelimit', rateLimitRoute);
app.use('/queue', queueRoute);
app.use('/counter', counterRoute);

app.listen(3000, () => console.log('Server running on port 3000'));
