import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbSql } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiApachecassandra,
  SiPython
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiApachecassandra />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {/* next hjs  */}
            <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          alt="nextjs"
          style={{
            width: "70px",
            height: "70px",
            filter: "invert(1)"
          }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
          alt="typescript"
          style={{
            width: "70px",
            height: "70px",
          }}
        />
      </Col>
      {/* Machine Learning */}
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
          alt="sklearn"
          style={{
            width: "70px",
            height: "70px",

            
          }}
        />
      </Col>
      {/* add column of nest.js */}
      {/* Nest.js */}
      {/* add column of sql */}
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
    </Row>
  );
}

export default Techstack;
