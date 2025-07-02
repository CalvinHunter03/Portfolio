let top_bar = document.getElementById("top_bar");
let intro = document.getElementById("intro");
let projects = document.getElementById("projects");

function addList(appender, theList){
    for(let element of theList){
        appender.appendChild(element);
    }
}


//TOP BAR
let nameHeading = document.createElement("h1");
nameHeading.innerHTML = "Calvin Hunter";
top_bar.appendChild(nameHeading);

// INTRO
let introP = document.createElement("p");
introP.innerHTML = "Hello, my name is Calvin Hunter!";

let introTitle = document.createElement("h1");
introTitle.innerHTML = "About Me";
introTitle.id = "intro_title";

intro.appendChild(introTitle);
intro.appendChild(introP);

//PROJECTS
let souperHero = document.getElementById("souper_hero");

let souperTitle = document.createElement("h1");
souperTitle.id = "souper_title";
souperTitle.innerHTML = "<u>Souper Hero</u>";

let souperDescOne = document.createElement("li");
souperDescOne.innerHTML = "Level Design";
souperDescOne.classList.add('souper_desc');

let souperDescTwo = document.createElement("li");
souperDescTwo.innerHTML = "Combat functionality";
souperDescTwo.classList.add('souper_desc');

let souperDescThree = document.createElement("li");
souperDescThree.innerHTML = "Fixing combat bugs";
souperDescThree.classList.add('souper_desc');

let souperList = [souperTitle, souperDescOne, souperDescTwo, souperDescThree];

addList(souperHero, souperList);

