// map over an array and display all notes from Note.js

import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { deleteNote, getNotes, useNotes } from './NoteProvider.js'
import { NoteHTMLConverter } from './Note.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#noteListContainer")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith('deleteNote--')) {
        const [prefix, id] = event.target.id.split("--")

        deleteNote(id).then(() => {
            const updatedNotes = useNotes()
            const criminals = useCriminals()
            render(updatedNotes, criminals)
        })
    }
})

const render = (noteCollection, suspectCollection) => {

    contentTarget.innerHTML = noteCollection.map((noteObj) => {

        // Find the related criminal
        noteObj.suspectObj = suspectCollection.find(suspect => {
            return suspect.id === parseInt(noteObj.suspectId)
        })

        return NoteHTMLConverter(noteObj)
    }).join("")
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const suspects = useCriminals()

            render(notes, suspects)
        })
}

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes, useCriminals())
})