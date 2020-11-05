import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Timeline from './components/timeline'

const footerStyle = {
  backgroundColor: '#0a192f',
  fontSize: "20px",
  color: "white",
  position: "relative",
  height: "150px",
  width: "100%"
};


function Footer({ children }) {
  return (
    <div>
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">    
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />     	
				<div id="colorlib-main">
					<Home></Home>
					<About></About>
          <Projects></Projects>
					<Timeline></Timeline>
          <Footer><br/>
          <span className="footer-meta">Designed & Built by Issa El-Rifai</span>
          <div className="footer-div">
            <ul className="footer-icons">
                <li><a href="https://www.linkedin.com/in/ielrifai/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/ielrifai" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="mailto:ielrifai.uwo.ca" target="_blank" rel="noopener noreferrer"><i className="icon-mail" /></a></li>
                <li><a href="mailto:ielrifai.uwo.ca" target="_blank" rel="noopener noreferrer"><i className="icon-" /></a></li>
            </ul>
          </div>
          </Footer>
      	</div>

      </div>
    );
  }
}

export default App;
