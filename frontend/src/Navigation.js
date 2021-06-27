import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./assets/logo.png";
import "./styles.css";

function Nav({ isCurrentPackage }) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  //This useEffect will be called everytime the user Scrolls
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    //Back tick is used for string entapulation
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() =>
            isCurrentPackage
              ? history.push("/")
              : history.push("/profile", alert("⚠️Subscribe First"))
          }
          className="nav__logo"
          src={logo}
          alt="Logo"
        />
        <button className="nav__button" onClick={() => history.push("/")}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Nav;
