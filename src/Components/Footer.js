import React from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./Home.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Container className="grid">
          <Row>
            <Col md="4" sm="12">
              {" "}
              <a style={{ color: "#fff" }} href="mailto:marcelwepper@gmail.com">
                E-Mail
              </a>
            </Col>
            <Col md="4" sm="12">
              {" "}
              <NavLink to="/contact" className="NavLink">
                Impressum
              </NavLink>
            </Col>
            <Col md="4" sm="12">
              {" "}
              <NavLink to="/contact" className="NavLink">
                Datenschutzhinweis
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col md="12" sm="12">
              {" "}
              <p
                style={{
                  color: "#fff",
                  "font-size": "0.8em",
                  "padding-top": "0.5%"
                }}
              >
                Die Seite wurde von mir in React programmiert.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
