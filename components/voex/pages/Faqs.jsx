import React, { useState } from "react";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import { Accordion, Button, Card } from "react-bootstrap";

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
const handleBtnClick = (e) => {
  e.preventDefault();
  const liIcon = e.currentTarget.children[1];
  const upIcons = document.querySelectorAll(".fa-angle-up");

  if (liIcon.classList.contains("fa-angle-down")) {
    liIcon.classList.remove("fa-angle-down");
    liIcon.classList.add("fa-angle-up");
  } else {
    liIcon.classList.remove("fa-angle-up");
    liIcon.classList.add("fa-angle-down");
  }
  upIcons.forEach((icon) => {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  });
};
//use State react

const Faqs = () => (
  <div>
    <GlobalStyles />
    <div className="h1-title text-white container ">
      <h1>Faqs</h1>
      <Accordion>
        <Card className="bg-transparent text-decoration-none  text-white d-flex justify-content-between  border-bottom border-secondary btn btn-link">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              onClick={handleBtnClick}
              className="text-decoration-none  text-white d-flex justify-content-between 
              border-bottom border-secondary"
            >
              <p>Members vs. Collectors?</p>
              <i className="fa-solid fa-angle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="bg-transparent ">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="2"
              onClick={handleBtnClick}
              className="text-decoration-none  text-white d-flex justify-content-between 
              border-bottom border-secondary"
            >
              <p>How VoEx memberships work</p>
              <i className="fa-solid fa-angle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div>
                <p>
                  a. Fill out our membership form: Our curation board, made up
                  of leaders in the liberty movement, will review your
                  information.
                </p>

                <p>
                  b. Speak with our team. We will schedule a time to talk about
                  your vision and the scope of your projects.
                </p>

                <p>
                  c. Onboarding: We’ll help you develop a robust NFT utility and
                  start minting your work on our marketplace.
                </p>
                <p>
                  d. Make the trade: Our team’s goal is to assure smooth and
                  frictionless transactions.
                </p>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="bg-transparent ">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="3"
              onClick={handleBtnClick}
              className="text-decoration-none  text-white d-flex justify-content-between 
              border-bottom border-secondary"
            >
              <p>Can I use a credit card?</p>
              <i className="fa-solid fa-angle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              a. Yes! VoEx allows for fiat currency. You can use our friendly
              payment system to purchase NFTs.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="bg-transparent ">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="4"
              onClick={handleBtnClick}
              className="text-decoration-none  text-white d-flex justify-content-between 
              border-bottom border-secondary"
            >
              <p>What Is ETH and what can I do with it?</p>
              <i className="fa-solid fa-angle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              a. Ethereum is a decentralized blockchain network powered by the
              Ether token that enables users to make transactions, earn interest
              on their holdings through staking, use and store nonfungible
              tokens (NFTs), trade cryptocurrencies, play games, use social
              media and so much more. Many consider Ethereum to be the
              internet’s next step. If centralized platforms like Apple’s App
              Store represent Web 2.0, a decentralized, user-powered network
              like Ethereum is Web 3.0. This “next-generation web” supports
              decentralized applications (DApps), decentralized finance (DeFi)
              and decentralized exchanges (DEXs), for instance.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="bg-transparent ">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
              onClick={handleBtnClick}
              className="text-decoration-none  text-white d-flex justify-content-between 
              border-bottom border-secondary"
            >
              <p>What are “Gas Fees”?</p>
              <i className="fa-solid fa-angle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              a. Gas fees are payments made by users to compensate for the
              computing energy required to process and validate transactions on
              the Ethereum blockchain. "Gas limit" refers to the maximum amount
              of gas (or energy) that you're willing to spend on a particular
              transaction.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="bg-transparent ">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="6"
              onClick={handleBtnClick}
              className="text-decoration-none  text-white d-flex justify-content-between 
              border-bottom border-secondary"
            >
              <p>What is a crypto wallet and how to open one?</p>
              <i className="fa-solid fa-angle-down"></i>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              a. A crypto wallet is a place where you can securely keep your
              crypto. There are many different types of crypto wallets, but the
              most popular ones are hosted wallets, non-custodial wallets, and
              hardware wallets. Which one is right for you depends on what you
              want to do with your crypto and what kind of safety net you want
              to have.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    <Footer />
  </div>
);
export default Faqs;
