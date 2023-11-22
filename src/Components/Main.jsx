import { AppBar, Toolbar, Box, Stack, Typography, Link } from "@mui/material";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Work from "./Work";
import { styled } from "@mui/material/styles";
import "./Main.css";

import Portrait from "./Michael_Kim.png";
import AboutMe from "./AboutMe.png";
import Yelp from "./Yelp.png";
import Battery from "./Battery.png";
import Chess from "./Chess.png";
import Proteins1 from "./Proteins1.png";
import Proteins2 from "./Proteins2.png";
import Proteins3 from "./Proteins3.png";
import Proteins4 from "./Proteins4.png";
import Proteins5 from "./Proteins5.png";
import Science1 from "./Science1.png";
import SciOly from "./SciOly.png";
import Uber from "./Uber.png";
import Wine from "./Wine.png";

import Net from "./NET.png";
import Azure from "./Azure.png";
import Blazor from "./Blazor.png";
import C from "./C.png";
import CSharp from "./CSharp.png";
import CPlus from "./C++.png";
import CSS from "./CSS.png";
import FSharp from "./FSharp.png";
import Figma from "./Figma.png";
import Firebase from "./Firebase.png";
import Git from "./Git.png";
import HTML from "./HTML.png";
import HuggingFace from "./Hugging.png";
import Java from "./Java.png";
import JavaScript from "./Javascript.png";
import Keras from "./Keras.png";
import Matplotlib from "./Matplotlib.png";
import MySQL from "./MySQL.png";
import Node from "./Node.png";
import Npm from "./Npm.png";
import Numpy from "./Numpy.png";
import Pandas from "./Pandas.png";
import Postgre from "./Postgre.png";
import Python from "./Python.png";
import Pytorch from "./Pytorch.png";
import R from "./R.png";
import Racket from "./Racket.png";
import ReactImage from "./React.png";
import SAS from "./SAS.png";
import Scikit from "./Scikit.png";
import Scipy from "./Scipy.png";
import Seaborn from "./Seaborn.png";
import SQLite from "./SQLite.png";
import Statsmodels from "./Statsmodels.png";
import Tensorflow from "./Tensorflow.png";
import Wasm from "./WebAssembly.png";

import ProteomicsWork from "./Proteomics.jpg";
import BatteryWork from "./BatteryWork.png";
import InboundWork from "./Inbound.png";
import BastiatWork from "./BastiatPartners.jpg";
import NorthwesternWork from "./NorthwesternWork.jpg";

import GitHubIcon from "./GitHub.png";
import LinkedInIcon from "./LinkedInLogo.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import HomeLogo from "./Logo.png";

import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ArrowForward, GitHub } from "@mui/icons-material";

const ImgNoMargin = styled("img")({
	maxWidth: "100%",
	maxHeight: "100%",
});

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 100) || 4000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 150 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 1000;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #1b4332 }";
	document.body.appendChild(css);
  };

