import { OfficerHTML } from './Officer.js'
import { useOfficers, getOfficers } from './OfficerProvider.js'

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            console.log("officerArray", officerArray)
            addOfficersToDOM(officerArray)
        })
}

const addOfficersToDOM = (theOfficerArray) => {
    const domElement = document.querySelector('.officersContainer')

    let HTMLArray = theOfficerArray.map(singleOfficer => {
        return OfficerHTML(singleOfficer)
    })

    domElement.innerHTML += HTMLArray.join("")
}