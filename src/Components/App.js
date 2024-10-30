import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './Home.css'

ReactGA.initialize('UA-133010328-1');

export default class App extends React.Component {
    render(){
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
      return(
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    );
  }
}
