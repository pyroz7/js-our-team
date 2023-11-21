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




//FUNZIONE


function printArrayTeams(arrayTeams) {
    for (let i = 0; i < arrayTeamslength; i++) {

        let teams = arrayStudents[i];

        console.log("Il membro n° " + (i + 1) + " è:");
        printObject(teams);
    }
}