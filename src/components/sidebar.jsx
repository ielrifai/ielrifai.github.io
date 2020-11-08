import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
       <Menu id="colorlib-aside" className="border js-fullheight">
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <img className="author-img" src="images/LinkedIn_pic.jpg"/>            
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="/home" data-nav-section="home">Home</a></li>
                  <li><a href="/about" data-nav-section="about">About</a></li>
                  <li><a href="/projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="/timeline" data-nav-section="timeline">Experience</a></li>
                </ul>
              </div>
            </nav>
        </Menu>
  );
};