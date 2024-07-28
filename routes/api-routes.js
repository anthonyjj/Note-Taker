const router = require ('express').Router();
const {v4: uuidv4} = require('uuid');
const fs = require ("fs");
const inquirer = require(inquirer);

router.get('api/notes', async(req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dbJson);
});
