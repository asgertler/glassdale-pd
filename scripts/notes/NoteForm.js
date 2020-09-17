import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { saveNote } from './NoteProvider.js'

/*
    a bunch of input boxes related to the note information
*/

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if (noteCriminal.value !== "0") {
            const newNote = {
                noteText: noteContent.value,
                suspect: noteCriminal.value,
                date: Date.now()
            }

            saveNote(newNote)

        } else {
            window.alert("Choose a Suspect")
        }
    }
})

const render = (criminalArray) => {
    contentTarget.innerHTML = `
        <h3>New Note Details</h3>
            <textarea id="noteForm--text" placeholder="Enter note here" rows="5" cols="40"></textarea>

            <div class="noteForm--clickables">
                <select class="dropdown" id="noteForm--criminal" class="criminalSelect">
                    <option value="0">Please select a criminal...</option>
                    ${criminalArray.map(criminalObj => {
        return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
    }).join("")
        }
                </select>

                <button id="saveNote">Save Note</button>
            </div>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(useCriminals())
        })
}