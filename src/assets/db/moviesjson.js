import gameNight from "../images/Game-Night.webp";
import beastOfBurden from "../images/BeastofBurden.jpg";
import Hannah from "../images/Hannah.jpg";
import Survivors from "../images/Survivors.jpg";
import lodgers from "../images/lodgers.jpg";
let movies = [
  {
    id: "1",
    name: "Bright",
    title: "Bright",
    year: "2017",
    genres: ["Action, Crime, Fantasy"],
    poster:
      "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
    minutes: "117",
    releaseDate: "2017-09-21",
    storyline:
      " Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. ",
    actor: "David Ayer",
    posterurl:
      "https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg",
    trailer: "https://www.youtube.com/embed/6EZCBSsBxko"
  },
  {
    id: "2",
    name: "Tomb",
    title: "Tomb Raider",
    year: "2018",
    genres: ["Action, Fantasy"],
    poster: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    minutes: "125",
    releaseDate: "2018-02-28",
    storyline:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    actor: "Roar Uthaug",
    posterurl:
      "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",
    trailer: "https://www.youtube.com/embed/2w5VZmos5I4"
  },
  {
    id: "3",
    name: "Black",
    title: "Black Panther",
    year: "2018",
    genres: ["Action, Adventure, Sci-Fi"],

    poster: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
    minutes: "134",
    releaseDate: "2018-02-23",
    storyline:
      "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
    actor: "Ryan Coogler",
    posterurl:
      "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
    trailer: "https://www.youtube.com/embed/xjDjIWPwcPU"
  },
  {
    id: "4",
    name: "Game",
    title: "Game Night",
    year: "2018",
    genres: ["Action", "Comedy", "Crime"],
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    minutes: "117",
    releaseDate: "2018-02-28",
    storyline:
      "A group of friends who meet regularly for game nights find themselves trying to solve a murder mystery.",
    actor: "Rachel McAdams",
    posterurl: gameNight,
    trailer: "https://www.youtube.com/embed/qmxMAdV6s4U"
  },

  {
    id: "5",
    name: "Hannah",
    title: "Hannah",
    year: "2017",
    genres: ["Drama"],
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg",
    minutes: "117",
    releaseDate: "2018-01-24",
    storyline:
      "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
    actor: "Charlotte Rampling",
    posterurl: Hannah,
    trailer: "https://www.youtube.com/embed/fkua8xmlVN4"
  },
  {
    id: "6",
    name: "Lodgers",
    title: "The Lodgers",
    year: "2017",
    genres: ["Drama", "Horror", "Romance"],
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg",
    minutes: "117",
    releaseDate: "2018-03-09",

    storyline:
      "1920, rural Ireland. Anglo Irish twins Rachel and Edward share a strange existence in their crumbling family estate. Each night, the property becomes the domain of a sinister presence (The Lodgers) which enforces three rules upon the twins: they must be in bed by midnight.",
    actor: "Charlotte Vega",
    posterurl: lodgers,
    trailer: "https://www.youtube.com/embed/ltIcW2xMuzs"
  },
  {
    id: "7",
    name: "Burden",
    title: "Beast of Burden",
    year: "2018",
    genres: ["Action", "Crime", "Drama"],
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg",
    minutes: "117",
    releaseDate: "2018-02",

    storyline:
      "Sean Haggerty only has an hour to deliver his illegal cargo. An hour to reassure a drug cartel, a hitman, and the DEA that nothing is wrong. An hour to make sure his wife survives. And he must do it all from the cockpit of his Cessna.",
    actor: "Daniel Radcliffe",
    posterurl: beastOfBurden,
    trailer: "https://www.youtube.com/embed/ynrVa9YWSJU"
  },

  {
    id: "8",
    name: "Survivors",
    title: "Survivors",
    year: "2018",
    genres: ["Documentary"],
    poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzhmNmI5MDMtZDEyOC00ODkyLTkwODItODQzODAzY2QyZjVlXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SY500_CR0,0,357,500_AL_.jpg",
    minutes: "117",
    releaseDate: "2018-02-23",
    storyline:
      "Following the stories of Bruce Lisker and Reggie Cole who spent year after year in prison for murders they didn't commit - audiences get a harrowing look at how barbaric the US justice system is.",
    actor: "Susan Sarandon",
    posterurl: Survivors,
    trailer: "https://www.youtube.com/embed/Uq9eN8Glj00"
  }
];

export default movies;
