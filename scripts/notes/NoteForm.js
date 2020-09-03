/*
    a bunch of input boxes related to the note information
*/

const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <form class="noteForm">
            <textarea id="noteText" name="noteText" placeholder="Type note here."></textarea>

            <button id="saveNote">Save Note</button>
        </form>
    `
}

export const NoteForm = () => {
    render()
}