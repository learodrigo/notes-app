const yargs = require('yargs')

const { getNotes, addNote, removeNote, readNote } = require('./notes')

// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note to user list',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => addNote(argv)
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove specific note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => removeNote(argv)
})

// read command
yargs.command({
    command: 'read',
    describe: 'Reads specific note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => readNote(argv)
})

// list command
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: (argv) => getNotes(argv)
})

yargs.parse()
