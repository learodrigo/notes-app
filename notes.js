const fs = require('fs')

const NOTES_FILE = 'notes.json'

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(NOTES_FILE)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync(NOTES_FILE, jsonData)
}

const getNotes = () => 'Your notes...'

const addNote = ({ title, body }) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => {
        return title === note.title
    })

    if (!duplicateNotes.length) {
        notes.push({ title, body })
        saveNotes(notes)
        console.log('New note added')
    }
    else {
        console.log('Note title in use')
    }

}

module.exports = {
    getNotes,
    addNote
}
