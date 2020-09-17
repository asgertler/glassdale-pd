/*
    map over an array and display all notes from Note.js
*/

import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { getNotes, useNotes } from './NoteProvider.js'
// import { NoteHTMLConverter } from './Note.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#noteListContainer")

const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map((note) => {

        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()

            render(notes, criminals)
        })
}

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})