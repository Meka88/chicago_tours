//import React from 'react';
import './App.css';
import Title from './Title'; 
import PLACESList from './PLACESList';
import Footer from './Footer';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About';
import PLACESDetails from './PLACESDetails';

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
