import { AppBar, Toolbar, Box, Stack, Typography, IconButton, Switch, Divider, Drawer,
	List,
	ListItem,
	ListItemText,
	InputAdornment,
	Checkbox } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect, useCallback } from "react";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Hero from "./Hero";
import SignUp from "./SignUp";
import Footer from "../Footer";
import OpportunitiesImage from "../Landing/viewposts.png";
import RelationshipImage from "../Landing/discussionpost.png";
import Video from "../Landing/cardiacrehab.mp4"
import SummariesImage from "../Landing/message.png";
import Banner from "./Banner";
import Image from "../Landing/Auditboard.png"
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { Grid, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import firestore from '../../Utilities/firebase';
import { doc, setDoc, collection, getDocs, writeBatch } from "firebase/firestore"; 
import Logo from "../../images/Logo.svg";

import Portrait from "./Michael_Kim.jpg";
import Yelp from "./Yelp.png";
import Battery from "./Battery.png";
import Chess from "./Chess.png";
import Proteins1 from "./Proteins1.png";
import Proteins2 from "./Proteins2.jpeg";
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

import ExpandedCard from "./ExpandedCard";
import SearchIcon from "@mui/icons-material/Search";

import { navigateTo } from "../../Utilities/navigate";
import { useNavigate, Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const ViewPosts = () => {
	const [textOptionOneIndex, setTextOptionOneIndex] = useState(0);
	const [textOptionTwoIndex, setTextOptionTwoIndex] = useState(0);
    const navigate = useNavigate();

	const rotatingTextOptionsOne = [
		"software engineering",
		"machine learning",
		"web development",
		"data analysis"
	];

	const rotatingTextOptionsTwo = [
		"proteomics",
		"bioinformatics",
		"business",
		"metabolomics"
	];

	const calculatedWidth = (window.innerWidth - 231.5) + "px";
	const smallerCalculatedWidth = ((window.innerWidth - 231.5)/4) + "px";
	const calculatedHeight = (((window.innerWidth - 231.5)/4) + 35) + "px";

	const calculatedWidthTechnologies = (window.innerWidth - 399) + "px";
	const smallerCalculatedWidthTechnologies = ((window.innerWidth - 399)/9) + "px";
	const calculatedHeightTechnologies = (((window.innerWidth - 399)/9) + 35) + "px";

	const calculatedWidthIntermediate = (window.innerWidth - 115) + "px";
	const calculatedWidthIntermediateTotal = (window.innerWidth - 96) + "px";

	useEffect(() => {
		const intervalOne = setInterval(() => {
			setTextOptionOneIndex((prevIndex) => (prevIndex + 1) % rotatingTextOptionsOne.length);
		}, 4000);

		const intervalTwoDelay = setTimeout(() => {
			const intervalTwo = setInterval(() => {
			  setTextOptionTwoIndex((prevIndex) => (prevIndex + 1) % rotatingTextOptionsTwo.length);
			}, 4000);
		
			return () => {
			  clearInterval(intervalTwo);
			};
		}, 2000);
	
		return () => {
			clearInterval(intervalOne);
			clearInterval(intervalTwoDelay);
		};
	}, []);

    return (
        <div 
			style={{
				backgroundColor: "#fbf7f0",
				width: "100vw",
				height: "100vh",
				overflowX: "hidden"
			}}>
			<CssBaseline />
			<style>
				{`
					body {
						margin: 0;
						background-color: #fbf7f0;
					}
				`}
			</style>
            <AppBar
				position="fixed"
				sx={{ zIndex: 2, 
					  height: 94.5,
					  boxShadow: "none",
					  overflow: "visible",
					  backgroundColor: "#fbf7f0"
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar sx={{ justifyContent: "space-between" }}>
						<Box sx={{ display: { xs: "none", md: "flex" }, pt: 4, pb: 3 }}>
							<img src={Logo} width={140} alt='Logo' />
						</Box>
						<Stack
							sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, pt: 4, pb: 3 }}
							direction='row'
							>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										mr: 8,
										display: "flex",
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									ABOUT ME
								</Typography>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										mr: 8,
										display: "flex",
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									PROJECTS
								</Typography>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										mr: 8,
										display: "flex",
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									EXPERIENCES
								</Typography>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										display: "flex",
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									CONTACT ME
								</Typography>
						</Stack>
					</Toolbar>
					<div
                    style={{
                        borderBottom: "1.5px solid black",
                        marginLeft: 24,
                        marginRight: 24,
                    }}
					/>
				</Container>
			</AppBar>
			<Container maxWidth='xl' style={{ paddingTop: "96px" }}>
				<section style={{ paddingTop: "40px", paddingBottom: "40px", height: "640px", display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center"
					}}>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							width: "900px",
						}}>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "baseline",
								width: "100%"
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									Hi, my name is{" "}
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 600,
									color: "#356760",
									fontSize: 60,
									paddingLeft: 1.25,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									Michael Kim
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									.
								</Typography>
							</Box>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								paddingTop: 4
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1.5",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									I'm a software developer and data scientist interested
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1.5",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px",
								}}>
									in deepening human understanding at the intersections
								</Typography>
								<Box sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "baseline",
									width: "100%",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									of
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 40,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px",
										paddingLeft: 1.25,
										paddingRight: 1.25
									}}>
										{rotatingTextOptionsOne[textOptionOneIndex]}
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									and
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 40,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px",
										paddingLeft: 1.25
									}}>
										{rotatingTextOptionsTwo[textOptionTwoIndex]}
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									.
									</Typography>
								</Box>
							</Box>
						</Box>
						<Box sx={{
							paddingLeft: 4
						}}>
							<Img
								alt="portrait"
								src={Portrait}
								sx={{ height: "525px", width: "350px" }}
							/>
						</Box>
					</Box>
				</section>
				<div
                    style={{
                        borderBottom: "1.5px solid black",
						marginLeft: 40,
                        marginRight: 40,
                    }}
				/>
				<section style={{ paddingTop: "40px", paddingBottom: "40px", height: "640px", display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center"
					}}>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							width: "900px",
						}}>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "baseline",
								width: "100%"
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									Hi, my name is{" "}
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 600,
									color: "#356760",
									fontSize: 60,
									paddingLeft: 1.25,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									Michael Kim
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									.
								</Typography>
							</Box>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								paddingTop: 4
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1.5",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									I'm a software developer and data scientist interested
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1.5",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px",
								}}>
									in deepening human understanding at the intersections
								</Typography>
								<Box sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "baseline",
									width: "100%",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									of
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 40,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px",
										paddingLeft: 1.25,
										paddingRight: 1.25
									}}>
										{rotatingTextOptionsOne[textOptionOneIndex]}
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									and
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 40,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px",
										paddingLeft: 1.25
									}}>
										{rotatingTextOptionsTwo[textOptionTwoIndex]}
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									.
									</Typography>
								</Box>
							</Box>
						</Box>
						<Box sx={{
							paddingLeft: 4
						}}>
							<Img
								alt="portrait"
								src={Portrait}
								sx={{ height: "525px", width: "350px" }}
							/>
						</Box>
					</Box>
				</section>
				<section style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "355px" }}>
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "start",
						width: calculatedWidthIntermediateTotal,
						height: "355px"
					}}>
						<div
							style={{
								borderLeft: "1.5px solid black",
								height: "320px",
								paddingTop: "16px",
								paddingBottom: "16px",
								paddingRight: "16px",
							}}
						/>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: calculatedWidthIntermediate,
							height: "355px",
							paddingRight: "16px"
						}}>
							<div
								style={{
									borderTop: "1.5px solid black",
									paddingBottom: "16px",
									width: calculatedWidthIntermediate
								}}
							/>
							<Box sx={{
								height: "320px",
								width: calculatedWidthIntermediate,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 600,
									color: "#356760",
									fontSize: 70,
									paddingLeft: 1.25,
									lineHeight: "1",
									letterSpacing: "0.5px"
								}}>
									WHAT I'VE WORKED ON
								</Typography>
							</Box>
							<div
								style={{
									borderBottom: "1.5px solid black",
									paddingTop: "16px",
									width: calculatedWidthIntermediate
								}}
							/>
						</Box>
						<div
							style={{
								borderLeft: "1.5px solid black",
								height: "320px",
								paddingTop: "16px",
								paddingBottom: "16px",
								paddingRight: "16px",
							}}
						/>
					</Box>
				</section>
				<Projects
					calculatedWidth={calculatedWidth}
					calculatedHeight={calculatedHeight}
					smallerCalculatedWidth={smallerCalculatedWidth}
					Images={[Proteins3, Proteins2, Proteins4, Proteins1, Battery, Proteins5, SciOly, Science1, Wine, Uber, Chess, Yelp]}
				/>
				<section style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "355px" }}>
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "start",
						width: calculatedWidthIntermediateTotal,
						height: "355px"
					}}>
						<div
							style={{
								borderLeft: "1.5px solid black",
								height: "320px",
								paddingTop: "16px",
								paddingBottom: "16px",
								paddingRight: "16px",
							}}
						/>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: calculatedWidthIntermediate,
							height: "355px",
							paddingRight: "16px"
						}}>
							<div
								style={{
									borderTop: "1.5px solid black",
									paddingBottom: "16px",
									width: calculatedWidthIntermediate
								}}
							/>
							<Box sx={{
								height: "320px",
								width: calculatedWidthIntermediate,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 600,
									color: "#356760",
									fontSize: 70,
									paddingLeft: 1.25,
									lineHeight: "1",
									letterSpacing: "0.5px"
								}}>
									WHAT I'VE WORKED WITH
								</Typography>
							</Box>
							<div
								style={{
									borderBottom: "1.5px solid black",
									paddingTop: "16px",
									width: calculatedWidthIntermediate
								}}
							/>
						</Box>
						<div
							style={{
								borderLeft: "1.5px solid black",
								height: "320px",
								paddingTop: "16px",
								paddingBottom: "16px",
								paddingRight: "16px",
							}}
						/>
					</Box>
				</section>
				<Technologies
					calculatedWidthTechnologies={calculatedWidthTechnologies}
					calculatedHeightTechnologies={calculatedHeightTechnologies}
					smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
					imgSrc={[Azure, Blazor, C, CSharp, CPlus, CSS, FSharp, Figma, Firebase]}
					imgAlt={["Azure", "Blazor", "C", "CSharp", "CPlus", "CSS", "FSharp", "Figma", "Firebase"]}
					first={false}
				/>
				<Technologies
					calculatedWidthTechnologies={calculatedWidthTechnologies}
					calculatedHeightTechnologies={calculatedHeightTechnologies}
					smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
					imgSrc={[Git, HTML, HuggingFace, Java, JavaScript, Keras, Matplotlib, MySQL, Net]}
					imgAlt={["Git", "HTML", "HuggingFace", "Java", "JavaScript", "Keras", "Matplotlib", "MySQL", "Net"]}
					first={false}
				/>
				<Technologies
					calculatedWidthTechnologies={calculatedWidthTechnologies}
					calculatedHeightTechnologies={calculatedHeightTechnologies}
					smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
					imgSrc={[Node, Npm, Numpy, Pandas, Postgre, Python, Pytorch, R, Racket]}
					imgAlt={["Node", "Npm", "Numpy", "Pandas", "Postgre", "Python", "Pytorch", "R", "Racket"]}
					first={false}
				/>
				<Technologies
					calculatedWidthTechnologies={calculatedWidthTechnologies}
					calculatedHeightTechnologies={calculatedHeightTechnologies}
					smallerCalculatedWidthTechnologies={smallerCalculatedWidthTechnologies}
					imgSrc={[ReactImage, SAS, Scikit, Scipy, Seaborn, SQLite, Statsmodels, Tensorflow, Wasm]}
					imgAlt={["React", "SAS", "Scikit", "Scipy", "Seaborn", "SQLite", "Statsmodels", "Tensorflow", "Wasm"]}
					first={true}
				/>
				<section style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px", height: "355px" }}>
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "start",
						width: calculatedWidthIntermediateTotal,
						height: "355px"
					}}>
						<div
							style={{
								borderLeft: "1.5px solid black",
								height: "320px",
								paddingTop: "16px",
								paddingBottom: "16px",
								paddingRight: "16px",
							}}
						/>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: calculatedWidthIntermediate,
							height: "355px",
							paddingRight: "16px"
						}}>
							<div
								style={{
									borderTop: "1.5px solid black",
									paddingBottom: "16px",
									width: calculatedWidthIntermediate
								}}
							/>
							<Box sx={{
								height: "320px",
								width: calculatedWidthIntermediate,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 600,
									color: "#356760",
									fontSize: 70,
									paddingLeft: 1.25,
									lineHeight: "1",
									letterSpacing: "0.5px"
								}}>
									WHERE I'VE WORKED BEFORE
								</Typography>
							</Box>
							<div
								style={{
									borderBottom: "1.5px solid black",
									paddingTop: "16px",
									width: calculatedWidthIntermediate
								}}
							/>
						</Box>
						<div
							style={{
								borderLeft: "1.5px solid black",
								height: "320px",
								paddingTop: "16px",
								paddingBottom: "16px",
								paddingRight: "16px",
							}}
						/>
					</Box>
				</section>
				<section style={{ paddingTop: "40px", paddingBottom: "40px", height: "640px", display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Box sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center"
					}}>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							width: "900px",
						}}>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "baseline",
								width: "100%"
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									Hi, my name is{" "}
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 600,
									color: "#356760",
									fontSize: 60,
									paddingLeft: 1.25,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									Michael Kim
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									.
								</Typography>
							</Box>
							<Box sx={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								paddingTop: 4
							}}>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1.5",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px"
								}}>
									I'm a software developer and data scientist interested
								</Typography>
								<Typography sx={{
									fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
									fontWeight: 500,
									color: "#190019",
									fontSize: 32,
									lineHeight: "1.5",
									verticalAlign: "text-bottom",
									letterSpacing: "0.5px",
								}}>
									in deepening human understanding at the intersections
								</Typography>
								<Box sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "baseline",
									width: "100%",
								}}>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									of
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 40,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px",
										paddingLeft: 1.25,
										paddingRight: 1.25
									}}>
										{rotatingTextOptionsOne[textOptionOneIndex]}
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									and
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										fontSize: 40,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px",
										paddingLeft: 1.25
									}}>
										{rotatingTextOptionsTwo[textOptionTwoIndex]}
									</Typography>
									<Typography sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 500,
										color: "#190019",
										fontSize: 32,
										lineHeight: "1.2",
										verticalAlign: "text-bottom",
										letterSpacing: "0.5px"
									}}>
									.
									</Typography>
								</Box>
							</Box>
						</Box>
						<Box sx={{
							paddingLeft: 4
						}}>
							<Img
								alt="portrait"
								src={Portrait}
								sx={{ height: "525px", width: "350px" }}
							/>
						</Box>
					</Box>
				</section>
			</Container>
        </div>
    );
};

export default ViewPosts;
