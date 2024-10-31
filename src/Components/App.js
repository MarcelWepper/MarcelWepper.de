import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './Home.css'
import { initializeGA, trackPageView } from "./analytics";

export default class App extends React.Component {
    componentDidMount() {
      // Initialize GA4
      initializeGA();

      // Track the initial page load
      trackPageView(window.location.pathname + window.location.search);
    }

    componentDidUpdate(prevProps) {
      // If using react-router's history or another routing method, track page changes
      // This example assumes class-based and might need to use withRouter or hooks
    }
    render(){
      return(
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    );
  }
}
