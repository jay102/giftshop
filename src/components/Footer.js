import React from "react";

const Footer = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue darken-3">
          <ul className="left hide-on-med-and-down">
            <li>
              <div style={{ paddingLeft: "20px"}}>  Join Our Newsletter
        <i className="material-icons right">email</i>
              </div>
            </li>
            <li>
              <div style={{ paddingLeft: "20px" }}>Become an affiliate
        <i className="material-icons right">assignment</i>
              </div>
            </li>
            <li>
              <div style={{ paddingLeft: "20px" }}>Contact Us
        <i className="material-icons right ">email</i>
              </div>
            </li>
          </ul>
          <ul className="right  hide-on-med-and-down">
            <li><a href="#"><img src="https://img.icons8.com/material-rounded/24/000000/facebook-f--v1.png" /></a></li>
            <li><a href="#"><img src="https://img.icons8.com/offices/30/000000/twitter.png" /></a></li>
            <li><a href="#"><img src="https://img.icons8.com/metro/26/000000/youtube.png" /></a></li>
          </ul>
        </div>
      </nav>

      <div className="row black ">
        <div className="col 16 s4">
          <p className="white-text" style={{ paddingLeft: "20px" }}>Resources</p>
          <ul style={{ paddingLeft: "20px" }}>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col 16 s4">
          <p className="white-text">Free Tutorial</p>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col 16 s4">
          <p className="white-text" >Company</p>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default Footer;
    