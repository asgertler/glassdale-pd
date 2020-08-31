import { getConvictions, useConvictions } from './ConvictionProvider.js'

const convictionsTarget = document.querySelector('.filters__crime')

export const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        convictionsTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
            convictionsCollection.map(conObj => {
                const conName = conObj.name
                const conID = conObj.id
                return `<option value="${conID}">${conName}</object>`
            })
            }
            </select>
        `
    }

    render(convictions)
}