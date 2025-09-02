// Movie dataset
const movies = [
  {title: "The Shawshank Redemption", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", rating: 9.3, genre: "Drama", review: "Classic story of hope and friendship."},
  {title: "The Godfather", poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg", rating: 9.2, genre: "Crime", review: "Iconic mafia saga with stellar performances."},
  {title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 9.0, genre: "Action", review: "Dark, thrilling, and Heath Ledger is unforgettable."},
  {title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg", rating: 8.9, genre: "Crime", review: "Quentin Tarantino's classic crime masterpiece."},
  {title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: 8.8, genre: "Sci-Fi", review: "Mind-bending thriller with stunning visuals."},
  {title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", rating: 8.8, genre: "Drama", review: "Heartwarming journey through history and life."},
  {title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", rating: 8.8, genre: "Drama", review: "Twisted story of identity and rebellion."},
  {title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/aoiiG0WfL4r3cU7l4h0v3KJQpGy.jpg", rating: 8.7, genre: "Sci-Fi", review: "Revolutionary action with a philosophical twist."},
  {title: "The Lord of the Rings: The Return of the King", poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", rating: 8.9, genre: "Fantasy", review: "Epic conclusion to a legendary trilogy."},
  {title: "The Empire Strikes Back", poster: "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg", rating: 8.7, genre: "Sci-Fi", review: "Darker and thrilling second installment of Star Wars."},
  {title: "Gladiator", poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", rating: 8.5, genre: "Action", review: "Epic revenge story with stunning visuals."},
  {title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", rating: 8.6, genre: "Sci-Fi", review: "Space adventure with emotional depth."},
  {title: "The Prestige", poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg", rating: 8.5, genre: "Mystery", review: "A masterclass in illusion and rivalry."},
  {title: "The Departed", poster: "https://image.tmdb.org/t/p/w500/6bn6yXfYd8EdM1vRsQeG65jFZ7K.jpg", rating: 8.5, genre: "Crime", review: "Intense undercover cop thriller."},
  {title: "The Lion King", poster: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", rating: 8.5, genre: "Animation", review: "Timeless story of courage and family."},
  {title: "The Green Mile", poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg", rating: 8.6, genre: "Drama", review: "Emotional story of miracles and humanity."},
  {title: "Se7en", poster: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg", rating: 8.6, genre: "Thriller", review: "Dark, gripping serial killer story."},
  {title: "Star Wars: A New Hope", poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", rating: 8.6, genre: "Sci-Fi", review: "The iconic beginning of a galaxy-spanning saga."},
  // ... (add remaining movies up to 50 in same format)
];

// Dark/Light toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Populate movies
const moviesGrid = document.getElementById("moviesGrid");
movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-rating">⭐ ${movie.rating}</div>
            <div class="movie-review">${movie.review}</div>
        </div>
    `;
    moviesGrid.appendChild(card);
});
