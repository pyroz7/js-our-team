let teams = [
{
    name:"Wayne Barnett",
    role:"Founder e CEO",
    image:"img/wayne-barnett-founder-ceo.jpg"
},
{
    name:"Angela Caroll",
    role:"Chief Editor",
    image:"img/angela-caroll-chief-editor.jpg"
},
{
    name:"Walter Gordon",
    role:"Office Manager",
    image:"img/walter-gordon-office-manager.jpg"
},
{
    name:"Angela Lopez",
    role:"Social Media Manager",
    image:"img/angela-lopez-social-media-manager.jpg"
},
{
    name:"Scott Estrada",
    role:"Developer",
    image:"img/scott-estrada-developer.jpg"
},
{
    name:"Barbara Ramos",
    role:"Graphic Designer",
    image:"img/barbara-ramos-graphic-designer.jpg"
},

]

//STAMPIAMO SU CONSOLE LE INFORMAZIONI

printArrayTeams(teams);
console.log(teams);




//FUNZIONE
function printArrayTeams(arrayTeams) {
    for (let i = 0; i < arrayTeams.length; i++) {

        let teams = arrayTeams[i];

        console.log("Il membro n° " + (i + 1) + " è:");
        printArrayTeams (teams);
    }
}



//STAMPARE SU HTML

document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/wayne-barnett-founder-ceo.jpg${teams[0].image}" class="card-img-top" alt="Wayne">
        <div class="card-body">
            <p class="card-text">${teams[0].name}</p>
            <p>${teams[0].role}</p>
        </div>
    </div>

`
document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teams[1].image}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${teams[1].name}</p>
            <p>${teams[1].role}</p>
        </div>
    </div>
`

document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teams[2].image}" class="card-img-top" alt="Walter">
        <div class="card-body">
            <p class="card-text">${teams[2].name}</p>
            <p>${teams[2].role}</p>
        </div>
    </div>
` 
document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teams[3].image}" class="card-img-top" alt="Angela">
        <div class="card-body">
            <p class="card-text">${teams[3].name}</p>
            <p>${teams[3].role}</p>
        </div>
    </div>
`
document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teams[4].image}" class="card-img-top" alt="Scott">
        <div class="card-body">
            <p class="card-text">${teams[4].name}</p>
            <p>${teams[4].role}</p>
        </div>
    </div>
`
document.getElementById("team_cards").innerHTML += `
    <div class="card col-4">
        <img src="./img/${teams[5].image}" class="card-img-top" alt="Barbara">
        <div class="card-body">
            <p class="card-text">${teams[5].name}</p>
            <p>${teams[5].role}</p>
        </div>
    </div>
`