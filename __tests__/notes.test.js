const fs = require('fs');
const {
    createNote,
    deleteNote
} = require('../lib/notes')
const { notes } = require('../db/db');

jest.mock('fs');

test('creates a note object', () => {
    const note = createNote(
        {title: "Test Title",
        text: "Test text",
        id: "test_id"},
        notes
    );

    expect(note.title).toBe('Test Title');
    expect(note.text).toBe('Test text');
    expect(note.id).toBe('test_id');
})

test('deletes a note object', () => {
    let newArr = [{id: '0'}, {id: '1'}, {id: '2'}]
    const startingArrayLength = newArr.length;

    let id = "0";

    newArr = deleteNote(id, newArr)

    expect(newArr.length).toBe(startingArrayLength - 1);
})