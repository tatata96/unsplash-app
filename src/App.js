import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import Search from "./pages/Search";
import Home from "./pages/Home";

import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos/?client_id=";
const CLIENT_ID = "5IzaDchWrL4MociV4hY0pXCviOe2hQP2TWjsh-629JQ";

function App() {
  const [photos, setPhotos] = useState([]);

  const [totalResults, setTotalResults] = useState(0); //set in app ?
  const [textInput, setTextInput] = useState("");
  const [dropDownInput, setDropDownInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPhotos = async (
    textInput = " ",
    dropDownInput = " ",
    page = " ",
    firstSearch = 0
  ) => {
    const { data } = await axios.get(
      `${API_URL}${CLIENT_ID}${`&query=${textInput}`}${`&collections=${dropDownInput}`}${`&page=${page}`}`
    );

    setTotalResults(data.total);
    setPhotos(data.results);
    if (firstSearch) {
      setCurrentPage(1);
    }
    //
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/p-search" exact>
            <Search
              fetchPhotos={fetchPhotos}
              textInput={textInput}
              setTextInput={setTextInput}
              dropDownInput={dropDownInput}
              setDropDownInput={setDropDownInput}
              photos={photos}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Route>

          <Route path="/p-home" exact>
            <Home
              totalResults={totalResults}
              fetchPhotos={fetchPhotos}
              textInput={textInput}
              setTextInput={setTextInput}
              dropDownInput={dropDownInput}
              setDropDownInput={setDropDownInput}
              photos={photos}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/**
HELPERS

https://developers.google.com/maps/documentation/geocoding/start

https://console.cloud.google.com/google/maps-apis/api-list?project=my-project-hipo&supportedpurview=project

 */
