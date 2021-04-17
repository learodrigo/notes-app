const yargs = require('yargs')

const { getNotes, addNote, removeNote } = require('./notes')

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
const readHandler = () => {
    console.log('Note 123')
}
yargs.command({
    command: 'read',
    describe: 'Reads specific note',
    handler: readHandler
})

// list command
const listHandler = () => {
    console.log('All notes')
}
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: listHandler
})

yargs.parse()
