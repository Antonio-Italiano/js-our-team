const cardElement = document.getElementById('cards')

// CREO L'ARRAY DI OGGETTI CON LE INFORMAZIONI FORNITE
const team = [
        // CREO GLI OGGETTI
        {fullName: 'Wayne Barnett',   role: 'Founder & CEO',        image: 'wayne-barnett-founder-ceo.jpg'},
        {fullName: 'Angela Caroll',   role: 'Chief Editor',         image: 'angela-caroll-chief-editor.jpg'},
        {fullName: 'Walter Gordon',   role: 'Office Manager',       image: 'walter-gordon-office-manager.jpg'},
        {fullName: 'Angela Lopez',    role: 'Social Media Manager', image: 'angela-lopez-social-media-manager.jpg'},
        {fullName: 'Scott Estrada',   role: 'Developer',            image: 'scott-estrada-developer.jpg'},
        {fullName: 'Barbara Ramos',   role: 'Graphic Designer',     image: 'barbara-ramos-graphic-designer.jpg'},
    ]

let card = '';
// CREO UN CICLO (FOR) PER MOSTRARE LE INFORMAZIONI IN CONSOLE 
for (let i = 0; i < team.length; i++) {
    // console.log(
    //     `full Name:` + ` ` + team[i].fullName, 
    //     `Role:` + ` ` + team[i].role, 
    //     `Image:` + ` ` + team[i].image);
        
    // COPIO LA STRUTTURA STATICA FATTA IN HTML    
    card +=
    `
    <div class="col mb-2">
        <div class="card">
        <figure>
            <img src="img/${team[i].image}" alt="${team[i].fullName}">
        </figure>
        <div class="information">
            <h6>${team[i].fullName}</h6>
            <p>${team[i].role}</p>
        </div>
        </div>
    </div>
    `        
    }
    

cardElement.innerHTML = card;
// console.log(card)
    
