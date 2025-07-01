let top_bar = document.getElementById("top_bar");
let intro = document.getElementById("intro");
let projects = document.getElementById("projects");

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
souperTitle.innerHTML = "Souper Hero";
souperHero.appendChild(souperTitle);

