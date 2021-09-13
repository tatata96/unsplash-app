import React, { useState } from "react";
import SearchArea from "../Components/SearchArea";
import "./Search.css";

const Search = ({
  fetchPhotos,
  textInput,
  setTextInput,
  dropDownInput,
  setDropDownInput,
  setCurrentPage,
  currentPage,
}) => {
  const searchStyles = {
    main: {
      display: "flex",
      flexDirection: "column",
      width: "400px",
      margin: "auto",
      alignItems: "center",
      backgroundColor: "#050417",
      marginTop: "10%",
      // textAlign: "center",
      //height: "120px",
    },
    logo: {
      //margin: "2.5rem 25rem 0 0",
    },
    inputsWrapper: {},
    logoWrapper: {
      marginBottom: "15%",
      textAlign: "center",
    },
    textInput: {
      // marginTop: "6%",
      marginBottom: "3%",
    },
    dropDownInput: {
      marginBottom: "23%",
    },
    searchBtn: {
      marginTop: "18%",
    },
  };

  return (
    <div style={{ backgroundColor: "#050417" }}>
      <SearchArea
        displayLogoText={true}
        searchStyles={searchStyles}
        fetchPhotos={fetchPhotos}
        textInput={textInput}
        setTextInput={setTextInput}
        dropDownInput={dropDownInput}
        setDropDownInput={setDropDownInput}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></SearchArea>
    </div>
  );
};

export default Search;
