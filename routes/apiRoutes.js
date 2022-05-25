const router = require('express').Router();
const {notesArray} = require('../db/db.json');
const createNewNote = require('../lib/createNotes');

router.get('/notes', (req, res) => {
    res.json(notesArray);
});

router.post('/notes', (req, res) => {
    req.body.id = notesArray.length.toString();
    const newNote = createNewNote(req.body, notesArray);
    res.json(newNote)
});

module.exports = router;