import { AlibiDialog } from './AlibiDialog.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {

    if (event.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = event.target.id.split("--")

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(alibiEvent)
    }
})

export const CriminalHTML = (criminalObj, facilities) => {
    return `
        <section class="card-criminal" id="criminal-${criminalObj.id}"> 
            <h2>${criminalObj.name}</h2>
            
            <p><strong>Age:</strong> ${criminalObj.age}</p>
            <p><strong>Crime:</strong> ${criminalObj.conviction}</p>
            <p><strong>Arresting Officer:</strong> ${criminalObj.arrestingOfficer}</p>
            <p><strong>Term Start:</strong> ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p><strong>Term End:</strong> ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            
            <div class="criminal-facility">
                <h3>Facilities</h3>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>

            <button id="associates--${criminalObj.id}">Associate Alibis</button>
            ${AlibiDialog(criminalObj.id)}
        </section>
    `
}