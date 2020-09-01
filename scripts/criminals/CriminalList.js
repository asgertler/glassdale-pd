import { CriminalHTML } from './Criminal.js'
import { useCriminals, getCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".filters")

eventHub.addEventListener("crimeChosen", changeEvent => {
    if ("crimeID" in changeEvent.detail) {

    }
})

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            // console.log("criminalArray", criminalArray)
            addOfficersToDOM(criminalArray)
        })
}

const addOfficersToDOM = (theCriminalArray) => {
    const domElement = document.querySelector('.criminalsContainer')

    let HTMLArray = theCriminalArray.map(singleCriminal => {
        return CriminalHTML(singleCriminal)
    })

    domElement.innerHTML += HTMLArray.join("")
}