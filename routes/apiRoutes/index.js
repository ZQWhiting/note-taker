const router = require('express').Router();
let { notes } = require('../../db/db');
const { createNote, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    // give note unique id (look into npm packages)
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes)

    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    updArr = deleteNote(req.params.id, notes);
    notes = updArr;
    res.json(notes);
});

module.exports = router;