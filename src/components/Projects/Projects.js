import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projex from "../../Assets/Projects/projex.png";
import discuss from "../../Assets/Projects/discuss.png";
import send from "../../Assets/Projects/send.png";
import bridgeREx from "../../Assets/Projects/bridgeRex.png";
import Mazen from "../../Assets/Projects/mazen.png";
import naviscom from "../../Assets/Projects/naviscom.png";
import moosa from "../../Assets/Projects/moosa.png";
import github from "../../Assets/Projects/github.png";
import shamayai from "../../Assets/Projects/shamayai.png";
import nermeenali from "../../Assets/Projects/nermeenaii.png";
function Projects() {
  const projectData = [
    {
      imgPath: shamayai,
      title: "Shamay AI",
      shortDescription:
        "Shamay AI is an advanced automation tool designed for property firms.",
      detailedDescription:
        "Shamay AI is an advanced automation tool specifically designed for property firms. It streamlines complex processes, simplifies operations, and enhances decision-making with the help of AI-driven insights. The platform brings efficiency and scalability to property management and firm operations.",
      techStack: "Next.js, OpenAI, Langchain, PostgreSQL",
      link: "",
    },
    {
      imgPath: discuss,
      title: "Discuss App",
      shortDescription:
        "Discuss App provides secure and seamless video calls for companies.",
      detailedDescription:
        "Discuss App offers a private, high-quality virtual communication platform tailored specifically for companies seeking secure and seamless video calls. It enables efficient teamwork with better control and privacy.",
      techStack: "Next.js, Nest.js, Websockets, Mediasoup, PostgreSQL",
      link: "",
    },
    {
      imgPath: naviscom,
      title: "Naviscom",
      shortDescription:
        "Naviscom is an automated platform for deploying products on AWS.",
      detailedDescription:
        "Naviscom simplifies and accelerates the deployment of products on AWS. Designed for scalability and reliability, it streamlines cloud transitions and operations for businesses.",
      techStack: "Next.js, API integrations, AI Agents, PostgreSQL, AWS",
      link: "",
    },
    {
      imgPath: send,
      title: "Send App",
      shortDescription:
        "Send App is a real-time platform for seamless team collaboration.",
      detailedDescription:
        "Send App offers real-time messaging, file sharing, and project management for teams. Inspired by Slack, it enhances productivity and collaboration through robust communication tools.",
      techStack: "React.js, Node.js, PostgreSQL, Redis, Websockets",
      link: "",
    },
    {
      imgPath: moosa,
      title: "Moosa Academy",
      shortDescription: "A high-quality online learning platform.",
      detailedDescription:
        "Moosa Academy provides high-quality education and skill development opportunities. It offers a wide range of courses, empowering learners to advance their careers flexibly and effectively.",
      techStack: "React.js, Node.js, MongoDB",
      link: "",
    },
    {
      imgPath: projex,
      title: "Projex",
      shortDescription:
        "Projex is a versatile application for project management.",
      detailedDescription:
        "Projex simplifies project tracking, task management, and team collaboration. Modeled after ClickUp, it’s an ideal tool for organizations to organize and manage workflows.",
      techStack: "React.js, Django, PostgreSQL",
      link: "",
    },
    {
      imgPath: bridgeREx,
      title: "BridgeRex",
      shortDescription:
        "BridgeRex optimizes workflow through integrated solutions.",
      detailedDescription:
        "BridgeRex is a complete business management platform designed to optimize daily operations. It includes solutions for project management, attendance tracking, and more.",
      techStack: "React.js, Node.js, Redis",
      link: "",
    },
    {
      imgPath: Mazen,
      title: "Mazen TV",
      shortDescription:
        "Dedicated to health awareness videos and online doctor appointments.",
      detailedDescription:
        "Mazen TV provides valuable health information through videos, and allows users to book online doctor appointments, making healthcare more accessible.",
      techStack: "React.js, Firebase, MongoDB",
      link: "",
    },
   {
  imgPath: nermeenali,
  title: "Nermeen Ali",
  shortDescription:
    "Health awareness platform with 3D models and online doctor appointment payments.",
  detailedDescription:
    "Nermeen Ali offers a unique platform for healthcare awareness, combining high-quality videos, integration of Three.js for interactive 3D health models, and seamless payment gateway services for online doctor appointments. This ensures a comprehensive and accessible healthcare experience.",
  techStack: "React.js, Firebase, MongoDB, Three.js, Stripe/PayPal",
  link: "",
},
    {
      imgPath: github,
      title: "House Price Prediction",
      shortDescription:
        "A machine learning platform for estimating property values.",
      detailedDescription:
        "House Price Prediction uses ML models to analyze market trends and estimate property prices, helping institutions and individuals make informed decisions.",
      techStack: "Python, Scikit-learn",
      link: "https://github.com/codexsabir/LinearRegression",
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  const revealAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleExpandCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.h1
          className="project-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2, duration: 1 } }}
        >
          My Recent <strong className="purple">Works</strong>
        </motion.h1>
        <motion.p
          style={{ color: "white" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
        >
          Here are a few projects I've worked on recently.
        </motion.p>
        <motion.div layout>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projectData.map((project, index) => (
              <Col
                md={4}
                className="project-card"
                key={index}
                style={{ minHeight: "400px" }}
              >
                <motion.div
                  className="project-card-animation"
                  variants={revealAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    description={
                      <>
                        {expandedCard === index ? (
                          <>
                            <strong>Solution:</strong> {project.detailedDescription}
                            <br />
                            <strong>Tech Stack:</strong> {project.techStack}
                            <br />
                            <button
                              onClick={() => handleExpandCard(index)}
                              className="read-more-button"
                            >
                              Show Less
                            </button>
                          </>
                        ) : (
                          <>
                            <p>{project.shortDescription}</p>
                            <button
                              onClick={() => handleExpandCard(index)}
                              className="read-more-button"
                            >
                              Read More
                            </button>
                          </>
                        )}
                      </>
                    }
                    ghLink={project.link}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;