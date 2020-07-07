const router = require('express').Router();
const shortid = require('shortid');
const { createNote, deleteNote } = require('../../lib/notes')
let { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    // get the notes from the database
    let results = notes;

    // return the notes from the database
    res.json(results);
});

router.post('/notes', (req, res) => {
    // get the note to be created
    let note = req.body;

    // generate a unique id for the note
    note.id = shortid.generate();

    // push the note into the database
    createNote(note, notes)

    // return the created note
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    // get the id of the note to be deleted
    const id = req.params.id;

    // delete the note from the database
    updArr = deleteNote(id, notes);

    // set the value of notes to the updated array
    notes = updArr;

    // return the updated array
    res.json(updArr);
});

module.exports = router;