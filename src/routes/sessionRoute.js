const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.session.views = (req.session.views || 0) + 1;
    res.send(`Session Views: ${req.session.views}`);
});

module.exports = router;