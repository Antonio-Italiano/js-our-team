// CREO L'ARRAY DI OGGETTI CON LE INFORMAZIONI FORNITE
const team = [
        // CREO GLI OGGETTI
        {fullName: 'Wayne Barnett',   role: 'Founder & CEO',        image: 'wayne-barnett-founder-ceo.jpg'},
        {fullName: 'Angela Caroll',   role: 'Chief Editor',         image: 'wayne-barnett-founder-ceo.jpg'},
        {fullName: 'Walter Gordon',   role: 'Office Manager',       image: 'wayne-barnett-founder-ceo.jpg'},
        {fullName: 'Angela Lopez',    role: 'Social Media Manager', image: 'wayne-barnett-founder-ceo.jpg'},
        {fullName: 'Scott Estrada',   role: 'Developer',            image: 'wayne-barnett-founder-ceo.jpg'},
        {fullName: 'Barbara Ramos',   role: 'Graphic Designer',     image: 'wayne-barnett-founder-ceo.jpg'},
    ]

// CREO UN CICLO (FOR) PER MOSTRARE LE INFORMAZIONI IN CONSOLE 
for (let i = 0; i < team.length; i++) {
    console.table(
        `full Name:` + ` ` + team[i].fullName, 
        `Role:` + ` ` + team[i].role, 
        `Image:` + ` ` + team[i].image,);
}