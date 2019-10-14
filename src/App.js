import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Link, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main className="card-body">
      <Header />

      <SearchForm />
      <br />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="characters">Characters</Link>
        </li>
      </ul>

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
    </main>
  );
}
