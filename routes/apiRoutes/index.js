const router = require('express').Router();
const { notes } = require('../../db/db');
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
    deleteNote(req.params.id, notes)
    res.send("You deleted a note!");
});

module.exports = router;