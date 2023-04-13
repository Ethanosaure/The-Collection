const collection = [
  {
    picture: "/Assets/WSS.jpg",
    name: "While She Sleeps",
    Chanteur: "Lawrence Taylor",
    FormationYear: 2006,
    catégorie: "genre:",
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
    picture: "/Assets/FFDP.jpg",
    name: "Five Finger Death Punch",
    Chanteur: "Ivan Moody",
    FormationYear: 2005,
    catégorie: "genre:",
    genre: ["Groove Metal"],
    membres: "members:",
    cast: ["Ivan Moody", "Chris Kael", "Charlie Engen", "Andy James"],
  },
  {
    picture: "/Assets/Linkin park.jpg",
    name: "Linkin Park",
    Chanteur: "Chester Bennington",
    FormationYear: 1996,
    catégorie: "genre:",
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
    picture: "/Assets/django.jpg",
    name: "Django",
    Chanteur: "Django/Lazar Vachter",
    FormationYear: 2016,
    catégorie: "genre:",
    genre: ["Rap"],
    membres: "members:",
    cast: ["Django"],
  },
  {
    picture: "/Assets/carpenter brut.jpg",
    name: "Carpenter Brut",
    Chanteur: "Franck Hueso",
    FormationYear: 2012,
    catégorie: "genre:",
    genre: ["Rock électro"],
    membres: "members:",
    cast: ["Franck Hueso"],
  },
  {
    picture: "/Assets/Enter Shikari.jpg",
    name: "Enter Shikari",
    Chanteur: "Roughton Reynolds",
    FormationYear: 2003,
    catégorie: "genre:",
    genre: ["Post-hardcore"],
    membres: "members:",
    cast: ["Roughton Reynolds", "Chris Batten", "Liam Clewlow", "Rob Rolfe"],
  },
  {
    picture: "/Assets/Madredeus.jpg",
    name: "Madredeus",
    Chanteur: "Teresa Salgueiro",
    FormationYear: 1985,
    catégorie: "genre:",
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
    picture: "/Assets/Nirvana.jpg",
    name: "Nirvana",
    Chanteur: "Kurt Cobain",
    FormationYear: 1987,
    catégorie: "genre:",
    genre: ["Grunge"],
    membres: "members:",
    cast: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
  },
  {
    picture: "/assets/Soad.jpg",
    name: "System Of A Down",
    Chanteur: "Daron Malakian",
    FormationYear: 1994,
    catégorie: "genre:",
    genre: ["Rock", "Metal"],
    membres: "members:",
    cast: ["Daron Malakian", "Serj Tankian", "Shavo Odadjian", "John Dolmayan"],
  },
  {
    picture: "/Assets/Shawn Mendes.jpg",
    name: "Shawn Mendes",
    Chanteur: "Shawn Mendes",
    FormationYear: 2013,
    catégorie: "genre:",
    genre: ["Pop"],
    membres: "members:",
    cast: ["Shawn Mendes"],
  },
];

const collectionDiv = document.getElementById("collection");
collection.forEach((band) => {
  const bandDiv = document.createElement("div");
  bandDiv.classList.add("bandDiv");
  const photo = document.createElement("img");
  const bandName = document.createElement("h3");
  bandName.classList.add("bandName");
  const singer = document.createElement("p");
  singer.classList.add("singer");
  const year = document.createElement("p");
  year.classList.add("year");
  const categorie = document.createElement("h2");
  categorie.classList.add("categorie");
  const genreList = document.createElement("ul");
  genreList.classList.add("genreList");
  const membres = document.createElement("h3");
  membres.classList.add("membres");
  const castList = document.createElement("ol");
  castList.classList.add("castList");

  photo.src = band.picture;
  bandName.innerText = band.name;
  singer.innerText = `Singer : ${band.Chanteur}`;
  year.innerText = ` formation year : ${band.FormationYear}`;
  categorie.innerText = `genre:`;
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

  bandDiv.appendChild(photo);
  bandDiv.appendChild(bandName);
  bandDiv.appendChild(singer);
  bandDiv.appendChild(year);
  bandDiv.appendChild(categorie);
  bandDiv.appendChild(genreList);
  bandDiv.appendChild(membres);
  bandDiv.appendChild(castList);
  collectionDiv.appendChild(bandDiv);
});
