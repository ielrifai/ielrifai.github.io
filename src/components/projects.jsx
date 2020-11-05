import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="about-desc" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/AI-cover.png)'}}>
									<div className="assistant">
										<div className="con">
											<h3><a>Virtual Assistant</a></h3>
											<span>Participated in Hack Western 6 and developed a virtual speech assistant.<br />
											• Using the various libraries offered by python, my team and I were able to successfully develop a virtual assistant that was able to perform a variety of tasks such as performing mathematical calculations, searching the web, and opening local desktop applications.
											</span><br />
											<p className="icon">
												<span><a><i className="icon-code" /> Python</a></span>
												<span><a href="https://github.com/ielrifai/Hack-Western-6" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInDown">
								<div className="project" style={{backgroundImage: 'url(images/chatroom.png)'}}>
									<div className="chatroom">
										<div className="con">
											<h3><a>Multi-transaction Chatroom</a></h3>
											<span>A program that allows multiple clients to chat together on seperate physical devices.<br />
											• This project implements concepts of multithreading and semaphores. First a main server is set up to run on a device. Clients on seperate physical devices run a python program which provides them with the front-end interface for the chatroom. The clients enter their names and desired chatroom number to enter; and then connect to the server. Only clients in the same chatroom number will be able to communicate with each other and thus maintaining the confidentiality of messages.									
											</span><br />
											<p className="icon">
												<span><a><i className="icon-code" /> Python & C++</a></span>
												<span><a href="https://github.com/ielrifai/Simple-Chat-program" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/CurbIt.png)'}}>
									<div className="CurbIt">
										<div className="con">
											<h3><a>CurbIt</a></h3>
											<span>CurbIt is a habit tracking android application which provides a framework forusers to catalogue, curtail and even curb all types of negative habits.  <br />
											• CurbIt was built for individuals who have negative habits that they would like to improve.
											The application is centered around the four-step process from the best-selling
											book “You Are Not Your Brain”, written by two leading experts in neurology.
											The four-step process is an iterative process which enables individuals to work
											to minimize negative habits. CurbIt intuitively implements the four-step process
											and provides various tools to motivate and retain users as they continue to
											improve upon their bad habits.									
											</span><br />
											<p className="icon">
												<span><a><i className="icon-code" /> Java</a></span>
												<span><a href="https://www.youtube.com/watch?v=lfeYbepZH_g&feature=youtu.be&fbclid=IwAR15Fd4oXRbgVfWp14VHOB-UNlMLX14CT28BkjRHEsJfd5VlrJuQuSO-CPM" target="_blank" rel="noopener noreferrer"><i className="icon-video" /> Demo</a></span>
												<span><a href="https://github.com/ielrifai/CurbIt-Android-Application" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/SHMUP.jpg)'}}>
									<div className="SHMUP">
										<div className="con">
											<h3><a>SHMUP</a></h3>
											<span>A multi-level shoot’em up style space shooter game.<br />
											• Worked with a team of 4 on building this game. The player has a variety of weapons to use during the game, including a bomb that would clear the screen from all enemies. The enemy objects come in different shapes and move in different patterns across the screen. When destroyed, enemies would drop power-ups that the player could pick up.									
											</span><br />
											<p className="icon">
												<span><a><i className="icon-code" /> C#</a></span>
												<span><a href="https://github.com/ielrifai/SHMUP-phase1/tree/master" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
								<div className="project" style={{backgroundImage: 'url(images/portfolio_website.v2.png)'}}>
									<div className="website2">
										<div className="con">
											<h3><a>Portfolio Website 2.0</a></h3>
											<span>The second iteration of my portfolio website.<br />
											• I built this website from scratch as an upgrade from my first iteration of my portfolio. 
											Learned bootstrap to implement this project for the first time.									
											</span><br />
											<p className="icon">
												<span><a><i className="icon-code" /> HTML, CSS, bootstrap, & react</a></span>
												<span><a href="https://github.com/ielrifai/Portfolio-Website.v2" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Source</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/portfolio_website.v1.png)'}}>
									<div className="website1">
										<div className="con">
											<h3><a>Portfolio Website 1.0</a></h3>
											<span>The first iteration of my portfolio website.<br />
											• I built this website using github's markdown language. Very simple iteration.									
											</span><br />
											<p className="icon">
												<span><a><i className="icon-code" /> Github's markdown language</a></span>
												<span><a href="https://github.com/ielrifai/Portfolio_Website1.0" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Source</a></span>
											</p>
										</div>
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
