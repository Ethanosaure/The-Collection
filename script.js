const collection = [
  {
    picture: "Assets/WSS.jpg",
    name: "While She Sleeps",
    Chanteur: "Lawrence Taylor",
    FormationYear: 2006,
    genre: ["Metalcore"],
    membres: "members:",
    cast: [
      "Lawrence Taylor",
      "Sean Long",
      "Mat Welsh",
      "Aaran McKenzie",
      "Adam Savage",
    ],
  },
  {
    picture: "Assets/FFDP.jpg",
    name: "Five Finger Death Punch",
    Chanteur: "Ivan Moody",
    FormationYear: 2005,
    genre: ["Groove Metal"],
    membres: "members:",
    cast: ["Ivan Moody", "Chris Kael", "Charlie Engen", "Andy James"],
  },
  {
    picture: "Assets/Linkin park.jpg",
    name: "Linkin Park",
    Chanteur: "Chester Bennington",
    FormationYear: 1996,
    genre: ["Rock", "Metal"],
    membres: "members:",
    cast: [
      "Chester Bennington",
      "Mike Shinoda",
      "Brad Delson",
      "Dave Farrel",
      "Rob Bourdon",
      "Joe Hahn",
    ],
  },
  {
    picture: "Assets/django.jpg",
    name: "Django",
    Chanteur: "Django/Lazar Vachter",
    FormationYear: 2016,
    genre: ["Rap"],
    membres: "members:",
    cast: ["Django"],
  },
  {
    picture: "Assets/carpenter brut.jpg",
    name: "Carpenter Brut",
    Chanteur: "Franck Hueso",
    FormationYear: 2012,
    genre: ["Rock électro"],
    membres: "members:",
    cast: ["Franck Hueso"],
  },
  {
    picture: "Assets/Enter Shikari.jpg",
    name: "Enter Shikari",
    Chanteur: "Roughton Reynolds",
    FormationYear: 2003,
    genre: ["Post-hardcore"],
    membres: "members:",
    cast: ["Roughton Reynolds", "Chris Batten", "Liam Clewlow", "Rob Rolfe"],
  },
  {
    picture: "Assets/Madredeus.jpg",
    name: "Madredeus",
    Chanteur: "Teresa Salgueiro",
    FormationYear: 1985,
    genre: ["Fado", "Folk", "classique"],
    membres: "members:",
    cast: [
      "Teresa Salgueirao",
      "Pedro Ayres Magalhães",
      "Francisco Ribeiro",
      "Rodrigo Leão",
      "Gabriel Gomes",
    ],
  },
  {
    picture: "Assets/Nirvana.jpg",
    name: "Nirvana",
    Chanteur: "Kurt Cobain",
    FormationYear: 1987,
    genre: ["Grunge"],
    membres: "members:",
    cast: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
  },
  {
    picture: "Assets/Soad.jpg",
    name: "System Of A Down",
    Chanteur: "Daron Malakian",
    FormationYear: 1994,
    genre: ["Rock", "Metal"],
    membres: "members:",
    cast: ["Daron Malakian", "Serj Tankian", "Shavo Odadjian", "John Dolmayan"],
  },
  {
    picture: "Assets/Shawn Mendes.jpg",
    name: "Shawn Mendes",
    Chanteur: "Shawn Mendes",
    FormationYear: 2013,
    genre: ["Pop"],
    membres: "members:",
    cast: ["Shawn Mendes"],
  },
];
let i = 0;
const collectionDiv = document.getElementById("collection");
collection.forEach((band) => {
  const bandDiv = document.createElement("div");
  bandDiv.classList.add(`bandDiv`);
  collection[i] = bandDiv.setAttribute("id", `game${[i]}`);
  const photo = document.createElement("img");
  photo.classList.add("picture");
  const croix = document.createElement("button");
  croix.classList.add("croix");
  croix.addEventListener("click", () => {
    bandDiv.remove();
  });
  const bandName = document.createElement("h3");
  bandName.classList.add("bandName");
  const singer = document.createElement("p");
  singer.classList.add("singer");
  const year = document.createElement("p");
  year.classList.add("year");
  const genreList = document.createElement("ul");
  genreList.classList.add("genreList");
  const membres = document.createElement("h3");
  membres.classList.add("membres");
  const castList = document.createElement("ol");
  castList.classList.add("castList");
  const divtext = document.createElement("div");
  divtext.classList.add("divtext");
  // const youtube = document.createElement("img");
  // youtube.classList.add("youtube");

  croix.src = band.croix;
  photo.src = band.picture;
  // youtube.src = "/Assets/YouTube_social_white_squircle.svg.png";
  bandName.innerText = band.name;
  singer.innerText = `Singer : ${band.Chanteur}`;
  year.innerText = ` formation year : ${band.FormationYear}`;
  membres.innerText = `members:`;

  band.genre.forEach((genre) => {
    const genreItem = document.createElement("li");
    genreItem.innerText = genre;
    genreList.appendChild(genreItem);
  });

  band.cast.forEach((member) => {
    const castItem = document.createElement("li");
    castItem.innerText = member;
    castList.appendChild(castItem);
  });
  divtext.appendChild(genreList);
  divtext.appendChild(bandName);
  divtext.appendChild(singer);
  divtext.appendChild(year);
  // divtext.appendChild(youtube);
  divtext.appendChild(membres);
  divtext.appendChild(castList);
  bandDiv.appendChild(photo);
  bandDiv.appendChild(croix);
  bandDiv.appendChild(divtext);
  // bandDiv.appendChild(genreList);
  // bandDiv.appendChild(bandName);
  // bandDiv.appendChild(singer);
  // bandDiv.appendChild(year);
  // bandDiv.appendChild(membres);
  // bandDiv.appendChild(castList);
  collectionDiv.appendChild(bandDiv);
  i++;
});
