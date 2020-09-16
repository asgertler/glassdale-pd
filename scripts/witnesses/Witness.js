export const WitnessHTML = (witnessObj) => {
    return `
        <section class="card-witness" id="witness-${witnessObj.id}"> 
            <h2>${witnessObj.name}</h2>
            <p>${witnessObj.statements}</p>
        </section>
    `
}