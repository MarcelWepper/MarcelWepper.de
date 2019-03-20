import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import CookieConsent from "react-cookie-consent";
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Star, Work } from '@material-ui/icons';

import './Home.css';
import  Picture from'./Pics/code_background.jpg';
import  Code from'./Pics/code.jpg';
import  Profile from'./Pics/me.png';
import  SEO from'./Pics/SEO.jpg';
import  Project from'./Pics/Project.jpg';
import  ReactPic from'./Pics/react.png';
import  Amazon from'./Pics/amazon.png';
import  Java from'./Pics/java.png';
import SQL from'./Pics/sql.png';


export default class Home extends React.Component {

  componentWillUnmount(){
    window.scrollTo(0, 0)
  }

	render(){
		return(
			<div>
				{/* Hero-Image */}
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
					{/*  Grid-System */}
					<Container className= "grid background">

						{/* 	Hier die trasnparente Box mit allem	*/}
						<div className= "HeroText">
							<Row>
								<Col> <img src={Profile} alt="ProfilePicture"rounded responsive /></Col>
							</Row>
							<Row>
								<Col><h1> Marcel-René Wepper</h1></Col>
							</Row>
							<Row>
								<Col><h3> Web-Design | Projekt-Management | Online-Marketing  </h3></Col>
							</Row>

							<Row>
								<div className="SocialLinks">
									<Col>{/* LinkedIn Icon */}
									<a href="https://www.linkedin.com/in/marcel-rené-wepper-a25421169/" rel="noopener noreferrer" target="_blank">
										<i className ="fa fa-linkedin-square" aria-hidden="true" />
									</a></Col>
									<Col>{/* Weppes Icon */}
										<a href="https://www.xing.com/profile/MarcelRene_Wepper/cv" rel="noopener noreferrer" target="_blank">
											<i class="fab fa-xing-square" color="white"  aria-hidden="true"></i>
										</a></Col>
                    <Col>{/* Weppes Icon */}
  									<a href="http://weppes.de" rel="noopener noreferrer" target="_blank">
  									  <i className ="fas fa-wine-bottle " color="white"  aria-hidden="true" />
  									</a></Col>
								</div>
							</Row>
						</div>
					</Container>
				</LazyHero>

				<div className="HomeText">

				</div>

				{/* CARDS */}
					<Jumbotron fluid>
        		<Container fluid>
							<Row>
                <Col>
                <h1 style={{"padding-bottom":"1%"}}> Kompetenz und Expertise in folgenden Bereichen </h1>
                </Col>
              </Row>
              <Row>
								<Col md="4" sm="12">
								<Fade left delay={300}>
									<Card body className="CardText">
								    <CardImg top width="100%" src={Code} alt="Card image cap" />
							      <CardBody>
							        <CardTitle tag="h3">Web-Design</CardTitle>
							        <CardText>Sie wollen eine moderne Webseite, welche für mobile Geräte optimiert und günstig im Unterhalt ist?</CardText>
                      <CardText>Durch zahlreiche Projekte habe ich Erfahrung in genau diesem Bereich gesammelt!</CardText>
							      </CardBody>
								  </Card>
									</Fade>
								</Col>
								<Col md="4" sm="12">
  								<Fade left delay={200}>
                    <Card body className="CardText">
                      <CardImg top width="100%" src={Project} alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h3">Projekt-Management</CardTitle>
                        <CardText>Mit Erfahrung im klassischen und agilen Projekt-Management helfe ich bei der erfolgreichen Umsetzung von Projekten. </CardText>
                        <CardText>Besonderes bei der Konzeption und Implementierung von Softwareprojekten.</CardText>
                      </CardBody>
                    </Card>
			            </Fade>
								</Col>
								<Col md="4" sm="12">
								<Fade left>
                  <Card body className="CardText">
                    <CardImg top width="100%" src={SEO} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h3">Online-Marketing</CardTitle>
                      <CardText>Sie haben eine tolle, neue Idee, und die Webseite steht auch schon. Es fehlen bloß noch die Besucher auf der Seite? </CardText>
                      <CardText>Durch Online-Marketing lässt sich dies ändern!</CardText>
                    </CardBody>
                  </Card>
                  </Fade>
								</Col>
							</Row>
        		</Container>
      		</Jumbotron>

          <h1 style={{"padding-left":"2%"}}> Erfahrung und Projekte </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 - present"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">B. Sc. Wirtschaftsinformatik</h3>
              <h4 className="vertical-timeline-element-subtitle">DHBW Mannheim</h4>
              <p>
                Java, SQL, Datenbankdesign, Systemanalyse und -entwurf, Marketing, BWL
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">Dualer Student - Wirtschaftsinformatik</h3>
              <h4 className="vertical-timeline-element-subtitle">TRACOE medical GmbH, Nieder-Olm</h4>
              <p>
                Junior Projekt-Manager
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - present"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<Star />}
            >
              <h3 className="vertical-timeline-element-title">easyvent.io</h3>
              <h4 className="vertical-timeline-element-subtitle">Front-End Developer / App-Developer</h4>
              <p>
                Start-Up - Digitalisierung der Event-Branche
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - present"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<Star />}
            >
              <h3 className="vertical-timeline-element-title">Weppes - Wein</h3>
              <h4 className="vertical-timeline-element-subtitle"> Besuche meine Webseite:
                <a href="http://weppes.de" rel="noopener noreferrer" target="_blank">
                  <i className ="fas fa-wine-bottle " color="white"  aria-hidden="true" />
                </a>
              </h4>
              <p>
                Apfelwein und mehr...
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Nov. 2018"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">Project-Management - PRINCE 2</h3>
              <h4 className="vertical-timeline-element-subtitle">Foundation Zertifikat</h4>
              <p>
                Im Rahmen einer mehrtätigen Weiterbildung erworben.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Sep. 2017"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">Grundlagen des digitalen Marketings</h3>
              <h4 className="vertical-timeline-element-subtitle">Google Zertifikat</h4>
              <p>
                Im Rahmen eines Online-Kurses von Google erlangt.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2012 - 2016"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">Assistent der Geschäftsführung</h3>
              <h4 className="vertical-timeline-element-subtitle">H. Schembs Architekturbüro</h4>
              <p>
                Zahlreiche Aufgaben in der Administration.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

  				{/* CARDS */}
  					<Jumbotron fluid>
          		<Container fluid>
  							<Row>
                  <Col>
                  <h1 style={{"padding-bottom":"1%"}}> IT-Kentnisse in folgenden Bereichen: </h1>
                  </Col>
                </Row>
                <Row>
  								<Col md="3" sm="12">
  								<Fade left delay={300}>
  									<Card body className="CardText">
  								    <CardImg top width="100%" src={ReactPic} alt="Card image cap" />
  							      <CardBody>
  							        <CardTitle tag="h3">JSX - React</CardTitle>
  							        <CardText>Front-End Developer für React und React Native Apps.</CardText>
  							      </CardBody>
  								  </Card>
  									</Fade>
  								</Col>
  								<Col md="3" sm="12">
    								<Fade left delay={200}>
                      <Card body className="CardText">
                        <CardImg top width="100%" src={Amazon} alt="Card image cap" />
                        <CardBody>
                          <CardTitle tag="h3">AWS - Cloud</CardTitle>
                          <CardText> Durch intensive Arbeit mit der AWS - Cloud sind hier Kentnisse vorhanden. </CardText>
                        </CardBody>
                      </Card>
  			            </Fade>
  								</Col>
    							<Col md="3" sm="12">
    								<Fade left delay={300}>
    									<Card body className="CardText">
    								    <CardImg top width="100%" src={Java} alt="Card image cap" />
    							      <CardBody>
    							        <CardTitle tag="h3">Java</CardTitle>
    							        <CardText>Desktop sowie Android Applications.</CardText>
    							      </CardBody>
    								  </Card>
    									</Fade>
    								</Col>
                    <Col md="3" sm="12">
      								<Fade left delay={300}>
      									<Card body className="CardText">
      								    <CardImg top width="100%" src={SQL} alt="Card image cap" />
      							      <CardBody>
      							        <CardTitle tag="h3">SQL</CardTitle>
      							        <CardText>Datenbankentwurf und -Abfragen.</CardText>
      							      </CardBody>
      								  </Card>
      									</Fade>
      								</Col>
  							</Row>
          		</Container>
        		</Jumbotron>

				{/*	Hier wird der Cookie und deren Parameter bestimmt	*/}
				<CookieConsent
		    location="bottom"
        buttonText=<a href="/contact" >Weitere Informationen.</a>
		    cookieName="CookieConsent"
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
		    style={{ background: "#2B373B" }}
		    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
		    expires={150}>

		    Diese Webseite benutzt Cookies, um die Benutzererfahrung zu verbessern. Indem Sie diese Website nutzen, erklären Sie sich mit dieser Verwendung einverstanden.
				</CookieConsent>
			</div>
		);
	}
}
