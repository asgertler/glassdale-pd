export const OfficerHTML = (officerObj) => {
    return `
        <section class="card-officer" id="officer-${officerObj.name}"> 
            <h2>${officerObj.name}</h2>
        </section>
    `
}