const Main = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
						zIndex: 10000,
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
						marginLeft: "60px",
						marginRight: "60px"
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
									display: "flex", justifyContent: "center"
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
										fontSize: "72px",
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
										fontSize: "24px",
										maxWidth: "525px",
										marginTop: "30px",
										lineHeight: 1.65,
										color: "#1b4332"
									}}
								>
									I'm a <b>software engineer</b> and <b>data scientist</b> interested in improving human experiences through&nbsp;
									<span class="txt-rotate"
										style={{
											fontWeight: "bold",
											color: "#1b4332"
										}} 
										data-period="1500"
										data-rotate='["multiomics.&nbsp;", "machine learning.&nbsp;", "startups.&nbsp;", "software development.&nbsp;", "bioinformatics.&nbsp;"]'>
									</span>
								</p>
							</div>
						</div>
						{windowWidth >= 1075 ? (
							<div
								style={{
									marginTop: "60px",
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
										and an M.S. in Computer Science through a B.A./M.S. program.<br/><br/>
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
										and an M.S. in Computer Science through a B.A./M.S. program.<br/><br/>
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
					{windowWidth >= 1375 ? (
						<div
							style={{
								margin: "100px auto 0px",
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
										I'm passionate about learning and leveraging new technologies in fast-paced environments to 
										drive positive change. Whether accelerating proteomics research or crafting interactive products, 
										I enjoy collaborating with others to maximize the impact I can have.
									</p>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "40px",
									backgroundImage: `url(${Proteins2})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Mass Spectrometry Insights Tool
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
											A reimagining of Thermo Fisher Scientific's RawMeat mass spectrometry data quality assessment 
											software for comprehensive tabular and graphical insights. Created through reverse engineering, 
											the tool is built to be OS-agnostic using WebAssembly (Blazor) and C#, enhancing accessiblility to 
											data quality metrics and improving capabilities across both top-down and bottom-up proteomics use.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins4})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
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
											A machine learning tool for filtering out poor quality mass spectrometry scans in order to improve performance and 
											computing speeds of proteoform discovery methods in top-down proteomics. Built using tuned autoencoder neural networks 
											and logistic regression models with dimensionality reduction for binary classification.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Battery})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
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
											An internal software tool created for investment professionals to browse sourced companies by externs and bid in a silent auction system 
											for ownership of future calls and transactions with target companies.
										</p>
									</div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "100%",
									justifyContent: "space-between"
								}}
							>
								<div
									className="project"
									style={{
										marginTop: "20px",
										backgroundImage: `url(${Proteins1})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										width: "25.5%",
										height: "180px"
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
												marginBottom: "18px"
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
												Fragment Ion Comparison
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
													marginTop: "0px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#fff",
												}}
											>
												A comparison of matched ion masses for ensemble vs. I2MS methods.
											</p>
										</div>
									</div>
								</div>
								<div
									className="project"
									style={{
										marginTop: "20px",
										backgroundImage: `url(${Proteins5})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										width: "25.5%",
										height: "180px"
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
												marginBottom: "18px"
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
												Top-Down Quantification
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
													marginTop: "0px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#fff",
												}}
											>
												A top-down label-free quantification for ALS study metabolite measures.
											</p>
										</div>
									</div>
								</div>
								<div
									className="project"
									style={{
										marginTop: "20px",
										backgroundImage: `url(${Proteins3})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										width: "25.5%",
										height: "180px"
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
												marginBottom: "18px"
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
												ICR Disease Prediction
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
													marginTop: "0px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#fff",
												}}
											>
												A project to predict age-related health conditions from masked features. 
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "100%",
									justifyContent: "space-between"
								}}
							>
								<div
									className="project"
									style={{
										marginTop: "20px",
										backgroundImage: `url(${Science1})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										width: "25.5%",
										height: "180px"
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
												marginBottom: "18px"
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
												NU Science Olympiad Website
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
													marginTop: "0px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#fff",
												}}
											>
												A website for the Northwestern University Science Olympiad group.
											</p>
										</div>
									</div>
								</div>
								<div
									className="project"
									style={{
										marginTop: "20px",
										backgroundImage: `url(${Wine})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										width: "25.5%",
										height: "180px"
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
												marginBottom: "18px"
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
												Wine Quality Prediction
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
													marginTop: "0px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#fff",
												}}
											>
												A project to predict Vinho Verde wine quality with tuned models.
											</p>
										</div>
									</div>
								</div>
								<div
									className="project"
									style={{
										marginTop: "20px",
										backgroundImage: `url(${Uber})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										width: "25.5%",
										height: "180px"
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
												marginBottom: "18px"
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
												Lyft / Uber Price Prediction
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
													marginTop: "0px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#fff",
												}}
											>
												A project to predict the prices of Lyft and Uber rides in the Boston area.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : windowWidth >= 1075 ? (
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
										I'm passionate about learning and leveraging new technologies in fast-paced environments to 
										drive positive change. Whether accelerating proteomics research or crafting interactive products, 
										I enjoy collaborating with others to maximize the impact I can have.
									</p>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "40px",
									backgroundImage: `url(${Proteins2})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Mass Spectrometry Insights Tool
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
											A reimagining of Thermo Fisher Scientific's RawMeat mass spectrometry data quality assessment 
											software for comprehensive tabular and graphical insights. Created through reverse engineering, 
											the tool is built to be OS-agnostic using WebAssembly (Blazor) and C#, enhancing accessiblility to 
											data quality metrics and improving capabilities across both top-down and bottom-up proteomics use.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins4})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
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
											A machine learning tool for filtering out poor quality mass spectrometry scans in order to improve performance and 
											computing speeds of proteoform discovery methods in top-down proteomics. Built using tuned autoencoder neural networks 
											and logistic regression models with dimensionality reduction for binary classification.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Battery})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
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
											An internal software tool created for investment professionals to browse sourced companies by externs and bid in a silent auction system 
											for ownership of future calls and transactions with target companies.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins1})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "180px"
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
											marginBottom: "18px"
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
											Fragment Ion Comparison
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
												marginTop: "0px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A comparison of matched ion masses for ensemble vs. I2MS methods.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins5})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "180px"
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
											marginBottom: "18px"
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
											Top-Down Quantification
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
												marginTop: "0px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A top-down label-free quantification for ALS study metabolite measures.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins3})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "180px"
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
											marginBottom: "18px"
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
											ICR Disease Prediction
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
												marginTop: "0px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A project to predict age-related health conditions from masked features. 
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
										I'm passionate about learning and leveraging new technologies in fast-paced environments to 
										drive positive change. Whether accelerating proteomics research or crafting interactive products, 
										I enjoy collaborating with others to maximize the impact I can have.
									</p>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "40px",
									backgroundImage: `url(${Proteins2})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Mass Spectrometry Insights Tool
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
											A reimagining of Thermo Fisher Scientific's RawMeat mass spectrometry data quality assessment 
											software for comprehensive tabular and graphical insights. 
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins4})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Proteomics Quality Control
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
											A machine learning tool for filtering out poor quality mass spectrometry scans in order to improve performance and 
											computing speeds of proteoform discovery methods in top-down proteomics.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Battery})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat"
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
												fontSize: "48px",
												fontFamily: "Bitter, serif",
												fontWeight: "bold",
												color: "#fff",
												margin: "0px"
											}}
										>
											Battery Ventures Internal Tool
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
											An internal software tool created for investment professionals to browse sourced companies and bid in a silent auction system 
											for ownership of future transactions.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins1})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "180px"
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
											marginBottom: "18px"
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
											Fragment Ion Comparison
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
												marginTop: "0px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A comparison of matched ion masses for ensemble vs. I2MS methods.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins5})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "180px"
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
											marginBottom: "18px"
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
											Top-Down Quantification
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
												marginTop: "0px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A top-down label-free quantification for ALS study metabolite measures.
										</p>
									</div>
								</div>
							</div>
							<div
								className="project"
								style={{
									marginTop: "20px",
									backgroundImage: `url(${Proteins3})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									height: "180px"
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
											marginBottom: "18px"
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
											ICR Disease Prediction
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
												marginTop: "0px",
												marginBottom: "0px",
												lineHeight: 1.65,
												color: "#fff",
											}}
										>
											A project to predict age-related health conditions from masked features. 
										</p>
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
									Jun 2023 - Present
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
									Jan 2023 - Present
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
									Sep 2022 - Present
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
									Aug 2022 - Jun 2023
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
									Jun 2022 - Sep 2022
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
										Jun 2023 - Present
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
										Jan 2023 - Present
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
										Sep 2022 - Present
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
										Aug 2022 - Jun 2023
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
										Jun 2022 - Sep 2022
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
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Jun 2023 - Present
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
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Jan 2023 - Present
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
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Sep 2022 - Present
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
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Aug 2022 - Jun 2023
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
													fontSize: "22px",
													marginTop: "4px",
													marginBottom: "0px",
													lineHeight: 1.65,
													color: "#1b4332",
												}}
											>
												Jun 2022 - Sep 2022
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
						)
					)}
					<div
						style={{
							margin: "100px auto 0px",
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
							}}
						>
							<a href="https://github.com/mkim45" target="_blank" rel="noopener noreferrer" underline="none">
								<ImgNoMargin
									alt="githubtop"
									src={GitHubIcon}
									sx={{ height: "40px", width: "40px", paddingRight: "40px" }}
								/>
							</a>
							<a href="https://www.linkedin.com/in/michael-kim-nu/" target="_blank" rel="noopener noreferrer" underline="none">
								<ImgNoMargin
									alt="linkedintop"
									src={LinkedInIcon}
									sx={{ height: "40px", width: "40px", paddingRight: "40px" }}
								/>
							</a>
							<a href={"mailto:michaelkim2025.1@u.northwestern.edu"} target="_blank" rel="noopener noreferrer" underline="none">
								<EmailIcon style={{ width: "40px", height: "40px", color: "#1b4332", paddingRight: "40px" }} />
							</a>
							<a href="https://drive.google.com/file/d/1YwltLpdjJeLbaBCEr8S3trEaMApgaMQu/view?usp=drive_link" target="_blank" rel="noopener noreferrer" underline="none" style={{ textDecoration: "none" }}>
								<div
									style={{ display: "flex", flexDirection: "row", textDecoration: "none", alignItems: "center" }}
								>
									<p
										style={{
											fontSize: "22px",
											marginTop: "0px",
											marginBottom: "0px",
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
										style={{ width: "30px", height: "30px", color: "#1b4332", alignItems: "center", display: "flex" }}
									></ArrowForwardIcon>
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