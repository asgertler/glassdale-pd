import { useConvictions } from './ConvictionProvider.js'

const convictionsTarget = document.querySelector('.filters__crime')

export const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const optionHTML = (optObj) => {
        return `
        <option class="${optObj.id}">${optObj.name}</option>
        `
    }

    const render = convictionsCollection => {
        convictionsTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
            convictionsCollection.map(conObj => {
                const conName = conObj.name
                const conID = conObj.id
                return `<option value="${conID}">${conName}</object>`
            }).join("")
            }
            </select>
        `
    }

    render(convictions)
}