import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Arnav Agarwal </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />I am  pursuing my B-Tech in Computer Science Engineering from Ajay Kumar Garg Engineering College,Ghaziabad.
            
            <br />
            <br />
            Apart from coding, some of my hobbies include!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels Mystery
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Anchoring 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Great works are performed not by strength but by perseverance!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
