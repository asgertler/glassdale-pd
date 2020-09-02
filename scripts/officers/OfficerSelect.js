import { useOfficers, getOfficers } from './OfficerProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector('.filters__officer')

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officerId: changeEvent.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})

/* export const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
} */

const render = officersCollection => {
    contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${
        officersCollection.map(offObj => {
            return `<option value="${offObj.name}">${offObj.name}</object>`
        }).join("")
        }
            </select>
        `
}

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}