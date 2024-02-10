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

const weapons = [
  { name: "stick", power: 5 },
  { name: "dagger", power: 30 },
  { name: "claw hammer", power: 50 },
  { name: "sword", power: 100 },
];

//Arrays can store any data type. Objects are similar to arrays, but with a few differences. One difference is that objects use properties, or keys, to access and modify data.
const locations = [
  {
    // Object properties are written as key: value pairs, where key is the name of the property (or the key), and value is the value that property holds.
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
];

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

//update function will use data from the location passed through
function goTown() {
  // This is called bracket notation. Values in an array are accessed by index. Indices are numerical values and start at 0 - this is called zero-based indexing
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting Dragon.");
}

//way to add or subtract from a variable called compound assignment
//buyHealth function uses an if statement
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeapon++;
    goldText.innerText = gold;
        let newWeapon = weapons[currentWeapon].name;
    text.innerText = "You now have a " + newWeapon + ".";
}

function fightSlime() {}

function fightBeast() {}

// function goTown() {
//   button1.innerText = "Go to store";
//   button2.innerText = "Go to cave";
//   button3.innerText = "Fight dragon";
//   button1.onclick = goStore;
//   button2.onclick = goCave;
//   button3.onclick = fightDragon;
//   text.innerText =
//     'You are in the town square. You see a sign that says "/Store"/.';
// }

// //The innerText property controls the text that appears in an HTML element.
// function goStore() {
//   button1.innerText = "Buy 10 health (10 gold)";
//   button2.innerText = "Buy weapon (30 gold)";
//   button3.innerText = "Go to town square";
//   button1.onclick = buyHealth;
//   button2.onclick = buyWeapon;
//   button3.onclick = goTown;
//   text.innerText = "You enter the store.";
// }

// initialize buttons
//Use dot notation to set the onclick property of your button1 to the function reference of goStore.
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {}
