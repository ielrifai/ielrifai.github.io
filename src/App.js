import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">         	
				<div id="colorlib-main">
					<Home></Home>
					<About></About>
          <Projects></Projects>
					<Timeline></Timeline>
      	</div>
      </div>
    );
  }
}

export default App;
