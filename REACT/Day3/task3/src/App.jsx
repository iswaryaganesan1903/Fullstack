import React from "react";
import "./App.css";
//import MoviePoster from "./assets/movie.jpg"; // Add your movie image in assets

const App = () => {
  return (
   <>
    <div className="container">
      <div className="movie-card">
        <img src="./images.jpg" alt="Movie Poster" className="movie-image" />
        <div className="movie-details">
          <h2>Karuppu</h2>
          <p><strong>Hero:</strong> Surya</p>
          <p><strong>Collection:</strong> ₹300 Crores</p>
        </div>
      </div>
    </div>
   </>
  );
};

export default App;