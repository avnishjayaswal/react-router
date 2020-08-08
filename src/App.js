import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact'



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
