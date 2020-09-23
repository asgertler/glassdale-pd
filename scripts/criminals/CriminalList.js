import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'
import { CriminalHTML } from './Criminal.js'
import { useCriminals, getCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container")
const buttonTarget = document.querySelector(".witnessCriminals")

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

eventHub.addEventListener("click", event => {
    if (event.target.id === "witnessSwitchBtn") {
        getCriminals()

            .then(() => {
                const appStateCriminals = useCriminals()
                render(appStateCriminals)
            })

            .then(() => {
                buttonTarget.innerHTML = '<button class="witnessCriminalsSwitch" id="switchCriminalBtn">Witness Statements</button>'
            })
    }
})

const render = criminalCollection => {
    const contentTarget = document.querySelector('#criminalsContainer')
    contentTarget.innerHTML = criminalCollection.map(criminalObj => {
        return CriminalHTML(criminalObj)
    }).join("")
}

export const CriminalList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            render(criminals, facilities, crimFac)
        })
}

/*
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}
*/