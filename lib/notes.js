const fs = require('fs');
const path = require('path');

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function deleteNote(id, notesArray) {
    console.log(notesArray);
    notesArray = notesArray.filter(note => {
        if (note.id !== id) {
            return note;
        }
    });
    console.log(notesArray);
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