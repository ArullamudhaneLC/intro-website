import React, { Component } from 'react';
import { Link } from "react-scroll";

class Navbar extends Component {

  render() {
    document.addEventListener("scroll", function (e) {
      console.log('width ' + window.screen.width);
      console.log('scrolly ' + window.scrollY);
      if (window.screen.width < 768 && window.scrollY > 690) {
        const gotop = document.querySelector(".gotop");
        gotop.classList.add("display");

        const nav = document.querySelector(".navbar");
        console.log('ifff');
        nav.classList.add("navopened");
      } else if (window.screen.width > 768 && window.scrollY > 220) {
        const gotop = document.querySelector(".gotop");
        console.log(JSON.stringify(gotop));
        gotop.classList.add("display");

        const nav = document.querySelector(".navbar");

        console.log('ELSE 1 ifff');
        nav.classList.add("navopened");
      } else {
        const nav = document.querySelector(".navbar");
        const gotop = document.querySelector(".gotop");
        gotop.classList.remove("display");
        nav.classList.remove("navopened");
        console.log('ELSE 2 ifff');
      }
    });
    return (
      <div class="div-navbar">
        <nav className="navbar">
          {/* <div className="container"> */}
            {/* <div className="row"> */}
              <h1 className="logo">
                <Link
                  spy={true}
                  smooth={true}
                  duration={1000}
                  to="headerbg"
                  style={{ cursor: "pointer" }}
                >
                  Blueto
                </Link>
              </h1>
              <ul className="bar">
                <li>
                  <Link
                    //onClick={}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    to="headerbg"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    // //onClick={}
                    activeClass="active"
                    to="whobg"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Intro
                  </Link>
                </li>
                <li>
                  <Link
                    // //onClick={}
                    to="new-page"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    activeClass="active"
                  >
                    New
                  </Link>
                </li>
                <li>
                  <Link
                    //onClick={}
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    activeClass="active"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;