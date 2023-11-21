let teams = [
{
    name:"Wayne ",
    surname:"Barret",
    role:"Founder e CEO",
    image:"img/wayne-barnett-founder-ceo.jpg"
},
{
    name:"Angela",
    surname:"Carrol",
    role:"Chief Editor",
    image:"img/angela-caroll-chief-editor.jpg"
},
{
    name:"Walter ",
    surname:"Gordon",
    role:"Office Manager",
    image:"img/walter-gordon-office-manager.jpg"
},
{
    name:"Angela",
    surname:"Lopez",
    role:"Social Media Manager",
    image:"img/angela-lopez-social-media-manager.jpg"
},
{
    name:"Scott",
    surname:"Estrada",
    role:"Developer",
    image:"img/scott-estrada-developer.jpg"
},
{
    name:"Barbar",
    surname:"Ramos",
    role:"Graphic Designer",
    image:"img/barbara-ramos-graphic-designer.jpg"
}

];

//STAMPIAMO SU CONSOLE LE INFORMAZIONI

printArrayTeams(teams);
console.log(teams);





//FUNZIONE

function printArrayTeams(arrayTeams) {
    for (let i = 0; i < arrayTeams.length; i++) {

        let teams = arrayTeams[i];

        console.log("Il membro n° " + (i + 1) + " è:");
        printArrayTeams(teams);
    }
}

