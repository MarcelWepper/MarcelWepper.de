import React from "react";
import {
  Container,
  Row,
  Col,

} from "reactstrap";
import CookieConsent from "react-cookie-consent";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Star, Work } from "@mui/icons-material";
import { Parallax } from 'react-parallax'; // Import Parallax

import "./Home.css";
import Picture from "./Pics/code_background.jpg";
import Profile from "./Pics/me.png";

export default class Home extends React.Component {
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* Parallax Hero Section */}
        <Parallax bgImage={Picture} strength={500} style={{}}>
          <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Container className="grid background" style={{ marginTop: "5%" }}>
              {/* Transparent Box with Content */}
              <div className="HeroText">
                <Row>
                  <Col>
                    <img
                      src={Profile}
                      alt="ProfilePicture"
                      style={{
                        width: "25%",         // Sets the width to 25% of the parent container
                        borderRadius: "50%",   // Makes the image circular
                        objectFit: "cover"     // Ensures the image covers the entire area without distortion
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1>Marcel-René Wepper</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>PhD Candidate | PowerPlatform Architect</h3>
                  </Col>
                </Row>

                <Row>
                  <div className="SocialLinks">
                    <Col>
                      {/* LinkedIn Icon */}
                      <a
                        href="https://www.linkedin.com/in/marcel-rene-wepper/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                    </Col>
                                        <Col>
                      {/* University Icon */}
                      <a
                        href="https://www.bwl.uni-mannheim.de/hoehle/team/wissenschaftliche-mitarbeiter/marcel-rene-wepper/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        
                        <i className="fa fa-university" aria-hidden="true" />
                      </a>
                    </Col>
                  </div>
                  
                </Row>
              </div>
            </Container>
          </div>
        </Parallax>

        <h1 style={{ padding: "2%" }}> CV </h1>
        <div class="bg-light mb-4 py-3 py-sm-5"
          style={{ "background-color": "#e9ecef", "margin-bottom": "0%" }}
        >
                    <VerticalTimeline>
            {/* 2023 – Present: Ph.D. Candidate */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2023 – Present"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<School />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                University of Mannheim
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Ph.D. Candidate in Business Informatics
              </h4>
              <p>Pursuing doctoral research in Business Informatics at the University of Mannheim</p>
            </VerticalTimelineElement>

            {/* 2022 – Present: Platform Architect */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 – Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Work />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                DZ BANK AG, Frankfurt am Main
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Platform Architect, Low Code / No-Code DEV-Lead & Member of Cloud Competence Center
              </h4>
              <p>
                - Leading the development team in low code/no-code platforms<br />
                - Member of the Cloud Competence Center, focusing on cloud strategy and implementation
              </p>
            </VerticalTimelineElement>

            {/* 2019 – 2022: M.Sc. in Business Informatics */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019 – 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<School />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                University of Mannheim
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Master of Science in Business Informatics
              </h4>
              <p>Completed an international master's program in Business Informatics at the University of Mannheim</p>
            </VerticalTimelineElement>

            {/* 2021 – 2022: Lead Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 – 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Work />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                Osapiens GmbH, Mannheim
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Lead TypeScript / JavaScript Developer
              </h4>
              <p>
                - Led the TypeScript and JavaScript development team<br />
                - Oversaw project development and implementation
              </p>
            </VerticalTimelineElement>

            {/* 2020 – 2021: Junior Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 – 2021"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Work />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                Priming Cloud GmbH, Mannheim (acquired by Osapiens GmbH)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Junior TypeScript / JavaScript Developer
              </h4>
              <p>
                - Developed and maintained TypeScript and JavaScript applications<br />
                - Contributed to cloud-based solutions and services
              </p>
            </VerticalTimelineElement>

            {/* 2020: Trainee at KPMG */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Work />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                KPMG Germany
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Trainee Finance and Treasury Management – Consulting & JavaScript Developer
              </h4>
              <p>
                - Assisted in finance and treasury consulting projects<br />
                - Developed JavaScript-based solutions for financial applications
              </p>
            </VerticalTimelineElement>

            {/* 2019 – 2020: Research Assistant */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 – 2020"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Work />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                University of Mannheim
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Research Assistant – C++ Developer
              </h4>
              <p>
                - Participated in a Grid-Computing research project<br />
                - Developed C++ applications for data analysis and processing
              </p>
            </VerticalTimelineElement>

            {/* 2019: Founder at Gründermotor */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019"
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<Star />}
            >

                <h3 className="vertical-timeline-element-title">
                  Gründermotor
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Founder – CTO - Full Stack Developer
                </h4>

                <p>Start-Up focused on revolutionizing package delivery services</p>
              
            </VerticalTimelineElement>

            {/* 2016 – 2019: Dual Student at TRACOE medical GmbH */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 – 2019"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Work />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                TRACOE medical GmbH
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dual Student – Junior Project Manager
              </h4>
              <p>
                - Analyzed existing software landscapes<br />
                - Introduced and designed software solutions
              </p>
            </VerticalTimelineElement>

            {/* 2016 – 2019: B.Sc. in Business Informatics */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 – 2019"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<School />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontSize: "1.2em" }}
              >
                Duale Hochschule Baden-Württemberg (DHBW), Mannheim
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor of Science in Business Informatics
              </h4>
              <p>
                - Studied Business Informatics with a dual education model<br />
                - Gained practical experience alongside academic studies
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        {/*	Hier wird der Cookie und deren Parameter bestimmt	*/}
        <CookieConsent
          location="bottom"
          buttonText="Akzeptieren"
          cookieName="CookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Diese Webseite benutzt Cookies, um die Benutzererfahrung zu
          verbessern. Indem Sie diese Website nutzen, erklären Sie sich mit
          dieser Verwendung einverstanden.
        </CookieConsent>
      </div>
    );
  }
}
