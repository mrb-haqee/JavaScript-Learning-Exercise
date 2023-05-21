const movies = [
  {
    id: 1,
    name: "Avengers end game",
    genre: "Action",
    soldTicket: 149,
    capacity: 150,
  },
  {
    id: 2,
    name: "La la Land",
    genre: "Romance",
    soldTicket: 20,
    capacity: 75,
  },
  {
    id: 3,
    name: "Beauty and the Beast",
    genre: "Romance",
    soldTicket: 50,
    capacity: 50,
  },
  {
    id: 4,
    name: "Superman vs Batman",
    genre: "Action",
    soldTicket: 150,
    capacity: 250,
  },
  {
    id: 5,
    name: "Transformer",
    genre: "Action",
    soldTicket: 90,
    capacity: 90,
  },
  {
    id: 6,
    name: "5 feet apart",
    genre: "Romance",
    soldTicket: 25,
    capacity: 45,
  },
  {
    id: 7,
    name: "Hamilton",
    genre: "Musical",
    soldTicket: 295,
    capacity: 300,
  },
  {
    id: 8,
    name: "Dear Evan Hansen",
    genre: "Musical",
    soldTicket: 150,
    capacity: 200,
  },
  {
    id: 9,
    name: "Conjuring",
    genre: "Horror",
    soldTicket: 30,
    capacity: 100,
  },
  {
    id: 10,
    name: "Annabelle",
    genre: "Horror",
    soldTicket: 10,
    capacity: 30,
  },
  {
    id: 11,
    name: "Fast and Furios",
    genre: "Action",
    soldTicket: 25,
    capacity: 40,
  },
  {
    id: 12,
    name: "Romeo and Julet",
    genre: "Romance",
    soldTicket: 15,
    capacity: 15,
  },
  {
    id: 13,
    name: "Wicked",
    genre: "Musical",
    soldTicket: 75,
    capacity: 75,
  },
];
function findMovies(favoriteGenre) {
  let result = [];
  for (let i = 0; i < favoriteGenre.length; i++) {
    let arr = movies.filter((value) => {
      if (value.genre === favoriteGenre[i]) {
        return value;
      }
    });
    result.push(...arr);
  }
  return result; // TODO: replace this
}

function findTicketAvailability(movie, user) {
  if (movie.capacity - movie.soldTicket >= user.ticket) {
    return true;
  } else {
    return false;
  }
  // TODO: replace this
}

function findRecommendation(user) {
  let FillMovies = findMovies(user.favoriteGenre);
  let result = [];
  FillMovies.forEach((movie) => {
    let check = findTicketAvailability(movie, user);
    if (check) {
      result.push(movie);
    }
  });
  return result; // TODO: replace this
}

function generateRecommendation(user) {
  let genres = [];
  movies.forEach((value) => {
    if (!genres.includes(value.genre)) {
      genres.push(value.genre);
    }
  });
  let check = false;
  user.favoriteGenre.forEach((value1) => {
    genres.forEach((value2) => {
      if (value1 === value2) {
        check = true;
      }
    });
  });
  if (!check) {
    return "Tidak ada film yang sesuai kriteria";
  }
  let Recommend = findRecommendation(user);
  return Recommend.map((value) => {
    let Payment = {};
    Payment.id = value.id;
    Payment.name = value.name;
    Payment.genre = value.genre;
    switch (Payment.genre) {
      case "Action":
        Payment.totalPrice = 100000 * user.ticket;
        return Payment;
      case "Musical":
        Payment.totalPrice = 80000 * user.ticket;
        return Payment;
      case "Romance":
        Payment.totalPrice = 40000 * user.ticket;
        return Payment;
      case "Horror":
        Payment.totalPrice = 75000 * user.ticket;
        return Payment;
    }
  }); // TODO: replace this
}
let user1 = {
  name: "Aditira",
  ticket: 1,
  favoriteGenre: ["Action", "Musical", "Romance", "Horror"],
};

let user2 = {
  name: "Eddy",
  ticket: 20,
  favoriteGenre: ["Musical", "Romance"],
};

let user3 = {
  name: "Afis",
  ticket: 1,
  favoriteGenre: ["Sci Fi", "Documentary", "Thriller"],
};

console.log(generateRecommendation(user1));

module.exports = {
  findMovies,
  findTicketAvailability,
  findRecommendation,
  generateRecommendation,
};
