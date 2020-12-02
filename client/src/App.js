import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



import Home from './components/home/Home';
import ContactForm from './components/forms/ContactForm';







function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="myWrapper">

          <Navbar/>
          <Switch>
            <Route exact path = "/" component= { Home }/>
            <Route path = "/contact" component= { ContactForm }/>
          </Switch>









        </div>


        <div id="myFooter">
          <Footer/>
        </div>




      </div>
    </BrowserRouter>
  );
}

export default App;
