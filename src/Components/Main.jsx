import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import "./Main.css";
import Dialog from '@mui/material/Dialog';

import Portrait from "./Michael_Kim.png";
import AboutMe from "./AboutMe.png";
import Battery from "./Battery.png";
import Proteins1 from "./Proteins1.png";
import Proteins2 from "./Proteins2.png";
import Proteins3 from "./Proteins3.png";
import Proteins4 from "./Proteins4.png";
import Proteins5 from "./Proteins5.png";
import Science1 from "./Science1.png";
import TeamfightTactics from "./TeamfightTactics.jpeg";
import Wine from "./Wine.png";

import BatteryTool from './BatteryTool.png';
import LabelFreeQuant from './LabelFreeQuant.png';
import I2MSComparison from './I2MSComparison.png';
import TFToolbox from './TFToolbox.png';

import ProteomicsWork from "./Proteomics.jpg";
import BatteryWork from "./BatteryWork.png";
import InboundWork from "./Inbound.png";
import BastiatWork from "./BastiatPartners.jpg";
import NorthwesternWork from "./NorthwesternWork.jpg";

import GitHubIcon from "./GitHub.png";
import LinkedInIcon from "./LinkedInLogo.png";
import EmailIcon from '@mui/icons-material/Email';

import HomeLogo from "./Logo.png";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImgNoMargin = styled("img")({
	maxWidth: "100%",
	maxHeight: "100%",
});

// var TxtRotate = function(el, toRotate, period) {
// 	this.toRotate = toRotate;
// 	this.el = el;
// 	this.loopNum = 0;
// 	this.period = parseInt(period, 10) || 4000;
// 	this.txt = '';
// 	this.tick();
// 	this.isDeleting = false;
//   };
  
//   TxtRotate.prototype.tick = function() {
// 	var i = this.loopNum % this.toRotate.length;
// 	var fullTxt = this.toRotate[i];
  
// 	if (this.isDeleting) {
// 	  this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 	  this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}
  
// 	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
// 	var that = this;
// 	var delta = 150; // Fixed delta value
  
// 	if (this.isDeleting) {
// 	  delta /= 2;
// 	}
  
// 	if (!this.isDeleting && this.txt === fullTxt) {
// 	  delta = this.period;
// 	  this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 	  this.isDeleting = false;
// 	  this.loopNum++;
// 	  delta = 1000;
// 	}
  
// 	setTimeout(function() {
// 	  that.tick();
// 	}, delta);
//   };
  
//   window.onload = function() {
// 	var elements = document.getElementsByClassName('txt-rotate');
// 	for (var i = 0; i < elements.length; i++) {
// 	  var toRotate = elements[i].getAttribute('data-rotate');
// 	  var period = elements[i].getAttribute('data-period');
// 	  if (toRotate) {
// 		new TxtRotate(elements[i], JSON.parse(toRotate), period);
// 	  }
// 	}
// 	// INJECT CSS
// 	var css = document.createElement("style");
// 	css.type = "text/css";
// 	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #1b4332 }";
// 	document.body.appendChild(css);
//   };

