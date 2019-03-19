import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";

import './Home.css';

export default class Footer extends React.Component {
	render(){
		return (
			<div className="Footer">
				<Container className= "grid">
					<Row>
						<Col> <NavLink to="mailto:marcelwepper@gmail.com" className="NavLink"> Mailen</NavLink></Col>
						<Col> <NavLink to="/contact" className="NavLink">Impressum</NavLink></Col>
						<Col> <NavLink to="/contact" className="NavLink">Datenschutzhinweis</NavLink></Col>
					</Row>
				</Container>
			</div>
	  );
	}
}
