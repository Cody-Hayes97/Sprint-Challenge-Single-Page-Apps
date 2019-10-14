import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setChar(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {char.map(name => {
        return (
          <div className="mapped-chars">
            <CharacterCard
              key={name.id}
              name={name.name}
              species={name.species}
              status={name.status}
              gender={name.gender}
              image={name.image}
            />
          </div>
        );
      })}
    </section>
  );
}
