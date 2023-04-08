import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Movies from "./Movies";
import CompanyInfo from "./CompanyInfo";
import React, { useState, useEffect } from "react";
import Nav from "./Navigation";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setMovies] = useState({});
  const [allData, setAllMovies] = useState({});

  const handleOnLogin = function (loggedIn) {
    setLoggedIn(loggedIn);
  };

  const getMoviesList = (
    filters = {
      genre: "all",
      sort: "voting",
      language: "telugu",
      category: "movies",
    }
  ) => {
    fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the movieList state with the API response data
        setMovies(data.result);
        setAllMovies(data.result);
      })
      .catch((error) => {
        console.error("Error fetching movie list:", error);
      });
  };

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") ?? false);
    getMoviesList();
  }, [loggedIn]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav loggedIn={loggedIn} setIsAuth={handleOnLogin} />
        <Switch>
          <Redirect exact from="/" to={loggedIn ? "/movies" : "/login"} />
          <Route exact path="/signup">
            {" "}
            <Signup />{" "}
          </Route>
          <Route exact path="/login">
            {" "}
            <Login setIsAuth={handleOnLogin} />{" "}
          </Route>
          <Route exact path="/movies">
            {" "}
            <Movies data={data} allData={allData} setFilters={getMoviesList} setMovies={setMovies} />{" "}
          </Route>
          <Route exact path="/info">
            {" "}
            <CompanyInfo />{" "}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
