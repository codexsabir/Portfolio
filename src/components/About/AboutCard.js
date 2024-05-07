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
            I am currently working as a MERN Stack Web-developer at Brandora.
            <br />
            I am doing BSCS from (KUST)
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
          "Embark on a journey of web development where every line of code becomes a bridge to connect, empower, and transform lives across the digital landscape".{" "}
          </p>
          <footer className="blockquote-footer">CodeXSabir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
