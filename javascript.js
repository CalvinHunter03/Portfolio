// References to thing in HTML
//
//
let menuBar = document.getElementsByClassName('menu-bar');

//BUTONS
let homeButton = document.getElementById('home-button');
let gamesButton = document.getElementById('games-button');
let projectsButton = document.getElementById('projects-button');
let aboutmeButton = document.getElementById('aboutme-button');

let informationDiv = document.getElementsByClassName('information');

//PAGES
let homePage = document.getElementById('home-page');
let gamesPage = document.getElementById('games-page');
let projectsPage = document.getElementById('projects-page');
let aboutmePage = document.getElementById('aboutme-page');

//Games
let souperHero = document.getElementById('souper-hero');
let mindSync = document.getElementById('mind-sync');
let stationary = document.getElementById('stationary');

//Projects
let recipe = document.getElementById('recipe-website');
let photography = document.getElementById('photography-website');

//
//

// BUTTON FUNTIONALITY

homeButton.addEventListener('click', ()=> {
    turnOffAll();
    homePage.hidden=false;

});

gamesButton.addEventListener('click', ()=> {
    turnOffAll();
    gamesPage.hidden=false;
});

projectsButton.addEventListener('click', ()=> {
    turnOffAll();
    projectsPage.hidden=false;
})

aboutmeButton.addEventListener('click', ()=> {
    turnOffAll();
    aboutmePage.hidden=false;
})

function turnOffAll(){
    homePage.hidden=true;
    gamesPage.hidden=true;
    projectsPage.hidden=true;
    aboutmePage.hidden=true;
}


//Should be played at start
let urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('games-page')){
    turnOffAll();
    gamesPage.hidden=false;
}

let navType = PerformanceNavigationTiming.type;

if(navType = 'reload'){
    window.history.replaceState(null, document.title, "/index.html");
}