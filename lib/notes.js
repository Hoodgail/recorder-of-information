var fs = require("fs");
var path = require("path");

function createNote(body, notesArray) {
    const newNote = body;
    if (!Array.isArray(notesArray)) notesArray = [];

    if (notesArray.length === 0) notesArray.push(0);

    newNote.id = String(notesArray[0] + 1);
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notesArray, null, 2));
    return newNote;
}

function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(notesArray, null, 2));

            return;
        }
    }
}

module.exports = {
    createNote, deleteNote
};
