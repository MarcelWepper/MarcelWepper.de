import React from 'react'
import Header from './Header'
import Main from './Main'

import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    render(){
      return(
    <div>
      <Header />
      <Main />
    </div>
    );
  }
}
