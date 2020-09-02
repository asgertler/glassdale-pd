import { CriminalHTML } from './Criminal.js'
import { useCriminals, getCriminals } from './CriminalProvider.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector('.criminalsContainer')

eventHub.addEventListener("chosenCrime", crimeEvent => {
    const crimeThatWasChosen = crimeEvent.detail.crimeId

    const crimeArray = useConvictions()
    const foundCrimeObj = crimeArray.find(crime => {
        return parseInt(crimeThatWasChosen) === crime.id
    })

    const allCriminals = useCriminals()
    const filteredCriminals = allCriminals.filter(currentObj => {
        return foundCrimeObj.name === currentObj.conviction
    })

    render(filteredCriminals)
})

const render = criminalCollection => {
    contentTarget.innerHTML = criminalCollection.map(criminalObj => {
        return CriminalHTML(criminalObj)
    }).join("")
}

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
}

/* export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            // console.log("criminalArray", criminalArray)
            addCriminalsToDOM(appStateCriminals)
        })
} */

/* const addCriminalsToDOM = (theCriminalArray) => {
    const domElement = document.querySelector('.criminalsContainer')

    let HTMLArray = theCriminalArray.map(singleCriminal => {
        return CriminalHTML(singleCriminal)
    })

    domElement.innerHTML += HTMLArray.join("")
} */