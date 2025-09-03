import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sabir Ud Din </span>
            from <span className="purple"> Kohat, Pakistan.</span>
            <br />
            I am currently working as a SOFTWARE ENGINEER at Brandora.


            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "A Developer Never Bound with a specific tech Stack".{" "}
          </p>
          <footer className="blockquote-footer">CodeXSabir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
