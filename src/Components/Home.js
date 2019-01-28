import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import CookieConsent from "react-cookie-consent";
import Fade from 'react-reveal/Fade';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import  Picture from'./Pics/code_background.jpg';
import  Code from'./Pics/code.jpg';
import  Profile from'./Pics/me.png';
import  SEO from'./Pics/SEO.jpg';
import  Project from'./Pics/Project.jpg';


export default class Home extends React.Component {
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
								<Col><h3> Web-Design | Online-Marketing | Projekt-Management </h3></Col>
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
					<h1> Kompetenz und Leistung in folgenden Bereichen: </h1>
				</div>

				{/* CARDS */}
					<Jumbotron fluid>
        		<Container fluid>
							<Row>
								<Col>
								<Fade left delay={300}>
									<Card body className="CardText">
								    <CardImg top width="100%" src={Code} alt="Card image cap" />
							      <CardBody>
							        <CardTitle tag="h3">Web-Design</CardTitle>
							        <CardText>Sie wollen eine moderne Webseite, welche für mobile Geräte optimiert und günstig im Unterhalt ist?</CardText>
											<CardText>Sprechen Sie mich an!</CardText>
							      </CardBody>
								  </Card>
									</Fade>
								</Col>
								<Col>
								<Fade left delay={200}>
									<Card body className="CardText">
								    <CardImg top width="100%" src={SEO} alt="Card image cap" />
							      <CardBody>
							        <CardTitle tag="h3">Online-Marketing</CardTitle>
							        <CardText>Sie haben eine tolle, neue Idee, die Webseite steht auch schon, bloß kommen keine Leute auf die Seite?</CardText>
											<CardText>Ich helfe Ihnen, die Online-Präsenz zu steigern!</CardText>
											<CardText></CardText>
							      </CardBody>
								  </Card>
									</Fade>
								</Col>
								<Col>
								<Fade left>
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
