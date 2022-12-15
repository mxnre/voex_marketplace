import React, { useState } from "react";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import CardSupport from "../components/CardSupport";
import SupportTopic from "../components/SupportTopic";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;
//use State react

const obj = [
  {
    title: "Support random 1",
    text:"lorem ipsum dolor sit amet, consectetu."
  },
  {
    title: "Support random 2",
    text:"lorem ipsum dolor sit amet, consectetu."
  },
  {
    title: "Support random 3",
    text:"lorem ipsum dolor sit amet, consectetu."
  },
]

const Support = () => (
    <div>
        <GlobalStyles />
        <div className="h1-title text-white container ">
            <h1 className="text-center">Support</h1>
           
            <div className="row d-flex justify-content-center mb-5">
              <CardSupport text="Support Topic 1" />
              <CardSupport text="Support Topic 2" />
              <CardSupport text="Support Topic 3" />
              <CardSupport text="Support Topic 4" />
              <CardSupport text="Support Topic 5" />
              <CardSupport text="Support Topic 6" />

            </div>
            <div className="row d-flex justify-content-center">
              <SupportTopic title="Support Topic 1" arrayToggle={obj} />

              <SupportTopic title="Support Topic 2" arrayToggle={obj} />

            </div>
        </div>
        <Footer />
    </div>
);
export default Support;
