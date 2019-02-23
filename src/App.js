import React, { Component } from 'react';
//importing stylesheet
import './css/index.css' 
// importing components
import Navbar from './components/navigation'
import Intro from './components/intro'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Footer from './components/footer'


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className='mainPage'>
      <Navbar />
      <Intro/>
      <AboutMe />
      <div className="pcards">
      <Projects />
      <Projects />
      <Projects />
     
      </div>
      
      <Footer />
      </div>
      </React.Fragment>
    
    );
  }
}

export default App;
