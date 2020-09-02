export const CriminalHTML = (criminalObj) => {
    return `
        <section class="card-criminal" id="criminal-${criminalObj.name}"> 
            <h2>${criminalObj.name}</h2>
            <p>Age: ${criminalObj.age}</p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Arresting Officer: ${criminalObj.arrestingOfficer}</p>
            <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </section>
    `
}