/*
    map over an array and siplay all notes from Note.js
*/

import { getNotes, useNotes } from './NoteProvider.js'
import { NoteHTMLConverter } from './Note.js'
import { useCriminals } from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#noteListContainer")

const render = (notes) => {
    const criminals = useCriminals()
    contentTarget.innerHTML = notes.map((noteObj) => {
        return NoteHTMLConverter(noteObj)
    }).join("")
}

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})