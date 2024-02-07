//The let keyword tells JavaScript you are declaring a variable.
//Variables can be assigned a value. When you do this while you declare it, this is called initialization.
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
// An array can be used to hold multiple values.
let inventory = ["stick", "dagger", "sword"];

//JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.
//One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.

//button1 is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText =
    "You are in the town square. You see a sign that says Store.";
}

//The innerText property controls the text that appears in an HTML element.
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting Dragon.");
}

function buyHealth() {}

function buyWeapon() {}

// initialize buttons
//Use dot notation to set the onclick property of your button1 to the function reference of goStore.
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
