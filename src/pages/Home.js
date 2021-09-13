import React from "react";
import SearchArea from "../Components/SearchArea";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import Map from "../Components/Map";
import Pagination from "../Components/Pagination";
import Arrow from "../Images/arrow.png";
import LocationIcon from "../Images/Union.png";

//import Pagination from "@material-ui/core/Pagination";
import { CircularProgress } from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import "./Home.css";

///// STYLING FOR SEARCH AREA,
const searchStyles = {
  main: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: "auto",
    alignItems: "center",
    backgroundColor: "#050417",
    marginTop: "inherit",
    height: "6.6em",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    //  margin: "2.5rem 25rem 0 0",
  },
  logoWrapper: {
    // marginBottom: "3%",
    display: "initial",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputsWrapper: {
    display: "grid",
    gridTemplateAreas: '"MuiFormControl-root MuiFormControl-root"',
    gridGap: "2em",
  },
  textInput: {
    width: "57vh",
  },
  dropDownInput: {
    marginLeft: "1.875rem",
    marginBottom: "6%",
    width: "57vh",
  },
  searchBtn: {
    marginRight: "4em",
  },
};

///// STYLING FOR MODAL

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "65vh",
    height: " 80vh",
    backgroundColor: " #FFFFFF",

    padding: (20, 40, 30),
    borderRadius: "10px",
  },
  button: {
    width: "16vh",
    height: "5vh",
    fontSize: ".7em",
    backgroundColor: "#FFFFFF",
    border: "2px solid #2A2B8D",
    borderRadius: "10px",
    fontFamily: "Open Sans",
    color: "#2A2B8D",
  },
}));

const Home = ({
  photos,
  fetchPhotos,
  totalResults,
  textInput,
  setTextInput,
  dropDownInput,
  setDropDownInput,
  currentPage,
  setCurrentPage,
}) => {
  //MODAL //////////////////////
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({
    username: "",
    location: "",
    userfirstName: "",
    userphoto: "",
    photosrc: "",
  });

  const handleOpen = (e) => {
    setModalInfo({
      username: e.getAttribute("username"),
      location: e.getAttribute("location"),
      userfirstname: e.getAttribute("userfirstname"),
      userphoto: e.getAttribute("userphotosource"),
      photosrc: e.getAttribute("src"),
      userphotosource: e.getAttribute("userphotosource"),
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var modalBody = (
    <div style={{ top: "8%", left: "33%" }} className={classes.paper}>
      <img
        alt="modal photo"
        style={{
          width: "65vh",
          height: " 45vh",
        }}
        className="modal-photo"
        src={modalInfo.photosrc}
      />
      <div className="userinfo-row">
        <img
          alt="username photo"
          className="user-photo"
          src={modalInfo.userphotosource}
        />
        <div className="user-names">
          <div className="firstName">{modalInfo.username}</div>

          <div className="userName">@{modalInfo.userfirstname}</div>
        </div>

        <div className="download-btn">
          <a
            href={modalInfo.photosrc}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button
              className={classes.button}
              variant="outlined"
              size="large"
              //       onClick={handleSubmit}
            >
              <img
                alt="button"
                style={{ height: "1.3vh", marginRight: "16%" }}
                src={Arrow}
              />
              Download
            </Button>
          </a>
        </div>
      </div>
      {modalInfo.location ? (
        <div className="map-wrapper">
          <Map location={modalInfo.location}></Map>
          <div className="loc-wrapper">
            <img alt="icon" src={LocationIcon} />
            {modalInfo.location}
          </div>
        </div>
      ) : (
        <div className="modal-error">
          <p>Location information not available. </p>
        </div>
      )}
    </div>
  );

  /// PAGINATION

  const numberPages = Math.floor(totalResults / 10);

  function nextPage(pageNumber) {
    fetchPhotos(textInput, dropDownInput, pageNumber);
    setCurrentPage(pageNumber);
  }

  if (photos.length == 0) {
    var noResult = (
      <div className="error-wrapper">
        <p style={{ fontFamily: "Open Sans" }}>Nothing Found</p>
      </div>
    );
  }

  return (
    <div>
      {/**  SEARCH AREA  */}
      <SearchArea
        displayLogoText={false}
        searchStyles={searchStyles}
        fetchPhotos={fetchPhotos}
        textInput={textInput}
        setTextInput={setTextInput}
        dropDownInput={dropDownInput}
        setDropDownInput={setDropDownInput}
      ></SearchArea>
      {/**  IMAGES GRID AND MODAL  */}

      {photos !== undefined && photos.length >= 0 ? (
        <>
          <div className="imagesDiv-wrapper">
            <div className="imagesDiv">
              {photos.map((photo, index) => (
                <img
                  alt="grid photo"
                  className="photo"
                  key={index}
                  username={photo.user.username}
                  userfirstname={photo.user.first_name}
                  userphotosource={photo.user.profile_image.medium}
                  location={photo.user.location}
                  src={photo.urls.small}
                  onClick={(e) => handleOpen(e.target)}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
      {photos.length == 0 ? noResult : ""}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>

      {/**  PAGINATION  */}

      {totalResults > 3 ? (
        <Pagination
          pages={numberPages}
          nextPage={nextPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          textInput={textInput}
          setTextInput={setTextInput}
          dropDownInput={dropDownInput}
          setDropDownInput={setDropDownInput}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
