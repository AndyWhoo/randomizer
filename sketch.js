let roster = [{
    firstName: "Zainib",
    lastName: "Ahmed",
    color: "Blue",
    animal: "Giraffe",
    book: "The book Thief",
    movie: "Amelie",
    game: "none",
    superHero: "The Hulk",
    fact: "I love to eat olives."
  },
  {
    firstName: "Camila",
    lastName: "Avina Garcia",
    color: "Green",
    animal: "Dog",
    book: "Match",
    movie: "Lady and the Tramp",
    game: " Guitar Hero",
    superHero: "Spiderman",
    fact: "I have a twin"
  },
  {
    firstName: "Eddson",
    lastName: "Jose",
    color: "midnight blue",
    animal: "pig",
    book: "The Dark Forest",
    movie: "The Fountain",
    game: "Halo Reach",
    superHero: "Superman",
    fact: "I am made up of stardust"
  },
  {
    firstName: "Matteo",
    lastName: "Leva",
    color: "Black",
    animal: "Cat",
    book: "Pillars of the earth",
    movie: "The Godfather",
    game: "Witcher 3",
    superHero: "spider man",
    fact: "I 'm dissapointed in GOT seasoon 8"
  },
  {
    firstName: "Lydia",
    lastName: "Lim",
    color: "blue",
    animal: "dog",
    book: "No",
    movie: "me before you",
    game: "No",
    superHero: "Thor",
    fact: " birds are tetrapods even though they only walk on two legs",
  },
  {
    firstName: "Chi",
    lastName: "Nguyen",
    color: "purple",
    animal: "bird",
    book: "Math Curse",
    movie: "Big Hero 6",
    game: "Checkers",
    superHero: "Big Hero 6 (team)",
    fact: "Lately this year, monsters have especially been occupying my mind, among other things"
  },
  {
    firstName: "Leon",
    lastName: "Quach",
    color: "silver",
    animal: "penguins",
    book: "Letters to a Young Poet",
    movie: "Kung fu Hustle",
    game: "Pokemon Crystal Version",
    superHero: "Batman",
    fact: "I have two pet guinea pigs"
  }, {
    firstName: "Sierra",
    lastName: "Roe",
    color: "purple",
    animal: " dog  ",
    book: " phantom tollbooth ",
    movie: " Naussica of the Valley of the Wind ",
    game: "pokemon heartgold  ",
    superHero: "captain marvel",
    fact: "can run 7 minute mile"
  },
  {
    firstName: "Hao",
    lastName: "Rong",
    color: "hex(#4285F4)",
    animal: "otter",
    book: "A Brief History of Time",
    movie: "Angry Birds 2",
    game: "Final Fantasy XIV",
    superHero: "Tony Stark",
    fact: "I like cats."
  },
  {
    firstname: "Kaicong",
    lastname: "Tang",
    favcolor: "black",
    animal: "dog",
    movie: "iron man123",
    game: "csgo",
    superHero: "iron man",
    fact: "love gaming"
  },
  {
    firstName: "Sumedh",
    lastName: "Vedanthi",
    favecolor: "Blue",
    animal: "Crow",
    book: "Of Mice and Men",
    movie: "American Psycho",
    game: "Fruit Ninja",
    superHero: "Batman",
    fact: "im a black belt",
  },
  {
    firstName: "Chris",
    lastName: "Weber",
    color: "green",
    animal: "cat",
    book: "Hitchhiker's Guide to the Galaxy",
    movie: "Spiderman Into The Spiderverse",
    game: "The Legend of Zelda Breath of the Wild",
    SuperHero: "Iron Man",
    fact: "I'm vegetarian"
  },
  {
    firstName: "Andy",
    lastName: "Wu",
    color: "Red",
    animal: "Kiwi",
    book: "Romance of the Three Kingdoms",
    movie: "Shrek 2",
    game: "Super Mario 64",
    superHero: "Static Shock",
    fact: "I've had jaw correction surgery"
  },
  {
    firstName: "xiaowei",
    lastName: "zheng",
    color: " green",
    animal: "babies",
    book: "the little girl at the window",
    movie: "eat drink man woman",
    game: " none",
    superHero: "none",
    fact: "don't drink coke"
  },
  {
    firstName: "Rachel",
    lastName: "Centinaje",
    color: "green",
    animal: "dogs",
    book: "none",
    movie: "Drive",
    game: "Dishonored",
    superhero: "Deadpool",
    fact: "I went camping this weekend"
  },
  {
    firstName: "Anthony",
    lastName: "Valdovinos",
    color: "purple",
    animal: "eagle",
    book: "Hatchet",
    movie: "Titanic",
    game: "Starfox Adventures",
    SuperHero: "none",
    fact: "I studied Japanese for 4 years"
  },
  {
    firstName: "Vanessa",
    lastName: "Blacow-Berggen",
    color: "pink",
    animal: "cat",
    book: "The Heartstriker series",
    superHero: "Spiderman",
    fact: "I really like cats, especially my cat",
    game: "Spyro Reignited Trilogy",
    movie: "Cats Don't Dance"
  },
  {
    firstName: "Kevin",
    lastName: "Sagara",
    color: "yellow",
    animal: "cat",
    book: "sherlock holmes",
    movie: "Shaun of the Dead",
    game: "osu!",
    superHero: "batman",
    fact: "learning japanese"
  },
  {
    firstName: "Hector",
    lastName: "Flores",
    color: "Blue",
    animal: "Dog",
    book: "Captain Underpants",
    movie: "Ace Ventura pet detective",
    game: "Smash Brothers",
    SuperHero: "Flash",
    fact: "I am a Libra",
  },
  {
    firstName: "Alicia",
    lastName: "Breinke",
    color: "purple",
    animal: "dog",
    book: "The Art of Racing in the Rain",
    movie: "Spirited Away",
    superHero: "Wonder Woman",
    fact: "I want to live in another country someday"
  }

];

let randomIndex;

function setup() {

  createCanvas(600, 600);

}




function draw() {
fill(0);
text(roster[1].firstName, 10, 10, 70, 80);

  //background(220);

  //fill(20, 100, 255);

  //ellipse(200, 200, 200, 200);



}

function mousePressed (){
  background(random(200, 225));
  randomIndex = int(random(roster.length));
  //console.log("random classmate's favorite color is" + random(roster).color);
  //console.log(roster[1].fact);
  text("random classmate's favorite color is " + random(roster).color, 50, 50);
  //console.log(roster[randomIndex].firstName);
  text(roster[randomIndex].firstName, 130, 20);
  //console.log(roster.length);

  roster.splice(randomIndex, 1);
  //console.log(roster);

}
