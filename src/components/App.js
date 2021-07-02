//import React from 'react';
import './App.css';
import Title from './Title/Title'; 
import PLACESList from './PLACESList/PLACESList';
import Footer from './Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About/About';
import PLACESDetails from './PLACESDetails/PLACESDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={PLACESList}/>
      <Route path="/about" component={About}/>
      <Route path="/details/:id" component={PLACESDetails} />
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
