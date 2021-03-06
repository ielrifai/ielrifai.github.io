import React, { Component } from 'react';
import CV from '../components/CV 2020.pdf'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/home_background.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="about-desc">
                          <h3>Hi, my name is</h3><br /><h1>Issa El-Rifai</h1>
                          <p className="view-cv"><a className="btn btn-primary btn-learn" href= {CV} target="_blank" rel="noopener noreferrer">View CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
