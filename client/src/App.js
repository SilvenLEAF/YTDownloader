import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import ContactForm from './components/forms/ContactForm';
import About from './components/subpages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">        
        <div id="wrapper">
          <Navbar/>
          <Switch>
            <Route exact path = "/" component= { Home }/>
            <Route exact path = "/contact" component= { ContactForm }/>
            <Route exact path = "/about" component= { About }/>
          </Switch>


        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
