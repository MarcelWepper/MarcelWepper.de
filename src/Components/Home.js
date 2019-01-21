import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import  Picture from'./Pics/code_background.jpg';
import  Profile from'./Pics/me.png';

export default class Home extends React.Component {
	render(){
		return(
			<div>
				{/* Hero-Image */}
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
					{/*  Grid-System */}
					<Container className= "grid background">
						<div className= "HeroText">
							<Row>
								<Col> <img src={Profile} alt="ProfilePicture"rounded responsive /></Col>
							</Row>
							<Row>
								<Col><h1> Marcel-René Wepper</h1></Col>
							</Row>
							<Row>
								<Col><h3> HTML/CSS | Mobile Design | CMS | Project-Management | DB-Design</h3></Col>
							</Row>
						</div>
					</Container>
			</LazyHero>
			</div>
		);
	}
}
