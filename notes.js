const chalk = require('chalk')
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

const addNote = ({ title, body }) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => title === note.title)

    if (!duplicateNotes.length) {
        notes.push({ title, body })
        saveNotes(notes)
        const message = chalk.green.inverse(`Note "${title} added"`)
        console.log(message)
    }
    else {
        const message = chalk.red.inverse(`Title "${title}" is already in use`)
        console.log(message)
    }
}

const removeNote = ({ title }) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        const message = chalk.green.inverse(`Note "${title}" removed`)
        console.log(message)
    }
    else {
        const message = chalk.red.inverse(`Note "${title}" couldn't be found`)
        console.log(message)
    }
}

const readNote = ({ title }) => {
    const notes = loadNotes()

    const note = notes.filter(note => note.title === title)

    if (note.length) {
        console.log(`Note ${note[0].title}`)
        console.log(`Body ${note[0].body}`)
    }
    else {
        const message = chalk.red.inverse(`Note "${title}" couldn't be found`)
        console.log(message)
    }
}

const getNotes = () => {
    const notes = loadNotes()

    if (!notes.length) {
        const message = chalk.red.inverse('Looks like there are no notes yet, try adding one first')
        console.log(message)
        return
    }

    for (const note of notes) {
        console.log('-----------------')
        console.log(`Note ${note.title}`)
        console.log(`Body ${note.body}`)
    }

    console.log('-----------------')
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    readNote
}
