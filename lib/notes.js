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
    let updArr = notesArray.filter(note => {
        if (note.id !== id) {
            return note;
        }
    });
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: updArr }, null, 2)
    );
    return updArr;
}

module.exports = {
    createNote,
    deleteNote
}