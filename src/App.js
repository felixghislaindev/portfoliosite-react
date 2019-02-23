import React, { Component } from 'react';
// importing components
import Navbar from './components/navigation'
import Intro from './components/intro'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Footer from './components/footer'
//importing stylesheet
import './css/index.css'

class App extends Component {
  render() {
    return (
     <div className='mainPage'>
     <Navbar />
     <Intro/>
     <AboutMe />
     <Projects />
     <Projects />
     <Projects />
     <Footer />
     </div>
    );
  }
}

export default App;
