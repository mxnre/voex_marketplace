import React, { useState } from "react";
import Footer from "@voex";

import {CardSupport,SupportTopic} from "@voex";

import { BaseLayout } from "@ui";
import { Accordion } from "react-bootstrap";


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
    <BaseLayout>
    
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

            <h1 className="text-start">Support Topic 1</h1>
            <Accordion className="bg-transparent" defaultActiveKey="0">
          
          <Accordion.Item
              eventKey="0"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 1</span>
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
                <span className="text-white">Support random 2</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item
              eventKey="2"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 3</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>



          
          <h1 className="text-start">Support Topic 2</h1>
            <Accordion className="bg-transparent" defaultActiveKey="0">
          
          <Accordion.Item
              eventKey="3"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 4</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item
              eventKey="4"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 5</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item
              eventKey="5"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 6</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>





          <h1 className="text-start">Support Topic 3</h1>
            <Accordion className="bg-transparent" defaultActiveKey="0">
          
          <Accordion.Item
              eventKey="6"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 7</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item
              eventKey="7"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 8</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item
              eventKey="8"
              className="bg-transparent border-0 border-bottom  border-secondary text-white"
            >
              <Accordion.Header>
                <span className="text-white">Support random 9</span>
              </Accordion.Header>
              <Accordion.Body>
              a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>


            </div>
        </div>
 
    </BaseLayout>
);
export default Support;
