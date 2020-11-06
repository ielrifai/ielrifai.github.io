import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="about-desc" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>QA Automation Analyst, Intern at J.D. Power | Autodata Solutions&emsp;<span> Aug 2020 - present</span></h2>
                        <p>I have recently joined the Autodata Solutions as a QA Automation Analyst Intern. My tasks in this role are:<br/><br/>
                        <ul>	
                          <li>Assigned to the COE (Center of Excellence) team to help spread best practices across the company’s services.</li>
                          <li>Develop a detailed technical understanding of client needs and project requirements.</li>
                          <li>Develop, execute, and integrate functional and non-functional level automated tests using Java and Cucumber to verify requirements such as system, unit, reliability, usability, and acceptance tests.</li>
                          <li>Contribute to the investigation and triage of software defects for assigned projects.</li>
                        </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer/Designer at Western University&emsp;<span>  May - Aug 2020</span></h2>
                        <p>I worked as a web developer/designer for the whole summer with the Dept. of Earth Sciences at Western University to take the lead in developing a website from scratch for the ‘GAC-MAC LONDON 2021’ event.<br/> <br/>
                        <ul>
                          <li>Designed and developed the front-end using a combination of both PHP and WordPress. While the back-end was developed using PHP along with MySQL as the database tool.</li>
                          <li>Deployed the website onto one of Western University’s servers using SSL certificates.</li>
                        </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
