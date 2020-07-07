const fs = require('fs');
const path = require('path');

function createNote(note, notesArray) {
    // push note into notesArray
    notesArray.push(note);

    // write the updated value of the notesArray to the database
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

function deleteNote(id, notesArray) {
    // filter out the note with the matching id
    notesArray = notesArray.filter(note => {
        if (note.id !== id) {
            return note;
        }
    });

    // write the updated value of the notesArray to the database
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return notesArray;
}

module.exports = {
    createNote,
    deleteNote
}