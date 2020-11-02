import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>A fourth-year Software Engineering undergraduate student at Western University with an interest in software design, web development, mobile app development, databases, and operating systems.</p>
                    <p>When I'm not coding my next project, I enjoy
                        <ul>
                            <li>Watching/Playing Soccer</li>
                            <li>Hanging out with family & friends</li>
                            <li>Playing video games </li>
                        </ul>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">What are my strengths?</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-world" />
                </span>
                <div className="desc">
                <span className="heading-meta">Full Stack Development </span>
                    <p>I have experience building websites using JavaScript, React, HTML, CSS, and Angular on the front-end. 
                        Also worked on the back-end and integrated web apps with a database.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                <span className="heading-meta">Data Structures & Algorithms</span>
                    <p>My enrollment in the software engineering degree has enabled me to strongly grasp the fundamental concepts of data structures and algorithms. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-android" />
                </span>
                <div className="desc">
                <span className="heading-meta">Android App Development</span>
                    <p>I have experience working with Android Studio to develop android applications. The languages that I'm skilled in are Java and Kotlin.
                        Currently cooking something up!!
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-settings" />
                </span>
                <div className="desc">
                <span className="heading-meta">Automation Testing</span>
                    <p>At Autodata Solutions, I have worked on creating, designing, and debugging automated scripts using Serenity BDD & Cucumber.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-puzzle" />
                </span>
                <div className="desc">
                <span className="heading-meta">Game Development</span>
                    <p>I have built a shoot'em up (SHUMP) game using C# as the language and Unity Gaming Engine as the platform.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                <span className="heading-meta">Machine Learning</span>
                    <p>Utilized machine learning concepts in python to develop a project at one of Canada's most prestigious hackathons, Hack Western.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
