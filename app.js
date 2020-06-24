const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');



yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Title:',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove new note',
    builder: {
        title: {
            describe: 'Title:',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})



yargs.command({
    command: 'list',
    describe: 'list new note',
    handler() {
       notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read new note',
    builder: {
        title: {
            describe: 'Title:',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.readNote(argv.title)
    }
})
// console.log(yargs.argv)

yargs.parse();