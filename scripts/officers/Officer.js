export const OfficerHTML = (officerObj) => {
    return `
        <section class="card-officer" id="oficer-${officerObj.name}"> 
            <h2>${officerObj.name}</h2>
        </section>
    `
}