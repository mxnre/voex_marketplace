import { BaseLayout } from "@ui";
import React from "react";

import { Accordion, Button, Card } from "react-bootstrap";
const handleBtnClick = ( e:any) => {
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
const Faqs = () => {
  return (
    <BaseLayout>
      <div>
        <div className="h1-title text-white container  ">
          <h1>Faqs</h1>

          <Accordion className="bg-transparent" defaultActiveKey="0">
          
          <Accordion.Item
              eventKey="0"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Members vs. Collectors?</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item
              eventKey="1"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">How VoEx memberships work</span>
              </Accordion.Header>
              <Accordion.Body>
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
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item
              eventKey="2"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Can I use a credit card?</span>
              </Accordion.Header>
              <Accordion.Body>
             <p>a. Yes! VoEx allows for fiat currency. You can use our friendly
              payment system to purchase NFTs.</p>
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item
              eventKey="3"
              className="bg-transparent border-0  border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">What Is ETH and what can I do with it?</span>
              </Accordion.Header>
              <Accordion.Body>
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
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="4"
              className="bg-transparent border-0  border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">What are “Gas Fees”?</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Gas fees are payments made by users to compensate for the
              computing energy required to process and validate transactions on
              the Ethereum blockchain. "Gas limit" refers to the maximum amount
              of gas (or energy) that you're willing to spend on a particular
              transaction.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item
              eventKey="5"
              className="bg-transparent border-0  border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">What is a crypto wallet and how to open one?</span>
              </Accordion.Header>
              <Accordion.Body>
              a. A crypto wallet is a place where you can securely keep your
              crypto. There are many different types of crypto wallets, but the
              most popular ones are hosted wallets, non-custodial wallets, and
              hardware wallets. Which one is right for you depends on what you
              want to do with your crypto and what kind of safety net you want
              to have.
              </Accordion.Body>
            </Accordion.Item>



           




          </Accordion>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Faqs;
