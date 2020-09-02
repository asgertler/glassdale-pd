import { useConvictions, getConvictions } from './ConvictionProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector('.filters__crime')

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeId: changeEvent.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})

/* export const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
} */

const render = convictionsCollection => {
    contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
        convictionsCollection.map(conObj => {
            return `<option value="${conObj.name}">${conObj.name}</object>`
        }).join("")
        }
            </select>
        `
}

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}