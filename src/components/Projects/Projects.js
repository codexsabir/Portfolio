import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projex from "../../Assets/Projects/projex.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import discuss from "../../Assets/Projects/discuss.png";
import send from "../../Assets/Projects/send.png";
import leauto from "../../Assets/Projects/leauto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discuss}
              isBlog={false}
              title="Discuss"
              description="Discuss App offers a seamless virtual communication experience, akin to the popular platform Zoom. It enables users to engage in high-quality video conferencing, fostering collaboration and connection across distances.Discuss App brings people together, facilitating smooth communication and efficient teamwork in any setting."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leauto}
              isBlog={false}
              title="LiAuto"
              description="Liauto is a cutting-edge automation application revolutionizing lead generation and campaign management. By seamlessly integrating advanced technologies, Liauto streamlines the process of identifying potential leads and orchestrating targeted marketing campaigns with unparalleled efficiency."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={send}
              isBlog={false}
              title="Send App"
              description="Send App is a dynamic communication platform inspired by the renowned tool Slack. It empowers teams to collaborate effortlessly, facilitating real-time messaging, file sharing, and project management. With its intuitive interface and robust features, Send App enhances productivity and fosters seamless collaboration, allowing teams to stay connected and achieve their goals with ease."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projex}
              isBlog={false}
              title="Projex"
              description="Projex is a versatile project management application modeled after the popular tool ClickUp. Offering a comprehensive suite of organizational features, Projex simplifies task management, team collaboration, and project tracking."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
