import React, { useState } from "react";
import LogoImg from "../Images/animal.png";
import LogoText from "../Images/logoText.png";
import LogoBg from "../Images/rect.png";
import SearchBtn from "../Images/searchBtn.png";

import { MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useHistory } from "react-router";
import "./SearchArea.css";

const dropDownOptions = [
  { title: "Pattern", id: 8961198 },
  { title: "Camping", id: 1114848 },
  { title: "Wings", id: "KizanWcExgU" },
  { title: "Landscape", id: "11649432" },
  { title: "Vaccine", id: "KXEAgXRhxtE" },
  { title: "Gaming", id: "9415206" },
];

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    fontSize: 14,
    fontWeight: 600,
    height: "50px",
    width: "400px",
  },

  dropDown: {
    color: "red",
  },
});

const SearchArea = ({
  fetchPhotos,
  searchStyles,
  displayLogoText,
  textInput,
  setTextInput,
  dropDownInput,
  setDropDownInput,
  currentPage,
  setCurrentPage,
}) => {
  const classes = useStyles();

  const history = useHistory();

  const handleSubmit = () => {
    if (!textInput || !dropDownInput) {
      console.log("ERROR IN SUBMISSION");

      return;
    } else {
      fetchPhotos(textInput, dropDownInput, "", 1);

      //  setCurrentPage(1);

      history.push("/p-home"); //problem?
    }
  };
  return (
    <div style={searchStyles.main} class="searchArea-wrapper">
      <div style={searchStyles.logoWrapper} className="logo-wrapper">
        <div style={searchStyles.logo} className="logo">
          <img src={LogoImg} className="logoImg" alt="Logo" />
          <img src={LogoBg} className="logoBg" alt="LogoBack" />
        </div>
        <img
          src={LogoText}
          style={{ display: displayLogoText ? "initial" : "none" }}
          className="logoText"
          alt="LogoText"
        />
      </div>

      <div style={searchStyles.inputsWrapper} className="inputs-wrapper">
        <TextField
          className={classes.root}
          style={searchStyles.textInput}
          label="Query"
          variant="filled"
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />

        <TextField
          className={`${classes.root} ${classes.dropDown}`}
          select
          label="Collections"
          variant="filled"
          style={searchStyles.textInput}
          onChange={(e) => setDropDownInput(e.target.value)}
          value={dropDownInput}
        >
          {dropDownOptions.map((option) => (
            <MenuItem
              className={classes.root}
              key={option.id}
              value={option.id}
            >
              {option.title}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <img
        src={SearchBtn}
        style={searchStyles.searchBtn}
        onClick={handleSubmit}
        alt="Search Button"
      />

      {/* 
  CANCELLED------------
 <Button
   className={classes.button}           

            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            SEARCH
          </Button>


           button:{
      backgroundColor: '#2A2B8D',
      color:'#FFFFFF',
       fontFamily:  'Open Sans',
    fontSize: 14,
    fontWeight:800,
    letterSpacing:'0.1em',
    lineHeight:'19px;',
    height:'50px',
    width:'246px',
    margin:'auto'
  },

*/}
    </div>
  );
};

export default SearchArea;
