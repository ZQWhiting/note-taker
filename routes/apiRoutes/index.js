const router = require('express').Router();
const shortid = require('shortid');
const { createNote, deleteNote } = require('../../lib/notes')
let { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = shortid.generate();

    const note = createNote(req.body, notes)

    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    updArr = deleteNote(req.params.id, notes);
    notes = updArr;
    res.json(notes);
});

module.exports = router;