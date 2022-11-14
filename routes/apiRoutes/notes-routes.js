const router = require("express").Router();

const notes = require("../../db/db.json");

const fs = require("fs");

const { createNote, deleteNote } = require("../../lib/notes");

router.get("/notes", (req, res) => {
    let result = notes.filter((ob) => typeof ob === 'object');
    console.log(result);
    res.json(result);
});

router.post("/notes", (req, res) => {
    const newNote = createNote(req.body, notes);
    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(true);
});

// db/db.json
module.exports = router;
