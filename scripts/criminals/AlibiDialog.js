import { useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("associatesClicked", event => {

    const criminalAlibi = useCriminals().find(criminal => {
        return criminal.id === parseInt(event.detail.chosenCriminal)
    })

    const alibiTarget = document.querySelector(`.alibiDialog--${criminalAlibi}`)
    const hTarget = document.querySelector("h4")

    if (alabiTarget.contains(hTarget)) {
        alibiTarget.innerHTML = ""
    } else {
        alibiTarget.innerHTML = `${
            criminalAlibi.known_associates.map(associate => {
                return `
                    <h4>${associate.name}</h4>
                    <div>${associate.alibi}</div>
                `
            }).join("")
            }`
    }

})

export const AlibiDialog = (id) => {
    return `
        <span class="alibiDialog--${id}"></span>
    `
}