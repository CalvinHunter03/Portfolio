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
let introTitle = document.createElement("h1");
introTitle.innerHTML = "<u>About Me</u>";
introTitle.classList.add('intro_title');

let introP = document.createElement("p");
introP.innerHTML = "Hello, my name is Calvin Hunter! I graduated University of California, Santa Cruz with a degree in Computer Science: Game Design. I'm passionate about create games that are fun for everybody and I want people to be engaged. Some things about me, I enjoy being outdoors and playing sports. Some games that I frequent are Rocket League, Counter-Strike 2, and Minecraft.";
introP.classList.add('intro_text');
let ibr = document.createElement('br');

let contactTitle = document.createElement('h1');
contactTitle.innerHTML = "<u>Contact Me!</u>";
contactTitle.classList.add('intro_title');

let contactP = document.createElement('p');
contactP.innerHTML = 'Feel free to contact me, I will respond as soon as possible. <br><br>calvinhunter03@gmail.com';
contactP.classList.add('intro_text');


addList(intro, [introTitle, introP, ibr, contactTitle, contactP]);


//PROJECTS

//SOUPER HERO
let souperHero = document.getElementById("souper_hero");

let souperTitle = document.createElement("h1");
souperTitle.id = "souper_title";
souperTitle.innerHTML = "<u>Souper Hero</u>";
souperTitle.classList.add('project_titles');

let souperTrailer = document.createElement("iframe");
souperTrailer.src = 'https://www.youtube.com/embed/eS0_EcyCiJI';
souperTrailer.classList.add('proj_vid');
let souperTrailerBr = document.createElement('br');

let souperBulletDiv = document.createElement('div');
souperBulletDiv.classList.add('bullet_div');


let souperDescDiv = document.createElement('div');
souperDescDiv.classList.add('description_div');

let souperGrid = document.createElement('div');
souperGrid.classList.add('third_grid');

let souperDescReal = document.createElement('p');
souperDescReal.innerHTML = "Souper Hero is a dungeon crawler roguelike fueled by the power of soup. Explore a procedurally generated world filled with friends and foes, collect ingredients, and make yourself stronger by cooking delicious soups!"
souperDescReal.classList.add('real_desc');

let souperDescOne = document.createElement("li");
souperDescOne.innerHTML = "Level Design";
souperDescOne.classList.add('proj_desc');

let souperDescTwo = document.createElement("li");
souperDescTwo.innerHTML = "Combat functionality";
souperDescTwo.classList.add('proj_desc');

let souperDescThree = document.createElement("li");
souperDescThree.innerHTML = "Fixing combat bugs";
souperDescThree.classList.add('proj_desc');

addList(souperBulletDiv, [souperDescOne, souperDescTwo, souperDescThree]);
addList(souperDescDiv, [souperDescReal]);

addList(souperGrid, [souperBulletDiv, souperDescDiv]);

let souperList = [souperTitle, souperTrailer, souperTrailerBr, souperGrid];

addList(souperHero, souperList);

//MIND SYNC
let mindSync = document.getElementById("mind_sync");

let mindTitle = document.createElement("h1");
mindTitle.innerHTML = "<u>Mind Sync</u>";
mindTitle.classList.add('project_titles');

let mindTrailer = document.createElement("iframe");
mindTrailer.src = 'https://www.youtube.com/embed/mDRU0zrc72Q';
mindTrailer.classList.add('proj_vid');
let mindTrailerBr = document.createElement('br');

let mindBulletDiv = document.createElement('div');
mindBulletDiv.classList.add('bullet_div');

let mindDescDiv = document.createElement('div');
mindDescDiv.classList.add('description_div');

let mindGrid = document.createElement('div');
mindGrid.classList.add('third_grid');

let mindDescReal = document.createElement('p');
mindDescReal.innerHTML = 'Mind sync, you are a therapist and have to go inside your patients brain to figure out and solve their problems.';
mindDescReal.classList.add('real_desc');

let mindDescOne = document.createElement("li");
mindDescOne.innerHTML = "Puzzle creation";
mindDescOne.classList.add('proj_desc');

let mindDescTwo = document.createElement('li');
mindDescTwo.innerHTML = "Voice acting";
mindDescTwo.classList.add('proj_desc');

let mindDescThree = document.createElement('li');
mindDescThree.innerHTML = "Documentation";
mindDescThree.classList.add('proj_desc');

addList(mindBulletDiv, [mindDescOne, mindDescTwo, mindDescThree]);
addList(mindDescDiv, [mindDescReal]);

addList(mindGrid, [mindBulletDiv, mindDescDiv]);

let mindList = [mindTitle, mindTrailer, mindTrailerBr, mindGrid];
addList(mindSync, mindList);


//STATIONARY
let stationary = document.getElementById("stationary");

let statTitle = document.createElement("h1");
statTitle.innerHTML = "<u>Stationary</u>";
statTitle.classList.add('project_titles');

let statTrailer = document.createElement('iframe');
statTrailer.src = 'https://www.youtube.com/embed/Mn758oQVDcs';
statTrailer.classList.add('proj_vid');
let statTrailerBr = document.createElement('br');

let statBulletDiv = document.createElement('div');
statBulletDiv.classList.add('bullet_div');

let statDescDiv = document.createElement('div');
statDescDiv.classList.add('description_div');

let statGrid = document.createElement('div');
statGrid.classList.add('third_grid');

let statDescReal = document.createElement('p');
statDescReal.innerHTML = 'Stationary is a rogue like where you as the player sorts boxes in their respective spots';
statDescReal.classList.add('real_desc');

let statBullOne = document.createElement('li');
statBullOne.innerHTML = "Created Art";
statBullOne.classList.add('proj_desc');

let statBullTwo = document.createElement('li');
statBullTwo.innerHTML = "Sound Design";
statBullTwo.classList.add('proj_desc');

let statBullThree = document.createElement('li');
statBullThree.innerHTML = "Documentation";
statBullThree.classList.add('proj_desc');

addList(statBulletDiv, [statBullOne, statBullTwo, statBullThree]);
addList(statDescDiv, [statDescReal]);
addList(statGrid, [statBulletDiv, statDescDiv]);


let statList = [statTitle, statTrailer, statTrailerBr, statGrid];
addList(stationary, statList);