const Main = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [open, setOpen] = React.useState([false, false, false, false, false, false, false, false, false]);

	const handleClickOpen = (index) => {
		const updatedOpen = [false, false, false, false, false, false, false, false, false];
		updatedOpen[index] = true;
		setOpen(updatedOpen);
	};
	  
	const handleClose = () => {
		setOpen([false, false, false, false, false, false, false, false, false]);
	};

	useEffect(() => {
		const handleResize = () => {
		setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
		window.removeEventListener('resize', handleResize);
		};
	}, []);

    return (
		<div className="view">
			<div 
				style={{
					backgroundColor: "#f0fff1",
					minWidth: "calc(100vw - 40px)",
					minHeight: "calc(100vh - 40px)",
					position: "relative",
					overflow: "hidden"
				}}
			>
				<div
					style={{
						zIndex: 2,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "calc(100vw - 160px)",
						backgroundColor: "#f0fff1",
						padding: "15px 60px 15px",
						position: "fixed"
					}}
				>
					<a href="/">
						<img src={HomeLogo} width={"60px"} alt='Logo' />
					</a>
					<div
						style={{
							display: "flex",
							alignItems: "center"
						}}
					>	
						<a href="https://github.com/mkim45" target="_blank" rel="noopener noreferrer" underline="none">
							<ImgNoMargin
								alt="githubtop"
								src={GitHubIcon}
								sx={{ height: "40px", width: "40px", paddingRight: "20px" }}
							/>
						</a>
						<a href="https://www.linkedin.com/in/michael-kim-nu/" target="_blank" rel="noopener noreferrer" underline="none">
							<ImgNoMargin
								alt="linkedintop"
								src={LinkedInIcon}
								sx={{ height: "40px", width: "40px" }}
							/>
						</a>
					</div>
				</div>
				<div 
					style={{ 
						marginLeft: "40px",
						marginRight: "40px"
					}}
				>
					<div
						style={{
							minHeight: "100%",
							paddingTop: windowWidth >= 1075 ? "69px" : "89px",
							display: "flex",
							alignItems: "center",
							overflow: "hidden",
							justifyContent: "space-between",
							maxWidth: "1200px",
							margin: "0px auto",
							flexDirection: windowWidth < 1075 ? "column" : "row"
						}}
					>
						{windowWidth < 1075 ? (
							<div
								style={{
									display: "flex", justifyContent: "center", marginTop: "20px"
								}}
							>
								<ImgNoMargin
									alt="portrait"
									src={Portrait}
									sx={{ height: "350px", width: "233.33px" }}
								/>
							</div>
						) : null}
						<div
							style={{
								marginTop: windowWidth < 1075 ? "30px" : "0px"
							}}
						>
							<div
								style={{
									minHeight: "25vh",
									maxWidth: "100%",
									display: "flex",
									textAlign: windowWidth < 1075 ? "center" : "start",
									justifyContent: "center",
									flexDirection: "column"
								}}
							>
								<h1
									style={{
										fontSize: windowWidth < 500 ? "54px" : "72px",
										fontFamily: "Bitter, serif",
										fontWeight: "normal",
										color: "#1b4332",
										margin: "0px"
									}}
								>
									Hi, my<br></br>name is <b>Michael</b><span style={{ color: "#52b788" }}>.</span>
								</h1>
								<p
									style={{
										fontSize: windowWidth < 500 ? "20px" : "24px",
										maxWidth: "525px",
										marginTop: "30px",
										lineHeight: 1.65,
										color: "#1b4332"
									}}
								>
									I'm a <b>software engineer</b> and <b>data scientist</b> focused on enhancing industry experiences, from <b>biotechnology</b> to <b>enterprise startups</b>.
									{/* through&nbsp; */}
									{/* <span class="txt-rotate"
										style={{
											fontWeight: "bold",
											color: "#1b4332"
										}} 
										data-period="1500"
										data-rotate='["multiomics.&nbsp;", "machine learning.&nbsp;", "startups.&nbsp;", "software development.&nbsp;", "bioinformatics.&nbsp;"]'>
									</span> */}
								</p>
							</div>
						</div>
						{windowWidth >= 1075 ? (
							<div
								style={{
									marginTop: "40px",
								}}
							>
								<ImgNoMargin
									alt="portrait"
									src={Portrait}
									sx={{ height: "525px", width: "350px" }}
								/>
							</div>
						) : null}
					</div>
					{windowWidth >= 1075 ? (
						<div
							style={{
								margin: "100px auto 0px",
								flexDirection: "row",
								justifyContent: "space-between",
								display: "flex",
								maxWidth: "1200px"
							}}
						>
							<div
								style={{
									width: "60%"
								}}
							>
								<div
									style={{
										position: "relative",
										marginBottom: "36.5px"
									}}
								>
									<h2
										style={{
											fontSize: "64px",
											fontFamily: "Bitter, serif",
											fontWeight: "bold",
											color: "#1b4332",
											margin: "0px"
										}}
									>
										About me<span style={{ color: "#52b788" }}>.</span>
									</h2>
									<div
										style={{
											width: "80px",
											height: "3.5px",
											backgroundColor: "#52b788",
											marginTop: "10px"
										}}
									></div>
								</div>
								<div
									style={{
										margin: "0px auto",
										position: "relative"
									}}
								>
									<p
										style={{
											fontSize: "17px",
											marginTop: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
											marginBottom: "25px"
										}}
									>
										I’m a <b>third-year undergraduate student</b> at Northwestern University, pursuing a B.A. in Biology and Data Science 
										and an M.S. in Computer Science through a B.A./M.S. program (graduating Spring 2025).<br/><br/>
										While initially exploring investment banking and venture capital internships, I found myself far more passionate 
										about the transformative work of the startups I was actually advising and sourcing. Since then, I’ve been fortunate to build 
										software for a <b>multiomics research lab</b>, a <b>venture capital firm</b>, and an <b>HR software startup</b>. I'm eager to continue 
										imparting meaningful impact, particularly at innovative and disruptive startups.<br/><br/>
										Currently, I’m leading a project at the <b>Proteomics Center of Excellence</b> to create an OS-agnostic mass spectrometry insights platform. 
										On the side, I’ve been creating a multiomics quality control tool with <b>autoencoder neural network and tree-based models</b>.<br/><br/>
										While I’m not coding, I enjoy playing tennis, learning new languages, spending time outdoors with friends, playing Teamfight Tactics, and reading books on human behavior. 
									</p>
								</div>
							</div>
							<div
								style={{
									marginTop: "114px"
								}}
							>
								<ImgNoMargin
									alt="aboutMe"
									src={AboutMe}
									sx={{ height: "425px", width: "365px" }}
								/>
							</div>
						</div>
					) : (
						<div
							style={{
								margin: "100px auto 0px",
								flexDirection: "row",
								justifyContent: "space-between",
								display: "flex",
								maxWidth: "1200px"
							}}
						>
							<div
								style={{
									width: "100%"
								}}
							>
								<div
									style={{
										position: "relative",
										marginBottom: "36.5px"
									}}
								>
									<h2
										style={{
											fontSize: "64px",
											fontFamily: "Bitter, serif",
											fontWeight: "bold",
											color: "#1b4332",
											margin: "0px"
										}}
									>
										About me<span style={{ color: "#52b788" }}>.</span>
									</h2>
									<div
										style={{
											width: "80px",
											height: "3.5px",
											backgroundColor: "#52b788",
											marginTop: "10px"
										}}
									></div>
								</div>
								<div
									style={{
										margin: "0px auto",
										position: "relative"
									}}
								>
									<p
										style={{
											fontSize: "17px",
											marginTop: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
											marginBottom: "25px"
										}}
									>
										I’m a <b>third-year undergraduate student</b> at Northwestern University, pursuing a B.A. in Biology and Data Science 
										and an M.S. in Computer Science through a B.A./M.S. program (graduating Spring 2025).<br/><br/>
										While initially exploring investment banking and venture capital internships, I found myself far more passionate 
										about the transformative work of the startups I was actually advising and sourcing. Since then, I’ve been fortunate to build 
										software for a <b>multiomics research lab</b>, a <b>venture capital firm</b>, and a <b>startup</b>. I'm eager to continue 
										imparting meaningful impact, particularly at innovative and disruptive startups.<br/><br/>
										Currently, I’m leading a project at the <b>Proteomics Center of Excellence</b> to reverse engineer and improve Thermo Fisher Scientific’s mass 
										spectrometry software. On the side, I’ve been creating a multiomics quality control tool with <b>autoencoder neural network models</b>.<br/><br/>
										While I’m not coding, I enjoy playing tennis, learning new languages, spending time outdoors with friends, and reading books on human behavior. 
									</p>
								</div>
							</div>
						</div>
					)}
					{windowWidth >= 890 ? (
						<div
							style={{
								margin: "100px auto 0px",
								maxWidth: "1200px"
							}}
						>
							<div
								style={{
									width: "100%"
								}}
							>
								<div
									style={{
										position: "relative",
										marginBottom: "36.5px"
									}}
								>
									<h2
										style={{
											fontSize: "64px",
											fontFamily: "Bitter, serif",
											fontWeight: "bold",
											color: "#1b4332",
											margin: "0px"
										}}
									>
										About my work<span style={{ color: "#52b788" }}>.</span>
									</h2>
									<div
										style={{
											width: "80px",
											height: "3.5px",
											backgroundColor: "#52b788",
											marginTop: "10px"
										}}
									></div>
								</div>
								<div
									style={{
										margin: "0px auto",
										position: "relative"
									}}
								>
									<p
										style={{
											fontSize: "17px",
											marginTop: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
										}}
									>
										Whether it's through independent or collaborative projects, I enjoy applying new technologies to get impactful results.
										Over the last four years, I've worked on projects for data analysis, software development, and machine learning across multiple industries
										and disciplines. Click on any project below to learn more!
									</p>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[0]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Mass Spectrometry Insights Platform
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Oct. 2023 - Present<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> C#, WebAssembly (Blazor), JavaScript
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I am currently developing a <b>mass spectrometry data quality 
										insights tool</b> that will be open-source and publicly available for research use. Currently, scans containing data for ensemble mass spectrometry are accessible 
										through Thermo Fisher Scientific .RAW files that can only be opened using a Windows desktop application. Additionally, existing tools lack some of the data quality 
										assessment tables or graphs desired for top-down proteomics use cases. <br/><br/>

										To solve for these missing features and limitations, I have been building an <b>OS-agnostic web application</b> that will accept user uploaded .RAW files and 
										output tabular and graphical visualizations of scan information. Custom-built APIs in C# from hex analysis of .RAW files will be used, in addition 
										to a Blazor wrapper of SciChart JavaScript. A Model-View-ViewModel architecture is being implemented and testing is done across 60+ file versions for future distribution to 
										hundreds of labs.<br/><br/>

										A first version of the application will be published in the coming weeks for bottom-up and top-down proteomics use. Click on the links here for more information on the work at the{' '}
										<a href="https://proteomics.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											Proteomics Center of Excellence
										</a>{' '}
										and{' '}
										<a href="https://www.kelleher.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											Kelleher Research Group
										</a>{' '}
										at Northwestern University.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "40px",
									backgroundImage: `url(${Proteins2})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								onClick={() => handleClickOpen(0)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Mass Spectrometry Insights Platform
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A WebAssembly (Blazor) and C# mass spectrometry data insights platform for top-down and bottom-up proteomics use. 
											Created using custom-built APIs and hex analysis of .RAW files for tabular and graphical displays. Publishing of 
											the project is expected in coming weeks.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[1]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Teamfight Tactics Game Simulator
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jan. 2024 - Present<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> JavaScript (React), Python, CSS, HTML
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										Currently, I'm building <b>TFToolbox</b>, a collection of player improvement and practice tools for Teamfight Tactics (an auto chess game by Riot Games). 
										The first tool that's being created is a "puzzles" web application that offers users the ability to train in-game techniques, including unit positioning. The 
										JavaScript application uses Python scraped game data to do one-to-one simulations of actual game scenarios that allows players to improve in situational 
										decision-making.<br/><br/>

										The platform is currently an MVP. Future updates to add more accurate and scalable gameplay, user authentication, and leaderboards through APIs and Node.js will be 
										implemented. For now, the current version can be found on the{' '}
										<a href="https://tftoolbox.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											website here
										</a>{' '}
										and the code at this {' '}
										<a href="https://github.com/tftoolbox/tftoolbox.github.io" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
									<img
										src={TFToolbox}
										alt="Tftoolbox"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${TeamfightTactics})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								onClick={() => handleClickOpen(1)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Teamfight Tactics Game Simulator
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A JavaScript simulator for Teamfight Tactics meant to allow players to solve situational puzzles to improve in-game skills. Recreated game 
											mechanics to emulate gameplay as close as possible. This project is currently in progress of being built.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[2]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Top-Down Proteomics Quality Control
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Sep. 2023 - Dec. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python (Pandas, NumPy, SciPy, PyTorch, Scikit-learn, Matplotlib), C#
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of project coursework for COMP_SCI 349-0 Machine Learning and the Kelleher Research Group, I worked with a team to create <b>predictive machine learning models </b>
										for binary classification of mass spectrometry scans by quality. Typically, top-down mass spectra face several challenges related to quality control, due to 
										fragmentation complexity, spectral noise and interference, and technical variability. To this end, unbiased quality control methods are important to automate filtering out 
										of low-quality scans when features are not known a priori.<br/><br/>

										Our team cleaned and scaled data, did EDA, and created new variables to train logistic regression, KNN, random forest, LightGBM, ensemble models, and autoencoders. The 
										model hyperparameters were tuned for performance on validation data and various dimensionality reduction techniques were also tested. A test accuracy and F1 score of <b>~82%</b> was 
										achieved, which would <b>speed up lab deconvolution techniques by ~100%.</b><br/><br/>  

										Some of the results of this analysis and the models can be found in this{' '}
										<a href="https://github.com/mkim45/TopDownMassSpecClassification" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins4})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								onClick={() => handleClickOpen(2)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Top-Down Proteomics Quality Control
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A machine learning tool for filtering out poor quality mass spectrometry scans to improve performance and 
											computing speeds of top-down proteoform discovery methods. Built using tuned autoencoder neural networks, 
											tree-based models, and supervised learning algorithms.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[3]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Battery Ventures Internal Bidding Tool
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Aug. 2023 - Dec. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> JavaScript (React), CSS, HTML, Google Cloud
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										After completing the analyst sourcing and diligence externships with Battery Ventures, I created a MVP for an internal tool that would connect extern sourced companies to 
										partners and other investors at the firm. Externs source hundreds of startups across a variety of stages, industries, and locations, which are then passed along to investors 
										that will set up introductory calls with the companies they find interesting. However, at the time of my completion of the externship, there was no system put in place to connect 
										investors to all sourced companies (to facilitate finding of startups they wanted to reach out to).<br/><br/>

										To solve this, I created a JavaScript web application to take files from users and store company data. Then, using APIs, a dashboard of companies are shown to investors to be bid on in 
										a silent auction process. At a timed deadline, the investor who bids the most will win "ownership" of that company and future relationships with them. An email will be sent out with results 
										of the bidding process each week.
										{/* <br/><br/> */}

										{/* The MVP can be found at this{' '}
										<a href="https://github.com/mkim45/TopDownMassSpecClassification" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>{' '}
										. */}
									</p>
									<img
										src={BatteryTool}
										alt="BatteryTool"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Battery})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								onClick={() => handleClickOpen(3)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Battery Ventures Internal Bidding Tool
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A JavaScript internal software tool created for investment professionals to browse sourced companies by externs and bid in a silent auction system 
											for ownership of future calls and transactions with target companies.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[4]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Fragment Ion Comparison Analysis
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jul. 2023 - Aug. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> C#
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to analyze the difference in masses 
										amongst matched fragment ions for ensemble and individualized ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
										greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis is needed to see whether the missed fragment ions 
										left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

										To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
										ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
										in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
										where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
										and present in both spectra for I2MS and ensemble.<br/><br/>

										C# was utilized for the mapping and analysis of spectra across the entire project. More information about the Kelleher Research Group can be found at this{' '}
										<a href="https://www.kelleher.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											link here
										</a>
										.
									</p>
									<img
										src={I2MSComparison}
										alt="I2MSComparison"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins1})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								onClick={() => handleClickOpen(4)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Fragment Ion Comparison Analysis
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A comparison of matched fragment ion masses for ensemble and individualized ion mass spectrometry (I2MS) methods for future optimization of 
											ASC and AIM-based proteoform discovery on multiple spectral outputs.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[5]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Top-Down Label-Free Quantification
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jun. 2023 - Aug. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python, R, SAS
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I assisted in conducting data analysis through a top-down label-free 
										quantification for identification of statistically significant intensities of metabolites as part of an external ALS study. Analysis was done utilizing custom SAS, R, and 
										Python scripts to get final deliverable results to external collaborators.<br/><br/>

										Initially, comparisons were made between the different custom scripts created in SAS, R, and Python to ensure the same results across all three programming langauges. This ensured 
										that the final deliverable analysis to external collaborators could be verifiably sound, regardless of which of the three was chosen to run the analysis in. Afterwards, heirarchical linear 
										model-based ANOVA was used to find metabolites with statistically significant differences across multiple treatment factors and time conditions. Boxplots were created to see the quality of the 
										data based on the variation from all sources, in addition to subsequent batch correction steps and a random effect for block. Further analysis was also done to determine whether acceptable 
										levels of missing values were present.<br/><br/>

										P-values, z-scores, and fold changes were obtained for the creation of volcano plots that gave pairwise comparisons between treatments. Also, q-values were obtained using the 
										Benjamini Hochberg procedure, yielding corrected p-values for marking boundaries of false-discovery rates (FDR) against fold changes. After this, heatmaps were created to display the differences 
										in all treatments in an easily-interpretable visual. Subsets of metabolites of interest were also highlighted in separate heatmaps.<br/><br/>

										More information about the Kelleher Research Group can be found at this{' '}
										<a href="https://www.kelleher.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											link here
										</a>
										.
									</p>
									<img
										src={LabelFreeQuant}
										alt="LabelFreeQuant"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins5})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								onClick={() => handleClickOpen(5)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Top-Down Label-Free Quantification
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											Conducted statistical analyses with custom Python, R, and SAS scripts for external ALS study collaborators. Used hierarchical linear model-based ANOVA 
											to identify differential expression in proteomics and metabolomics.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[6]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												ICR Health Condition Prediction
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jun. 2023 - Aug. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python (Pandas, NumPy, Matplotlib, Optuna, Scikit-learn, Seaborn, Statsmodels)
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										Using data from a Kaggle competition and InVitro Cell Research (ICR), I built predictive machine learning models to determine the probability that a patient had one of three age-related medical 
										conditions based on various health characteristics data. Given the current literature connecting age with a number of complications (from heart disease to dementia), bioinformatics and data science 
										can be utilized to intervene earlier if models are able to accurately detect where medical conditions may arise.<br/><br/>

										I used Python and various libraries to initially do exploratory data analysis on 50+ masked health conditions and the binary response variable (presence of age-related health condition or not in patient). 
										Afterwards, I imputed missing values after substantial testing of performance on base models after different imputation methods. I tested the performance of XGBoost, Random Forest, Decision Tree Classifiers, 
										TabPFN, CatBoost, LightGBM, AdaBoost, and Gradient Boosting Classifiers individually and ensembled using both stacking and voting. Optuna trials and cross-validated metrics were used to find ideal hyperparameter 
										values, in addition to different regularization parameters to adjust for overfitting and visualizations of model shortcomings in predicting probabilities of response above or below certain thresholds.<br/><br/>

										The models can be found at this{' '}
										<a href="https://github.com/mkim45/ICR-Age" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins3})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center"
								}}
								onClick={() => handleClickOpen(6)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											ICR Health Condition Prediction
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A compilation of predictive machine learning models to determine whether patients had one of three age-related medical conditions based on 
											various masked health characteristics. Used tree-based models, neural networks, and ensemble models to optimize performance.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[7]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Northwestern Science Olympiad Website
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Nov. 2023 - Present<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> JavaScript (React), CSS, HTML
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As the technology director for the Northwestern University Science Olympiad organization, I am currently creating a website to display relevant details about the club, our past competitions,
										and information for teams related to our upcoming invitational in February 2024. The Northwestern University Science Olympiad organization plans a Division C Science Olympiad Invitational for 
										30+ high school teams (approximately 450+ students) each February on the Evanston campus. The organization's executive board is responsible for planning and preparing the logistics of the 
										tournament day and lead up to the competition.<br/><br/>

										The website was created using a combination of JavaScript, CSS, and HTML. It is an updated version of the previous year's website that was built primarily using WordPress and other CSS and HTML 
										elements, which lacked capabilities for user-friendly navigation to various pages housing necessary information and had design constraints. Sections of the website were created to display information 
										about the organization itself, the upcoming competition for this year including sign-up and logistics, and past competition tests and answer keys as a resource for competing high school students. The 
										website will continue to be updated throughout the year leading up to the invitational in February to include new announcements about tournament day logistics.<br/><br/>

										The website is currently being built and will be finished in September ahead of the beginning of sign-up for the 2024 invitational.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Science1})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
								}}
								onClick={() => handleClickOpen(7)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Northwestern Science Olympiad Website
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A website created for the Northwestern University Science Olympiad group that includes important tournament information, announcements, 
											organization information, and past exams and answer keys.
										</p>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[8]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Wine Quality Prediction Models
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Apr. 2023 - Jun. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python (Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn)
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the final coursework for STAT 303-3 Data Science in Python course, I completed a project to predict the quality of Vinho Verde red and white wines 
										using various models as part of a four-person team. Wine quality was measured as a discrete response variable on a scale of 0-10, with 11 predictor variables based on physicochemical 
										properties of wines being used from samples to train our models. We attempted to minimize MAE to attempt to predict quality within the margin of rounding up or down to the nearest integer value.<br/><br/>

										To begin with, stratified splitting of data was done with respect to wine quality to obtain training and testing data at similar distributions to the overall dataset for response variables. MARS, Bagged 
										Decision Trees, Random Forest, and XGBoost models were used to test individual model performance in reducing MAE beyond naive methods. Fine tuning of hyperparameters was done for all four of these models 
										to minimize cross-validated MAE. Afterwards, the four individual models were ensembled using various methods, including voting ensemble and stacking ensemble with different metamodels. Further attempts at creating 
										ensembles of ensembled models with different metamodels was conducted. However, the best model ended up being the fine-tuned voting ensemble, with a test MAE of 0.35 being within the desired range to predict 
										wine quality within the margin of rounding.<br/><br/>

										The models and project report can be found at this{' '}
										<a href="https://github.com/mkim45/Wine-Prediction" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Wine})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center"
								}}
								onClick={() => handleClickOpen(8)}
							>
								
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Wine Quality Prediction Models
										</h2>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginBottom: "0px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A project to predict the quality of Vinho Verde wines using regression analysis, tree-based models, and ensemble models. 
											Fine-tuned hyperparameters to achieve optimal performance and deliver conclusions.
										</p>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div
							style={{
								margin: "100px auto 0px",
								maxWidth: "1200px"
							}}
						>
							<div
								style={{
									width: "100%"
								}}
							>
								<div
									style={{
										position: "relative",
										marginBottom: "36.5px"
									}}
								>
									<h2
										style={{
											fontSize: "64px",
											fontFamily: "Bitter, serif",
											fontWeight: "bold",
											color: "#1b4332",
											margin: "0px"
										}}
									>
										About my work<span style={{ color: "#52b788" }}>.</span>
									</h2>
									<div
										style={{
											width: "80px",
											height: "3.5px",
											backgroundColor: "#52b788",
											marginTop: "10px"
										}}
									></div>
								</div>
								<div
									style={{
										margin: "0px auto",
										position: "relative"
									}}
								>
									<p
										style={{
											fontSize: "17px",
											marginTop: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
										}}
									>
										Whether it's through independent or collaborative projects, I enjoy applying new technologies to get impactful results.
										Over the last four years, I've worked on projects for data analysis, software development, and machine learning across multiple industries
										and disciplines. Click on any project below to learn more!
									</p>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[0]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Mass Spectrometry Insights Platform
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Oct. 2023 - Present<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> C#, WebAssembly (Blazor), JavaScript
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I am currently developing a <b>mass spectrometry data quality 
										insights tool</b> that will be open-source and publicly available for research use. Currently, scans containing data for ensemble mass spectrometry are accessible 
										through Thermo Fisher Scientific .RAW files that can only be opened using a Windows desktop application. Additionally, existing tools lack some of the data quality 
										assessment tables or graphs desired for top-down proteomics use cases. <br/><br/>

										To solve for these missing features and limitations, I have been building an <b>OS-agnostic web application</b> that will accept user uploaded .RAW files and 
										output tabular and graphical visualizations of scan information. Custom-built APIs in C# from hex analysis of .RAW files will be used, in addition 
										to a Blazor wrapper of SciChart JavaScript. A Model-View-ViewModel architecture is being implemented and testing is done across 60+ file versions for future distribution to 
										hundreds of labs.<br/><br/>

										A first version of the application will be published in the coming weeks for bottom-up and top-down proteomics use. Click on the links here for more information on the work at the{' '}
										<a href="https://proteomics.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											Proteomics Center of Excellence
										</a>{' '}
										and{' '}
										<a href="https://www.kelleher.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											Kelleher Research Group
										</a>{' '}
										at Northwestern University.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "40px",
									backgroundImage: `url(${Proteins2})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(0)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Mass Spectrometry Insights Platform
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[1]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Teamfight Tactics Game Simulator
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jan. 2024 - Present<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> JavaScript (React), Python, CSS, HTML
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										Currently, I'm building <b>TFToolbox</b>, a collection of player improvement and practice tools for Teamfight Tactics (an auto chess game by Riot Games). 
										The first tool that's being created is a "puzzles" web application that offers users the ability to train in-game techniques, including unit positioning. The 
										JavaScript application uses Python scraped game data to do one-to-one simulations of actual game scenarios that allows players to improve in situational 
										decision-making.<br/><br/>

										The platform is currently an MVP. Future updates to add more accurate and scalable gameplay, user authentication, and leaderboards through APIs and Node.js will be 
										implemented. For now, the current version can be found on the{' '}
										<a href="https://tftoolbox.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											website here
										</a>{' '}
										and the code at this {' '}
										<a href="https://github.com/tftoolbox/tftoolbox.github.io" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
									<img
										src={TFToolbox}
										alt="Tftoolbox"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${TeamfightTactics})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(1)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Teamfight Tactics Game Simulator
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[2]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Top-Down Proteomics Quality Control
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Sep. 2023 - Dec. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python (Pandas, NumPy, SciPy, PyTorch, Scikit-learn, Matplotlib), C#
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of project coursework for COMP_SCI 349-0 Machine Learning and the Kelleher Research Group, I worked with a team to create <b>predictive machine learning models </b>
										for binary classification of mass spectrometry scans by quality. Typically, top-down mass spectra face several challenges related to quality control, due to 
										fragmentation complexity, spectral noise and interference, and technical variability. To this end, unbiased quality control methods are important to automate filtering out 
										of low-quality scans when features are not known a priori.<br/><br/>

										Our team cleaned and scaled data, did EDA, and created new variables to train logistic regression, KNN, random forest, LightGBM, ensemble models, and autoencoders. The 
										model hyperparameters were tuned for performance on validation data and various dimensionality reduction techniques were also tested. A test accuracy and F1 score of <b>~82%</b> was 
										achieved, which would <b>speed up lab deconvolution techniques by ~100%.</b><br/><br/>  

										Some of the results of this analysis and the models can be found in this{' '}
										<a href="https://github.com/mkim45/TopDownMassSpecClassification" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins4})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(2)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Top-Down Proteomics Quality Control
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[3]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Battery Ventures Internal Bidding Tool
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Aug. 2023 - Dec. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> JavaScript (React), CSS, HTML, Google Cloud
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										After completing the analyst sourcing and diligence externships with Battery Ventures, I created a MVP for an internal tool that would connect extern sourced companies to 
										partners and other investors at the firm. Externs source hundreds of startups across a variety of stages, industries, and locations, which are then passed along to investors 
										that will set up introductory calls with the companies they find interesting. However, at the time of my completion of the externship, there was no system put in place to connect 
										investors to all sourced companies (to facilitate finding of startups they wanted to reach out to).<br/><br/>

										To solve this, I created a JavaScript web application to take files from users and store company data. Then, using APIs, a dashboard of companies are shown to investors to be bid on in 
										a silent auction process. At a timed deadline, the investor who bids the most will win "ownership" of that company and future relationships with them. An email will be sent out with results 
										of the bidding process each week.
										{/* <br/><br/>

										The MVP can be found at this{' '}
										<a href="https://github.com/mkim45/TopDownMassSpecClassification" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>{' '}
										. */}
									</p>
									<img
										src={BatteryTool}
										alt="BatteryTool"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Battery})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(3)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Battery Ventures Internal Bidding Tool
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[4]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Fragment Ion Comparison Analysis
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jul. 2023 - Aug. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> C#
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to analyze the difference in masses 
										amongst matched fragment ions for ensemble and individualized ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
										greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis is needed to see whether the missed fragment ions 
										left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

										To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
										ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
										in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
										where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
										and present in both spectra for I2MS and ensemble.<br/><br/>

										C# was utilized for the mapping and analysis of spectra across the entire project. More information about the Kelleher Research Group can be found at this{' '}
										<a href="https://www.kelleher.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											link here
										</a>
										.
									</p>
									<img
										src={I2MSComparison}
										alt="I2MSComparison"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins1})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(4)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Fragment Ion Comparison Analysis
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[5]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Top-Down Label-Free Quantification
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jun. 2023 - Aug. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python, R, SAS
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I assisted in conducting data analysis through a top-down label-free 
										quantification for identification of statistically significant intensities of metabolites as part of an external ALS study. Analysis was done utilizing custom SAS, R, and 
										Python scripts to get final deliverable results to external collaborators.<br/><br/>

										Initially, comparisons were made between the different custom scripts created in SAS, R, and Python to ensure the same results across all three programming langauges. This ensured 
										that the final deliverable analysis to external collaborators could be verifiably sound, regardless of which of the three was chosen to run the analysis in. Afterwards, heirarchical linear 
										model-based ANOVA was used to find metabolites with statistically significant differences across multiple treatment factors and time conditions. Boxplots were created to see the quality of the 
										data based on the variation from all sources, in addition to subsequent batch correction steps and a random effect for block. Further analysis was also done to determine whether acceptable 
										levels of missing values were present.<br/><br/>

										P-values, z-scores, and fold changes were obtained for the creation of volcano plots that gave pairwise comparisons between treatments. Also, q-values were obtained using the 
										Benjamini Hochberg procedure, yielding corrected p-values for marking boundaries of false-discovery rates (FDR) against fold changes. After this, heatmaps were created to display the differences 
										in all treatments in an easily-interpretable visual. Subsets of metabolites of interest were also highlighted in separate heatmaps.<br/><br/>

										More information about the Kelleher Research Group can be found at this{' '}
										<a href="https://www.kelleher.northwestern.edu/" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											link here
										</a>
										.
									</p>
									<img
										src={LabelFreeQuant}
										alt="LabelFreeQuant"
										style={{ maxWidth: "80%", height: "auto", padding: "0px 20px 10px 20px", margin: "auto" }}
									/>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins5})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(5)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Top-Down Label-Free Quantification
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[6]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												ICR Health Condition Prediction
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Jun. 2023 - Aug. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python (Pandas, NumPy, Matplotlib, Optuna, Scikit-learn, Seaborn, Statsmodels)
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										Using data from a Kaggle competition and InVitro Cell Research (ICR), I built predictive machine learning models to determine the probability that a patient had one of three age-related medical 
										conditions based on various health characteristics data. Given the current literature connecting age with a number of complications (from heart disease to dementia), bioinformatics and data science 
										can be utilized to intervene earlier if models are able to accurately detect where medical conditions may arise.<br/><br/>

										I used Python and various libraries to initially do exploratory data analysis on 50+ masked health conditions and the binary response variable (presence of age-related health condition or not in patient). 
										Afterwards, I imputed missing values after substantial testing of performance on base models after different imputation methods. I tested the performance of XGBoost, Random Forest, Decision Tree Classifiers, 
										TabPFN, CatBoost, LightGBM, AdaBoost, and Gradient Boosting Classifiers individually and ensembled using both stacking and voting. Optuna trials and cross-validated metrics were used to find ideal hyperparameter 
										values, in addition to different regularization parameters to adjust for overfitting and visualizations of model shortcomings in predicting probabilities of response above or below certain thresholds.<br/><br/>

										The models can be found at this{' '}
										<a href="https://github.com/mkim45/ICR-Age" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins3})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(6)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											ICR Health Condition Prediction
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[7]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Northwestern Science Olympiad Website
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Nov. 2023 - Present<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> JavaScript (React), CSS, HTML
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As the technology director for the Northwestern University Science Olympiad organization, I am currently creating a website to display relevant details about the club, our past competitions,
										and information for teams related to our upcoming invitational in February 2024. The Northwestern University Science Olympiad organization plans a Division C Science Olympiad Invitational for 
										30+ high school teams (approximately 450+ students) each February on the Evanston campus. The organization's executive board is responsible for planning and preparing the logistics of the 
										tournament day and lead up to the competition.<br/><br/>

										The website was created using a combination of JavaScript, CSS, and HTML. It is an updated version of the previous year's website that was built primarily using WordPress and other CSS and HTML 
										elements, which lacked capabilities for user-friendly navigation to various pages housing necessary information and had design constraints. Sections of the website were created to display information 
										about the organization itself, the upcoming competition for this year including sign-up and logistics, and past competition tests and answer keys as a resource for competing high school students. The 
										website will continue to be updated throughout the year leading up to the invitational in February to include new announcements about tournament day logistics.<br/><br/>

										The website is currently being built and will be finished in September ahead of the beginning of sign-up for the 2024 invitational.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Science1})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(7)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Northwestern Science Olympiad Website
										</h2>
									</div>
								</div>
							</div>
							<Dialog
								fullWidth
								maxWidth={"lg"}
								open={open[8]}
								onClose={handleClose}
								PaperProps={{
									sx: {
									minHeight: "400px",
									maxHeight: "600px",
									backgroundColor: "#f0fff1"
									}
								}}
							>
								<div 
									style={{
										display: "flex",
										flexDirection: "column",
										height: "100%"
									}}
								>
									<div
										style={{
											position: { sm: "static", md: "sticky" },
											top: 0,
											backgroundColor: "#f0fff1",
											zIndex: 3,
										}}
									>
										<div 
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
												padding: "10px"
											}}
										>
											<p
												style={{
													fontWeight: 600,
													color: "#1b4332",
													fontSize: "36px",
													padding: "0px 10px 0px 10px",
													margin: "10px 0px 10px 0px"
												}}
											>
												Wine Quality Prediction Models
											</p>
										</div>
										<p style={{
											fontWeight: 500,
											fontSize: "18px",
											padding: "5px 20px 5px 20px",
											margin: "0px 0px 10px 0px"
										}}>
											<span style={{ fontWeight: "bold" }}>Duration:</span> Apr. 2023 - Jun. 2023<br/><span style={{ fontWeight: "bold" }}>Technologies Used:</span> Python (Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn)
										</p>
										<div 
											style={{
												borderBottom: "1.5px solid black",
												marginLeft: "14px",
												marginRight: "14px",
												width: `calc(100% - 28px)`
											}}
										/>
									</div>
									<p
										style={{
											fontWeight: 500,
											color: "#190019",
											fontSize: "18px",
											padding: "10px 20px 10px 20px"
										}}
									>
										As part of the final coursework for STAT 303-3 Data Science in Python course, I completed a project to predict the quality of Vinho Verde red and white wines 
										using various models as part of a four-person team. Wine quality was measured as a discrete response variable on a scale of 0-10, with 11 predictor variables based on physicochemical 
										properties of wines being used from samples to train our models. We attempted to minimize MAE to attempt to predict quality within the margin of rounding up or down to the nearest integer value.<br/><br/>

										To begin with, stratified splitting of data was done with respect to wine quality to obtain training and testing data at similar distributions to the overall dataset for response variables. MARS, Bagged 
										Decision Trees, Random Forest, and XGBoost models were used to test individual model performance in reducing MAE beyond naive methods. Fine tuning of hyperparameters was done for all four of these models 
										to minimize cross-validated MAE. Afterwards, the four individual models were ensembled using various methods, including voting ensemble and stacking ensemble with different metamodels. Further attempts at creating 
										ensembles of ensembled models with different metamodels was conducted. However, the best model ended up being the fine-tuned voting ensemble, with a test MAE of 0.35 being within the desired range to predict 
										wine quality within the margin of rounding.<br/><br/>

										The models and project report can be found at this{' '}
										<a href="https://github.com/mkim45/Wine-Prediction" target="_blank" rel="noopener noreferrer" style={{ color: "#190019" }}>
											GitHub repository
										</a>
										.
									</p>
								</div>
							</Dialog>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Wine})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
									height: "160px",
									paddingLeft: "20px",
									paddingRight: "20px"
								}}
								onClick={() => handleClickOpen(8)}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
										}}
									>
										<h2
											style={{
												fontSize: "30px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Wine Quality Prediction Models
										</h2>
									</div>
								</div>
							</div>
						</div>
					)}
					{windowWidth >= 1300 ? (
						<div
							style={{
								margin: "100px auto 0px",
								maxWidth: "1200px"
							}}
						>
							<div
								style={{
									width: "100%"
								}}
							>
								<div
									style={{
										position: "relative",
										marginBottom: "36.5px"
									}}
								>
									<h2
										style={{
											fontSize: "64px",
											fontFamily: "Bitter, serif",
											fontWeight: "bold",
											color: "#1b4332",
											margin: "0px"
										}}
									>
										About my experiences<span style={{ color: "#52b788" }}>.</span>
									</h2>
									<div
										style={{
											width: "80px",
											height: "3.5px",
											backgroundColor: "#52b788",
											marginTop: "10px"
										}}
									></div>
								</div>
								<div
									style={{
										margin: "0px auto",
										position: "relative"
									}}
								>
									<p
										style={{
											fontSize: "17px",
											marginTop: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
										}}
									>
										I'm passionate about learning and leveraging new technologies in fast-paced environments to 
										drive positive change. Whether accelerating proteomics research or crafting interactive products, 
										I've enjoyed collaborating with others to maximize the impact I can have in previous roles.
									</p>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: "36.5px"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										padding: "20px 0px",
										alignItems: "center",
										width: "70%",
									}}
								>
									<ImgNoMargin
										alt="pce"
										src={ProteomicsWork}
										sx={{ height: "125px", width: "125px" }}
									/>
									<div
										style={{
											paddingLeft: "40px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#1b4332",
												margin: "0px"
											}}
										>
											Proteomics Center of Excellence<span style={{ color: "#52b788" }}></span>
										</h2>
										<p
											style={{
												fontSize: "22px",
												marginTop: "4px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											Informatics and Software Engineering Intern
										</p>
										<p
											style={{
												fontSize: "17px",
												marginTop: "10px",
												marginBottom: "10px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											The Northwestern University Proteomics Center of Excellence is a lab pioneering mass spectrometry
											methods in top-down proteomics. I have worked on software for label-free quantification, 
											proteoform discovery, and mass spectrometry tools. 
										</p>
									</div>
								</div>
								<p
									style={{
										fontSize: "22px",
										marginTop: "20px",
										marginBottom: "0px",
										lineHeight: 1.65,
										color: "#1b4332",
										paddingLeft: "20px",
										paddingRight: "20px",
									}}
								>
									Jun. 2023 - Present
								</p>
								<div>
									<div
										className="timeline"
										style={{
											marginTop: "22.5px"
										}}
									></div>
									<div
										className="post-timeline"
									></div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										padding: "20px 0px",
										alignItems: "center",
										width: "70%"
									}}
								>
									<ImgNoMargin
										alt="pce"
										src={NorthwesternWork}
										sx={{ height: "125px", width: "125px" }}
									/>
									<div
										style={{
											paddingLeft: "40px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#1b4332",
												margin: "0px"
											}}
										>
											Northwestern Science Olympiad<span style={{ color: "#52b788" }}></span>
										</h2>
										<p
											style={{
												fontSize: "22px",
												marginTop: "4px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											Technology Director
										</p>
										<p
											style={{
												fontSize: "17px",
												marginTop: "10px",
												marginBottom: "10px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											The Northwestern University Science Olympiad organization hosts an annual competition for 
											high school students. I created a website for the invitational and have worked to implement 
											grading automation solutions and test analytics.
										</p>
									</div>
								</div>
								<p
									style={{
										fontSize: "22px",
										marginTop: "20px",
										marginBottom: "0px",
										lineHeight: 1.65,
										color: "#1b4332",
										paddingLeft: "20px",
										paddingRight: "20px"
									}}
								>
									Sep. 2022 - Present
								</p>
								<div>
									<div
										className="timeline"
										style={{
											marginTop: "22.5px"
										}}
									></div>
									<div
										className="post-timeline"
									></div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										padding: "20px 0px",
										alignItems: "center",
										width: "70%"
									}}
								>
									<ImgNoMargin
										alt="pce"
										src={BatteryWork}
										sx={{ height: "125px", width: "125px" }}
									/>
									<div
										style={{
											paddingLeft: "40px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#1b4332",
												margin: "0px"
											}}
										>
											Battery Ventures<span style={{ color: "#52b788" }}></span>
										</h2>
										<p
											style={{
												fontSize: "22px",
												marginTop: "4px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											Sourcing and Diligence Analyst Extern
										</p>
										<p
											style={{
												fontSize: "17px",
												marginTop: "10px",
												marginBottom: "10px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											I joined Battery Ventures ($13B AUM) as an sourcing analyst extern to find target B2B SaaS companies, a
											diligence analyst extern to complete a project on broadcasting software, and built an internal software
											tool prototype for bidding on companies. 
										</p>
									</div>
								</div>
								<p
									style={{
										fontSize: "22px",
										marginTop: "20px",
										marginBottom: "0px",
										lineHeight: 1.65,
										color: "#1b4332",
										paddingLeft: "20px",
										paddingRight: "20px"
									}}
								>
									Jan. 2023 - Dec. 2023
								</p>
								<div>
									<div
										className="timeline"
										style={{
											marginTop: "22.5px"
										}}
									></div>
									<div
										className="post-timeline"
									></div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										padding: "20px 0px",
										alignItems: "center",
										width: "70%"
									}}
								>
									<ImgNoMargin
										alt="pce"
										src={InboundWork}
										sx={{ height: "125px", width: "125px" }}
									/>
									<div
										style={{
											paddingLeft: "40px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#1b4332",
												margin: "0px"
											}}
										>
											Inbound<span style={{ color: "#52b788" }}></span>
										</h2>
										<p
											style={{
												fontSize: "22px",
												marginTop: "4px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											Software Engineer and Growth Associate
										</p>
										<p
											style={{
												fontSize: "17px",
												marginTop: "10px",
												marginBottom: "10px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											Inbound is a university student recruiting platform for 16+ universities and recruiters from companies like Blackstone, Mastercard, and Deloitte. I led student 
											outreach efforts and contributed to building and refactoring student and employer portals. 
										</p>
									</div>
								</div>
								<p
									style={{
										fontSize: "22px",
										marginTop: "20px",
										marginBottom: "0px",
										lineHeight: 1.65,
										color: "#1b4332",
										paddingLeft: "20px",
										paddingRight: "20px"
									}}
								>
									Aug. 2022 - Jun. 2023
								</p>
								<div>
									<div
										className="timeline"
										style={{
											marginTop: "22.5px"
										}}
									></div>
									<div
										className="post-timeline"
									></div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										padding: "20px 0px",
										alignItems: "center",
										width: "70%"
									}}
								>
									<ImgNoMargin
										alt="pce"
										src={BastiatWork}
										sx={{ height: "125px", width: "125px" }}
									/>
									<div
										style={{
											paddingLeft: "40px"
										}}
									>
										<h2
											style={{
												fontSize: "36px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#1b4332",
												margin: "0px"
											}}
										>
											Bastiat Partners<span style={{ color: "#52b788" }}></span>
										</h2>
										<p
											style={{
												fontSize: "22px",
												marginTop: "4px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											Investment Banking Summer Analyst
										</p>
										<p
											style={{
												fontSize: "17px",
												marginTop: "10px",
												marginBottom: "10px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											Bastiat Partners is a merchant bank advising Seed through Series C companies on venture capital raises. I joined calls with 
											startup CEOs to discuss prospective and active primary opportunities and led sourcing to identify private SaaS companies.
										</p>
									</div>
								</div>
								<p
									style={{
										fontSize: "22px",
										marginTop: "20px",
										marginBottom: "0px",
										lineHeight: 1.65,
										color: "#1b4332",
										paddingLeft: "20px",
										paddingRight: "20px",
									}}
								>
									Jun. 2022 - Sep. 2022
								</p>
								<div>
									<div
										className="timeline"
										style={{
											marginTop: "22.5px"
										}}
									></div>
								</div>
							</div>
						</div>
					) : (
						windowWidth >= 800 ? (
							<div
								style={{
									margin: "100px auto 0px",
									maxWidth: "1200px"
								}}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										<h2
											style={{
												fontSize: "64px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#1b4332",
												margin: "0px"
											}}
										>
											About my experiences<span style={{ color: "#52b788" }}>.</span>
										</h2>
										<div
											style={{
												width: "80px",
												height: "3.5px",
												backgroundColor: "#52b788",
												marginTop: "10px"
											}}
										></div>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											I'm passionate about learning and leveraging new technologies in fast-paced environments to 
											drive positive change. Whether accelerating proteomics research or crafting interactive products, 
											I've enjoyed collaborating with others to maximize the impact I can have in previous roles.
										</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										marginTop: "36.5px"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "70%",
										}}
									>
										<ImgNoMargin
											alt="pce"
											src={ProteomicsWork}
											sx={{ height: "125px", width: "125px" }}
										/>
										<div
											style={{
												paddingLeft: "40px",
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Proteomics Center of Excellence<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Informatics and Software Engineering Intern
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												The Northwestern University Proteomics Center of Excellence is a lab pioneering mass spectrometry
												methods in top-down proteomics. I have worked on software for label-free quantification, 
												proteoform discovery, and mass spectrometry tools. 
											</p>
										</div>
									</div>
									<p
										style={{
											fontSize: "22px",
											marginTop: "20px",
											marginBottom: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
											paddingLeft: "20px",
											paddingRight: "20px",
										}}
									>
										Jun. 2023 - Present
									</p>
									<div>
										<div
											className="timeline"
											style={{
												marginTop: "22.5px"
											}}
										></div>
										<div
											className="post-timeline"
										></div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "70%"
										}}
									>
										<ImgNoMargin
											alt="pce"
											src={NorthwesternWork}
											sx={{ height: "125px", width: "125px" }}
										/>
										<div
											style={{
												paddingLeft: "40px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Northwestern Science Olympiad<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Technology Director
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												The Northwestern University Science Olympiad organization hosts an annual competition for 
												high school students. I created a website for the invitational and have worked to implement 
												grading automation solutions and test analytics.
											</p>
										</div>
									</div>
									<p
										style={{
											fontSize: "22px",
											marginTop: "20px",
											marginBottom: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
											paddingLeft: "20px",
											paddingRight: "20px"
										}}
									>
										Sep. 2022 - Present
									</p>
									<div>
										<div
											className="timeline"
											style={{
												marginTop: "22.5px"
											}}
										></div>
										<div
											className="post-timeline"
										></div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "70%"
										}}
									>
										<ImgNoMargin
											alt="pce"
											src={BatteryWork}
											sx={{ height: "125px", width: "125px" }}
										/>
										<div
											style={{
												paddingLeft: "40px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Battery Ventures<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Sourcing and Diligence Analyst Extern
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												I joined Battery Ventures ($13B AUM) as an sourcing analyst extern to find target B2B SaaS companies, a
												diligence analyst extern to complete a project on broadcasting software, and built an internal software
												tool prototype for bidding on companies. 
											</p>
										</div>
									</div>
									<p
										style={{
											fontSize: "22px",
											marginTop: "20px",
											marginBottom: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
											paddingLeft: "20px",
											paddingRight: "20px"
										}}
									>
										Jan. 2023 - Dec. 2023
									</p>
									<div>
										<div
											className="timeline"
											style={{
												marginTop: "22.5px"
											}}
										></div>
										<div
											className="post-timeline"
										></div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "70%"
										}}
									>
										<ImgNoMargin
											alt="pce"
											src={InboundWork}
											sx={{ height: "125px", width: "125px" }}
										/>
										<div
											style={{
												paddingLeft: "40px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Inbound<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Software Engineer and Growth Associate
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Inbound is a university student recruiting platform for 16+ universities and recruiters from companies like Blackstone, Mastercard, and Deloitte. I led student 
												outreach efforts and contributed to building and refactoring student and employer portals. 
											</p>
										</div>
									</div>
									<p
										style={{
											fontSize: "22px",
											marginTop: "20px",
											marginBottom: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
											paddingLeft: "20px",
											paddingRight: "20px"
										}}
									>
										Aug. 2022 - Jun. 2023
									</p>
									<div>
										<div
											className="timeline"
											style={{
												marginTop: "22.5px"
											}}
										></div>
										<div
											className="post-timeline"
										></div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "70%"
										}}
									>
										<ImgNoMargin
											alt="pce"
											src={BastiatWork}
											sx={{ height: "125px", width: "125px" }}
										/>
										<div
											style={{
												paddingLeft: "40px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Bastiat Partners<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Investment Banking Summer Analyst
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Bastiat Partners is a merchant bank advising Seed through Series C companies on venture capital raises. I joined calls with 
												startup CEOs to discuss prospective and active primary opportunities and led sourcing to identify private SaaS companies.
											</p>
										</div>
									</div>
									<p
										style={{
											fontSize: "22px",
											marginTop: "20px",
											marginBottom: "0px",
											lineHeight: 1.65,
											color: "#1b4332",
											paddingLeft: "20px",
											paddingRight: "20px",
										}}
									>
										Jun. 2022 - Sep. 2022
									</p>
									<div>
										<div
											className="timeline"
											style={{
												marginTop: "22.5px"
											}}
										></div>
									</div>
								</div>
							</div>
						) : (
							<div
								style={{
									margin: "100px auto 0px",
									maxWidth: "1200px"
								}}
							>
								<div
									style={{
										width: "100%"
									}}
								>
									<div
										style={{
											position: "relative",
											marginBottom: "36.5px"
										}}
									>
										{windowWidth >= 500 ? (
											<h2
												style={{
													fontSize: "64px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												About my experiences<span style={{ color: "#52b788" }}>.</span>
											</h2>
										) : (
											<h2
												style={{
													fontSize: "64px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												About my roles<span style={{ color: "#52b788" }}>.</span>
											</h2>
										)}
										<div
											style={{
												width: "80px",
												height: "3.5px",
												backgroundColor: "#52b788",
												marginTop: "10px"
											}}
										></div>
									</div>
									<div
										style={{
											margin: "0px auto",
											position: "relative"
										}}
									>
										<p
											style={{
												fontSize: "17px",
												marginTop: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
											}}
										>
											I'm passionate about learning and leveraging new technologies in fast-paced environments to 
											drive positive change. Whether accelerating proteomics research or crafting interactive products, 
											I enjoy collaborating with others to maximize the impact I can have.
										</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										marginTop: "36.5px"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "100%"
										}}
									>
										{windowWidth >= 500 ? (
											<ImgNoMargin
												alt="pce"
												src={ProteomicsWork}
												sx={{ height: "125px", width: "125px" }}
											/>
										) : (
											<></>
										)}
										<div
											style={{
												paddingLeft: windowWidth >= 500 ? "40px" : "0px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Proteomics Center of Excellence<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Informatics and Software Engineering Intern
											</p>
											<p
												style={{
													fontSize: "19px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Jun. 2023 - Present
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												The Northwestern University Proteomics Center of Excellence is a lab pioneering mass spectrometry
												methods in top-down proteomics. I have worked on software for label-free quantification, 
												proteoform discovery, and mass spectrometry tools. 
											</p>
										</div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "100%"
										}}
									>
										{windowWidth >= 500 ? (
											<ImgNoMargin
												alt="northwesternWork"
												src={NorthwesternWork}
												sx={{ height: "125px", width: "125px" }}
											/>
										) : (
											<></>
										)}
										<div
											style={{
												paddingLeft: windowWidth >= 500 ? "40px" : "0px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Northwestern Science Olympiad<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Technology Director
											</p>
											<p
												style={{
													fontSize: "19px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Sep. 2022 - Present
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												The Northwestern University Science Olympiad organization hosts an annual competition for 
												high school students. I created a website for the invitational and have worked to implement 
												grading automation solutions and test analytics.
											</p>
										</div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "100%"
										}}
									>
										{windowWidth >= 500 ? (
											<ImgNoMargin
												alt="batteryWork"
												src={BatteryWork}
												sx={{ height: "125px", width: "125px" }}
											/>
										) : (
											<></>
										)}
										<div
											style={{
												paddingLeft: windowWidth >= 500 ? "40px" : "0px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Battery Ventures<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Sourcing and Diligence Analyst Extern
											</p>
											<p
												style={{
													fontSize: "19px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Jan. 2023 - Dec. 2023
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												I joined Battery Ventures ($13B AUM) as an sourcing analyst extern to find target B2B SaaS companies, a
												diligence analyst extern to complete a project on broadcasting software, and built an internal software
												tool prototype for bidding on companies. 
											</p>
										</div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "100%"
										}}
									>
										{windowWidth >= 500 ? (
											<ImgNoMargin
												alt="inboundWork"
												src={InboundWork}
												sx={{ height: "125px", width: "125px" }}
											/>
										) : (
											<></>
										)}
										<div
											style={{
												paddingLeft: windowWidth >= 500 ? "40px" : "0px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Inbound<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Software Engineer and Growth Associate
											</p>
											<p
												style={{
													fontSize: "19px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Aug. 2022 - Jun. 2023
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Inbound is a university student recruiting platform for 16+ universities and recruiters from companies like Blackstone, Mastercard, and Deloitte. I led student 
												outreach efforts and contributed to building and refactoring student and employer portals. 
											</p>
										</div>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between"
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											padding: "20px 0px",
											alignItems: "center",
											width: "100%"
										}}
									>
										{windowWidth >= 500 ? (
											<ImgNoMargin
												alt="bastiatWork"
												src={BastiatWork}
												sx={{ height: "125px", width: "125px" }}
											/>
										) : (
											<></>
										)}
										<div
											style={{
												paddingLeft: windowWidth >= 500 ? "40px" : "0px"
											}}
										>
											<h2
												style={{
													fontSize: "36px",
													fontFamily: "Bitter, serif",
													fontWeight: "bold",
													color: "#1b4332",
													margin: "0px"
												}}
											>
												Bastiat Partners<span style={{ color: "#52b788" }}></span>
											</h2>
											<p
												style={{
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Investment Banking Summer Analyst
											</p>
											<p
												style={{
													fontSize: "19px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Jun. 2022 - Sep. 2022
											</p>
											<p
												style={{
													fontSize: "17px",
													marginTop: "10px",
													marginBottom: "10px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Bastiat Partners is a merchant bank advising Seed through Series C companies on venture capital raises. I joined calls with 
												startup CEOs to discuss prospective and active primary opportunities and led sourcing to identify private SaaS companies.
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					<div
						style={{
							margin: "100px auto 0px",
							maxWidth: "1200px"
						}}
					>
						<div
							style={{
								width: "100%"
							}}
						>
							<div
								style={{
									position: "relative",
									marginBottom: "36.5px"
								}}
							>
								<h2
									style={{
										fontSize: "64px",
										fontFamily: "Bitter, serif",
										fontWeight: "bold",
										color: "#1b4332",
										margin: "0px"
									}}
								>
									Contact me<span style={{ color: "#52b788" }}>.</span>
								</h2>
								<div
									style={{
										width: "80px",
										height: "3.5px",
										backgroundColor: "#52b788",
										marginTop: "10px"
									}}
								></div>
							</div>
							<div
								style={{
									margin: "0px auto",
									position: "relative"
								}}
							>
								<p
									style={{
										fontSize: "17px",
										marginTop: "0px",
										lineHeight: 1.65,
										color: "#1b4332",
										marginBottom: "36.5px"
									}}
								>
									I am currently looking for opportunities for Spring 2024 and Summer 2024. If you'd like to learn more about me or just want to chat, please reach out!
								</p>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								justifyContent: windowWidth < 600 ? "space-between" : "normal"
							}}
						>
							<a href="https://github.com/mkim45" target="_blank" rel="noopener noreferrer" underline="none">
								<ImgNoMargin
									alt="githubtop"
									src={GitHubIcon}
									sx={{ height: "40px", width: "40px", paddingRight: windowWidth >= 600 ? "40px" : "0px" }}
								/>
							</a>
							<a href="https://www.linkedin.com/in/michael-kim-nu/" target="_blank" rel="noopener noreferrer" underline="none">
								<ImgNoMargin
									alt="linkedintop"
									src={LinkedInIcon}
									sx={{ height: "40px", width: "40px", paddingRight: windowWidth >= 600 ? "40px" : "0px" }}
								/>
							</a>
							<a href={"mailto:michaelkim2025.1@u.northwestern.edu"} target="_blank" rel="noopener noreferrer" underline="none">
								<EmailIcon style={{ width: "40px", height: "40px", color: "#1b4332", paddingRight: windowWidth >= 600 ? "40px" : "0px" }} />
							</a>
							<a href="https://drive.google.com/file/d/1KsjGK1Vvj932qUB7lhl_Z5iZ-YAZgjHq/view?usp=sharing" target="_blank" rel="noopener noreferrer" underline="none" style={{ textDecoration: "none" }}>
								<div
									style={{ display: "flex", flexDirection: "row", textDecoration: "none", alignItems: "center", padding: "0px", margin: "0px" }}
								>
									{windowWidth >= 600 ? (
										<>
											<p
												style={{
													fontSize: "22px",
													margin: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
													paddingRight: "10px",
													display: "flex",
													alignItems: "center"
												}}
											>
												View My Resume
											</p>
											<ArrowForwardIcon 
												style={{ width: "30px", height: "30px", color: "#1b4332", alignItems: "center", display: "flex", margin: "0px", padding: "0px" }}
											></ArrowForwardIcon>
										</>
									) : (
										<p
											style={{
												fontSize: "22px",
												margin: "0px",
												lineHeight: 1.65,
												color: "#1b4332",
												paddingRight: "10px",
												display: "flex",
												alignItems: "center"
											}}
										>
											Resume
										</p>
									)}
								</div>
							</a>
						</div>
					</div>
					<div
						style={{ height: "36.5px" }}
					></div>
				</div>
			</div>
		</div>
    );
};

export default Main;