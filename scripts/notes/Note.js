// take notes and display on DOM

export const NoteHTMLConverter = (noteObj) => {
    return `
        <section class="note">
            <div class="note--title"><strong>Suspect:</strong> ${noteObj.suspectObj.name}</div>
            <div class="note--content">${noteObj.noteText}</div>
            <div class="note--bottom">
                <div class="note--timestamp"><strong>Timestamp:</strong> ${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
                <button id="deleteNote--${noteObj.id}">Delete</button>
            </div>
        </section>
    `
}