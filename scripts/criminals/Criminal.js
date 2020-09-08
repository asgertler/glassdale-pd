import { AlibiDialog } from './AlibiDialog.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id.startswith("associates--")) {
        const [prefix, criminalId] = event.target.id.split("--")

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(alibiEvent)
    }
})

export const CriminalHTML = (criminalObj) => {
    return `
        <section class="card-criminal" id="criminal-${criminalObj.id}"> 
            <h2>${criminalObj.name}</h2>
            <p>Age: ${criminalObj.age}</p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Arresting Officer: ${criminalObj.arrestingOfficer}</p>
            <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            <button id="associates--${criminalObj.id}">Associate Alibis</button>
            ${AlibiDialog(criminalObj.id)}
        </section>
    `
}