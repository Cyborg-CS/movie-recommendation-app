import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const movieDB = {
    Biopics: [
      {
        name: "Bohemian Rhapsody",
        rating: "7.9/10",
        description:
          "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness."
      },
      {
        name: "The Social Network",
        rating: "7.7/10",
        description:
          "Mark Zuckerberg creates a social networking site, Facebook, with his friend Eduardo's help. Though it turns out to be a successful venture, he severs ties with several people along the way."
      },
      {
        name: "The Imitation Game",
        rating: "8/10",
        description:
          "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes."
      },
      {
        name: "Hacksaw Ridge",
        rating: "8.1/10",
        description:
          "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot."
      },
      {
        name: "Into the Wild",
        rating: "8.1/10",
        description:
          "Christopher McCandless, a young graduate, decides to renounce all his possessions and hitchhike across America. During his journey, he encounters several situations which change him as a person."
      }
    ],
    Drama: [
      {
        name: "The Intern",
        rating: "7.1/10",
        description:
          "Ben Whittaker, a 70-year-old widower, realises that he is not cut out for retirement. He then applies to become a senior intern for a sceptical boss at an online fashion site."
      },
      {
        name: "Due Date",
        rating: "6.5/10",
        description:
          "High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time."
      },
      {
        name: "Once Upon A Time In Hollywood",
        rating: "7.6/10",
        description:
          "Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski."
      },
      {
        name: "The Terminal",
        rating: "7.5/10",
        description:
          "Viktor Navorski gets stranded at an airport when a war rages in his country. He is forced by the officials to stay at the airport until his original identity is confirmed."
      },
      {
        name: "A Beautiful Day In The Neighborhood",
        rating: "7.3/10",
        description:
          "Lloyd Vogel, a cynical journalist, gets acquainted with a kind-hearted television presenter, Fred Rogers, while writing an article on him. With time, the two strike an unlikely friendship."
      }
    ],
    Thriller: [
      {
        name: "Shutter Island",
        rating: "8.2/10",
        description:
          "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place."
      },
      {
        name: "The Departed",
        rating: "8.5/10",
        description:
          "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
      },
      {
        name: "Gone Girl",
        rating: "8.1/10",
        description:
          "Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary."
      },
      {
        name: "Catch Me If You Can",
        rating: "8.1/10",
        description:
          "Notorious con artist Frank Abagnale has duped people worth millions of dollars with his masterful art of deception. With his scams getting bolder, he is soon pursued by FBI agent Carl Hanratty."
      },
      {
        name: "Parasite",
        rating: "8.6/10",
        description:
          "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life."
      }
    ]
  };

  const [movies, setMovies] = useState("Biopics");

  function getMoviesToRecommend(genre) {
    setMovies(genre);
  }
  //  console.log(movies)
  return (
    <div className="App">
      <div className="container">
        <h1>🎦 Movies to watch</h1>
        <p id="header-text">Pick any genre below</p>
        <div id="btn-list">
          {Object.keys(movieDB).map((genre) => {
            return (
              <button
                id="genre-btn"
                // style={{ marginRight: "1rem" }}
                key={genre}
                onClick={() => getMoviesToRecommend(genre)}
              >
                {genre}
              </button>
            );
          })}
        </div>
        {/* <hr /> */}
        <ul>
          {movieDB[movies].map(function (movie) {
            return (
              <li key={movie.name} id="list-item">
                <h3
                  style={{
                    marginBottom: "1rem"
                  }}
                >
                  {movie.name}
                </h3>
                <div
                  style={{
                    marginBottom: "10px"
                  }}
                >
                  {movie.rating}
                </div>
                <p>{movie.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// https://codesandbox.io/s/khjxk?file=/src/App.js
