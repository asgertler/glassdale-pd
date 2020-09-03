import { CriminalHTML } from './Criminal.js'
import { useCriminals, getCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    if ("crimeId" in event.detail) {

        const selectedCrime = event.detail.crimeId

        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {
            return currentCriminal.conviction === selectedCrime
        })

        render(matchingCriminals)
    }
})

eventHub.addEventListener("officerChosen", event => {
    if ("officerId" in event.detail) {

        const selectedOfficer = event.detail.officerId

        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(currentCriminal => {
            return currentCriminal.arrestingOfficer === selectedOfficer
        })

        render(matchingCriminals)
    }
})

const render = criminalCollection => {
    const contentTarget = document.querySelector('#criminalsContainer')
    contentTarget.innerHTML = criminalCollection.map(criminalObj => {
        return CriminalHTML(criminalObj)
    }).join("")
}

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
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