import { WitnessHTML } from './Witness.js'
import { useWitnesses, getWitnesses } from './WitnessProvider.js'

const eventHub = document.querySelector(".container")
const buttonTarget = document.querySelector(".witnessCriminals")

eventHub.addEventListener("click", event => {
    if (event.target.id === "switchCriminalBtn") {
        getWitnesses()
            .then(() => {
                const appStateWitnesses = useWitnesses()
                render(appStateWitnesses)
            })
    }

    buttonTarget.innerHTML = '<button class="witnessCriminalsSwitch" id="witnessSwitchBtn>Criminals</button>'
})

const render = witnessCollection => {
    const contentTarget = document.querySelector('#criminalsContainer')

    contentTarget.innerHTML = witnessCollection.map(witnessObj => {
        return WitnessHTML(witnessObj)
    }).join("")
}

export const WitnessList = () => {
    buttonTarget.innerHTML = '<button class="witnessCriminalsSwitch" id="switchCriminalBtn">Witness Statements</button>'
}