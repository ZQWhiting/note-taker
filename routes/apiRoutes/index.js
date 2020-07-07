const router = require('express').Router();
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req, res) => {
    // receive new note
    // give note unique id (look into npm packages)
    // save on the req.body
    // add to db.json
    // return new note to client
});

router.delete('/notes/:id', (req, res) => {
    // read all notes from the db.json
    // remove the note with the given id
    // rewrite the notes to the db.json
});

module.exports = router;