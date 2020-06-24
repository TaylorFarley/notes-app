const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'your notes'
}

const addNotes = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('saved')
    } else {
        console.log('dupe found')
    }

}
const listNotes = () =>
{
    console.log('hey here some notes')
    const show = loadNotes();
    show.forEach(element => {
        console.log(chalk.green.inverse(element.title))
        console.log(chalk.blue.inverse(element.body))
    });
        
    
 
 

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) =>{
    const notes = loadNotes();
    const doesNotesExist = notes.filter(function (note) {
        return note.title !== title
        
    })
    if(notes.length > doesNotesExist.length)
    {
            console.log(chalk.green('notes removed'))
            saveNotes(doesNotesExist)
    }
    else
    {
        console.log(chalk.red.inverse('none to remove'))
    }
}




module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes
}