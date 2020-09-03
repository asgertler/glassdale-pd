// take notes and display on DOM

const eventHub = document.querySelector(".container")

export const NoteHTMLConverter = (noteObj) => {
    return `
        <section class="note">
            <div class="note--title">Criminal: ${noteObj.suspect}</div>
            <div class="note--content">${noteObj.noteText}</div>
            <div class="note--timestamp">Timestamp: ${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
        </section>
    `
}