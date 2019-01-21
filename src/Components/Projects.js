import React from 'react'
import './Home.css'
import LazyHero from 'react-lazy-hero';
import  Picture from'./Pics/Weppes.jpg';

export default class Projects extends React.Component {
	render(){
		return(
  		<div>
				<LazyHero color = "#000000" parallaxOffset="100" minHeight='100vh' opacity ="0.5" imageSrc={Picture}>
					<div className= "HeroText"><h1> Under construction...</h1> </div>
				</LazyHero>
  		</div>
		);
	}
}
