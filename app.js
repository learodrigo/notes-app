const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes')

// add command
const addHandler = () => {
    console.log('Adding new note...')
}
yargs.command({
    command: 'add',
    describe: 'Add a new note to user list',
    handler: addHandler
})

// remove command
const removeHandler = () => {
    console.log('Removing note...')
}
yargs.command({
    command: 'remove',
    describe: 'Remove specific note',
    handler: removeHandler
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

console.log(yargs.argv)
