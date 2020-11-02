import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{background: "#0a192f"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h3>Hi, my name is<br /><h1>Issa El-Rifai</h1></h3>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1kxrAg21SABukbSbKE12_qKng7TcNE08W/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" style={{float: "right"}}></div>
                        <img aria-hidden="true" src="images/PXL_20201030_213356842.PORTRAIT-01.COVER.jpg" style={{float: "right", position: "absolute", top: "200px", right: "50px", width: "50%", height: "42%"}}/>
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
