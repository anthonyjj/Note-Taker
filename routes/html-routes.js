const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.senfFile(path.join(__dirname, '../public/index.html'))
});

