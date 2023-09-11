import React from "react";
import { Box, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { styled } from "@mui/material/styles";
import GitHub from "./GitHub.png";
import BatteryTool from "./BatteryTool.png";
import I2MSComparison from "./I2MSComparison.png";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const ImgNoMargin = styled("img")({
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

export default function Projects({calculatedWidth, calculatedHeight, smallerCalculatedWidth, Images}) {
	const [open, setOpen] = React.useState([false, false, false, false, false, false, false, false, false, false, false, false]);

	const handleClickOpen = (index) => {
		const updatedOpen = [false, false, false, false, false, false, false, false, false, false, false, false];
		updatedOpen[index] = true;
		setOpen(updatedOpen);
	};
	  
	const handleClose = () => {
		setOpen([false, false, false, false, false, false, false, false, false, false, false, false]);
	};

	return (
		<>
		<section style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px" }}>
			<Box sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				width: calculatedWidth,
				height: calculatedHeight
			}}>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[0]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Bottom-Up Proteomics Data Assessment Tool
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A recreating of Thermo Fisher Scientific's RawMeat using Blazor WebAssembly for device-agnostic tabular and graphical representations of data quality for mass spectrometry raw file scans.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Sep 2023 - Present <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Blazor, WebAssembly, C#, JavaScript
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I am currently developing a data quality 
								assessment tool that will be open-source and publicly available for research use. Currently, scans containing data for ensemble mass spectrometry are accessable through .raw files that can only be opened using a Windows operating system. 
								Additionally, existing tools like Thermo Fisher Scientific's RawMeat or RawTartare could lack some of the data quality assessment tables or graphs desired for 
								specific use cases or in analyzing individual scans. <br/><br/>

								To solve for these missing features or use case limitations, I have been building a Blazor WebAssembly application that will accept user uploaded .raw files on
								any operating system and output tabular and graphical visualizations of scan information. Existing libraries created by the Kelleher Research Group in C# will be
								used, in addition to SciChart and some JavaScript to create the actual charts. A Model-View-ViewModel (MVVM) pattern will be implemented and testing will be done to
								guarantee results compared to well-documented scans of proteoforms and Thermo Fisher Scientific's RawMeat and RawTartare products.<br/><br/>

								I will be working on this throughout the fall quarter of my junior year as I continue as a software developer and informatics intern at the Kelleher Research Group.
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(0)}
					>
						<Img
							alt="proteins2"
							src={Images[1]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
							In Progress
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Bottom-Up Proteomics Data Assessment Tool
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[1]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									CAFA-5 Protein Function Prediction
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A creation of machine learning predictive models for CAFA (Critical Assessment of Protein Function Annotation) experiments.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Sep 2023 - Present <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Blazor, WebAssembly, C#, JavaScript, Git
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								Through data from a Kaggle competition, I will be predicting the function of a set of proteins by training models on amino-acid sequences of the proteins and other data. The aim 
								of the project is to better understand the function of proteins based on amino-acid sequences or similar proteins and biological processes. The data was provided from the Critical 
								Assessment of Protein Function Annotation (CAFA) experiment to continue imporving computational annotations of protein function.<br/><br/>

								I am currently in the process of working on this project 
								
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I am currently developing a data quality 
								assessment tool that will be open-source and publicly available for research use. Currently, scans containing data for ensemble mass spectrometry are accessable through .raw files that can only be opened using a Windows operating system. 
								Additionally, existing tools like Thermo Fisher Scientific's RawMeat or RawTartare could lack some of the data quality assessment tables or graphs desired for 
								specific use cases or in analyzing individual scans. <br/><br/>

								To solve for these missing features or use case limitations, I have been building a Blazor WebAssembly application that will accept user uploaded .raw files on
								any operating system and output tabular and graphical visualizations of scan information. Existing libraries created by the Kelleher Research Group in C# will be
								used, in addition to SciChart and some JavaScript to create the actual charts. A Model-View-ViewModel (MVVM) pattern will be implemented and testing will be done to
								guarantee results compared to well-documented scans of proteoforms and Thermo Fisher Scientific's RawMeat and RawTartare products.<br/><br/>

								I will be working on this throughout the fall quarter of my junior year as I continue as a software developer and informatics intern at the Kelleher Research Group.
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(1)}
					>
						<Img
							alt="proteins3"
							src={Images[0]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
							In Progress
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							CAFA-5 Protein Function Prediction
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[3]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Northwestern University Science Olympiad Website
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A publicly available website to house competition information, past competition tests, and sign-up coordination for Northwestern University's Science Olympiad organization.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Aug 2023 - Present <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> JavaScript, CSS, HTML
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
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
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(3)}
					>
						<Img
							alt="scioly"
							src={Images[6]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								In Progress
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Northwestern University Science Olympiad Website
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
						paddingTop: "16px",
						paddingBottom: "16px",
					}}
				/>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[2]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Battery Ventures Internal Company Bidding Tool
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal software tool for investment professionals to browse sourced companies by externs and bid for ownership of future calls and transactions with target companies.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Aug 2023 - Present <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> JavaScript, CSS, HTML, Firebase, Figma
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
							}}
							>
								As a former Battery Ventures sourcing and diligence extern, I was asked to create a prototype of a new internal tool that would allow for investment professionals at the firm across
								any of their 6 offices to bid for ownership of future interactions with target companies sourced by externs. Currently, the sourcing externship consists of up to 40 college student
								externs that gain hands-on experience by sourcing potential companies of interest for future deals that Battery Ventures has yet to discover. However, with 150+ companies sourced each week, 
								a new system to enable other investors to explore and potentially take ownership of outreach and calls with those company CEOs was needed.<br/><br/>

								The internal tool that I created functioned as a silent auction system, where each investor partaking in the system was given an allotted number of points per quarter to use on any company at
								any time (with the person bidding the most each week on a company getting ownership of it). I utilized JavaScript, CSS, and HTML to allow for the uploading of extern sourced company details 
								through a .csv file by an administrator. Then, for the duration of the bidding process, other users could view the current week bids, search companies by metrics, and input their bid amounts. 
								Automated emails were able to be sent out at the beginning of a bidding period to announce the companies and at the end of a bidding period to declare the successful and unsuccessful bids for
								each user. The prototype, along with a Figma mockup and formatted HTML email, were submitted to the development team and leaders of the externship program.<br/><br/>

								Below is a sample image of the prototype landing page for a user. The prototype, Figma mockup, and formatted HTML email can all be found in the GitHub repository linked at the top right (prototype is without proper user authentication, as this was to be implemented 
								at a later date for the final product).<br/><br/>
							</Typography>
							<Img
								src={BatteryTool}
								sx={{ height: "30vw", width: "60vw", pb: "10px" }}
							>
							</Img>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(2)}
					>
						<Img
							alt="battery"
							src={Images[4]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Sep 2023
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Battery Ventures Internal Company Bidding Tool
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				
			</Box>
		</section>
		<section style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px" }}>
			<Box sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				width: calculatedWidth,
				height: calculatedHeight
			}}>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[4]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Fragment Ion Mass Comparison For Ensemble and I2MS
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal project and presentation comparing the mass of matched fragment ions for ensemble vs. I2MS methods.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jul 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> C#
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
							}}
							>
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to further analyze the differences
								in masses amongst matched fragment ions for ensemble and individual ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
								greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis might be needed to see whether the missed fragment ions 
								left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

								To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
								ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
								in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
								where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
								and present in both spectra for I2MS and ensemble.<br/><br/>

								Below is an example of mapping of the exclusive matched fragment ions for pyruvate kinase (58kDa) between I2MS and ensemble methods. C# was utilized for the mapping and analysis of spectra across the 
								entire project. Further add-ons to this project may be completed as I continue working at the Kelleher Research Group as a software development and informatics intern during my junior year. <br/><br/>
							</Typography>
							<Img
								src={I2MSComparison}
								sx={{ height: "30vw", width: "78vw", pb: "10px" }}
							></Img>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(4)}
					>
						<Img
							alt="proteins4"
							src={Images[2]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
							Sep 2023
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
								Fragment Ion Mass Comparison For Ensemble and I2MS
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[5]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									ICR Identifying Age-Related Conditions w/ Machine Learning
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A project to predict age-related medical conditions of anonymous patients based on masked measurements of health characteristics. 
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jun 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Python, Pandas, NumPy, Matplotlib, Optuna, Scikit-learn, Seaborn, Statsmodels
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								Using data from a Kaggle competition and InVitro Cell Research (ICR), I built predictive machine learning models to determine the probability that a patient had one of three age-related medical 
								conditions based on various health characteristics data. Given the current literature connecting age with a number of complications (from heart disease to dementia), bioinformatics and data science 
								can be utilized to intervene earlier if models are able to accurately detect where medical conditions may arise.<br/><br/>

								I used Python and various libraries to initially do exploratory data analysis on 50+ masked health conditions and the binary response variable (presence of age-related health condition or not in patient). 
								Afterwards, I imputed missing values after substantial testing of performance on base models after different imputation methods. I tested the performance of XGBoost, Random Forest, Decision Tree Classifiers, 
								TabPFN, CatBoost, LightGBM, AdaBoost, and Gradient Boosting Classifiers individually and ensembled using both stacking and voting. Optuna trials and cross-validated metrics were used to find ideal hyperparameter 
								values, in addition to different regularization parameters to adjust for overfitting and visualizations of model shortcomings in predicting probabilities of response above or below certain thresholds.<br/><br/>

								The GitHub repository containing the code for the EDA and models can be found in the top right.
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(5)}
					>
						<Img
							alt="proteins5"
							src={Images[5]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Aug 2023
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							ICR Identifying Age-Related Conditions w/ Machine Learning
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[6]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									ALS Metabolomics Top-Down Label-Free Quantification
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal top-down label-free quantification for measurements of metabolites as part of an ALS study.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jun 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Python, R, SAS
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
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
								in all treatments in an easily-interpretable visual. Subsets of metabolites of interest were also highlighted in separate heatmaps. 
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(6)}
					>
						<Img
							alt="proteins3"
							src={Images[3]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Aug 2023
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							ALS Metabolomics Top-Down Label-Free Quantification
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[7]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Vinho Verde Wine Quality Prediction
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal project and presentation comparing the mass of matched fragment ions for ensemble vs. I2MS methods.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jul 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> C#
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to further analyze the differences
								in masses amongst matched fragment ions for ensemble and individual ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
								greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis might be needed to see whether the missed fragment ions 
								left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

								To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
								ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
								in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
								where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
								and present in both spectra for I2MS and ensemble.<br/><br/>

								Below is an example of mapping of the exclusive matched fragment ions for pyruvate kinase (58kDa) between I2MS and ensemble methods. C# was utilized for the mapping and analysis of spectra across the 
								entire project. Further add-ons to this project may be completed as I continue working at the Kelleher Research Group as a software development and informatics intern during my junior year. <br/><br/>
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(7)}
					>
						<Img
							alt="wine"
							src={Images[8]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Jun 2023
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Vinho Verde Wine Quality Prediction
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid black",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
						paddingTop: "16px",
						paddingBottom: "16px",
					}}
				/>
			</Box>
		</section>
		<section style={{ display: "flex", paddingLeft: "24px", paddingRight: "24px" }}>
			<Box sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				width: calculatedWidth,
				height: calculatedHeight
			}}>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[8]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Uber & Lyft Ride Price Prediction
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal project and presentation comparing the mass of matched fragment ions for ensemble vs. I2MS methods.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jul 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> C#
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to further analyze the differences
								in masses amongst matched fragment ions for ensemble and individual ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
								greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis might be needed to see whether the missed fragment ions 
								left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

								To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
								ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
								in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
								where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
								and present in both spectra for I2MS and ensemble.<br/><br/>

								Below is an example of mapping of the exclusive matched fragment ions for pyruvate kinase (58kDa) between I2MS and ensemble methods. C# was utilized for the mapping and analysis of spectra across the 
								entire project. Further add-ons to this project may be completed as I continue working at the Kelleher Research Group as a software development and informatics intern during my junior year. <br/><br/>
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(8)}
					>
						<Img
							alt="uber"
							src={Images[9]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Mar 2023
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Uber & Lyft Ride Price Prediction
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid transparent",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[9]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Science Olympiad Testing Autograder w/ Machine Learning
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal project and presentation comparing the mass of matched fragment ions for ensemble vs. I2MS methods.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jul 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> C#
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to further analyze the differences
								in masses amongst matched fragment ions for ensemble and individual ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
								greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis might be needed to see whether the missed fragment ions 
								left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

								To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
								ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
								in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
								where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
								and present in both spectra for I2MS and ensemble.<br/><br/>

								Below is an example of mapping of the exclusive matched fragment ions for pyruvate kinase (58kDa) between I2MS and ensemble methods. C# was utilized for the mapping and analysis of spectra across the 
								entire project. Further add-ons to this project may be completed as I continue working at the Kelleher Research Group as a software development and informatics intern during my junior year. <br/><br/>
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(9)}
					>
						<Img
							alt="science1"
							src={Images[7]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Feb 2023
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Science Olympiad Testing Autograder w/ Machine Learning
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid transparent",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[10]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Yelp Restaurant Review Data Analysis
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal project and presentation comparing the mass of matched fragment ions for ensemble vs. I2MS methods.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jul 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> C#
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to further analyze the differences
								in masses amongst matched fragment ions for ensemble and individual ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
								greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis might be needed to see whether the missed fragment ions 
								left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

								To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
								ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
								in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
								where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
								and present in both spectra for I2MS and ensemble.<br/><br/>

								Below is an example of mapping of the exclusive matched fragment ions for pyruvate kinase (58kDa) between I2MS and ensemble methods. C# was utilized for the mapping and analysis of spectra across the 
								entire project. Further add-ons to this project may be completed as I continue working at the Kelleher Research Group as a software development and informatics intern during my junior year. <br/><br/>
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(10)}
					>
						<Img
							alt="yelp"
							src={Images[11]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Dec 2022
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Yelp Restaurant Review Data Analysis
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid transparent",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
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
					width: calculatedHeight,
					height: calculatedHeight,
					paddingRight: "16px",
				}}>
					<div
						style={{
							borderTop: "1.5px solid transparent",
							paddingBottom: "16px",
							width: smallerCalculatedWidth
						}}
					/>
					<Dialog
						fullWidth
						maxWidth={"lg"}
						open={open[11]}
						onClose={handleClose}
						PaperProps={{
							sx: {
							  minHeight: "80vh",
							  maxHeight: "80vh",
							  backgroundColor: "#fbf7f0"
							}
						  }}
					>
						<Box sx={{
							display: "flex",
							flexDirection: "column",
							height: "100%"
						}}>
							<div
								style={{
									position: "sticky",
									top: 0,
									backgroundColor: "#fbf7f0",
									zIndex: 3,
								}}
							>
							<Box sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								padding: "10px"
							}}>
								<Typography
									sx={{
										fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
										fontWeight: 600,
										color: "#356760",
										px: "10px",
										fontSize: "36px"
									}}
								>
									Two-Player Chess
								</Typography>
								<ImgNoMargin
									src={GitHub}
									sx={{ height: "50px", width: "50px" }}
								/>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal project and presentation comparing the mass of matched fragment ions for ensemble vs. I2MS methods.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jul 2023 - Aug 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> C#
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
							</div>
							<Typography
							sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								color: "#190019",
								fontSize: "18px",
								px: "20px",
								pt: "15px",
								pb: "10px"
							}}
							>
								As part of the Kelleher Research Group at Northwestern University's Proteomics Center of Excellence, I completed an internal project to further analyze the differences
								in masses amongst matched fragment ions for ensemble and individual ion mass spectrometry (I2MS) methods. Current literature shows that I2MS methods can provide a far 
								greater ability to detect high mass fragment ions than traditional mass spectrometry methods. However, further analysis might be needed to see whether the missed fragment ions 
								left undetected by I2MS methods are actually of interest and visible in individual scans.<br/><br/>

								To this end, I analyzed myoglobin (17kDa), carbonic anhydrase (29kDa), and pyruvate kinase (58kDa) scans from both ensemble and I2MS methods using ASCs. The matched fragment 
								ions resulting from running the ASCs on scans were then compared for which ions were exclusive to each of the two methods. Those exclusive ions were then mapped to see the differences 
								in presence of low mass and high mass ions, in addition to their appearance on spectra. Ultimately, it was discovered that in all three proteins, there were exclusive matched fragment ions, 
								where the number of exclusive matched fragment ions increased with the mass of the proteins. It appeared that the ions missing in the I2MS method, which were lower mass ions, were actually missed 
								and present in both spectra for I2MS and ensemble.<br/><br/>

								Below is an example of mapping of the exclusive matched fragment ions for pyruvate kinase (58kDa) between I2MS and ensemble methods. C# was utilized for the mapping and analysis of spectra across the 
								entire project. Further add-ons to this project may be completed as I continue working at the Kelleher Research Group as a software development and informatics intern during my junior year. <br/><br/>
							</Typography>
						</Box>
					</Dialog>
					<Box
						sx={{
							height: smallerCalculatedWidth,
							width: smallerCalculatedWidth,
							position: 'relative',
							cursor: "pointer",
							transition: "box-shadow 0.3s",
							'&:hover': {
								boxShadow: "0 0 32px #356760", 
							}
						}}
						onClick={() => handleClickOpen(11)}
					>
						<Img
							alt="chess"
							src={Images[10]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							justifyContent: "flex-start", 
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 16, 
								marginRight: "8px",
								marginLeft: "8px",
								marginTop: "8px"
							}}
							>
								Jun 2022
							</Typography>
						</div>
						<div
							style={{
							zIndex: 1,
							background: "transparent",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							width: "90%",
							}}
						>
							<Typography
							sx={{
								fontFamily:
								'"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 600,
								color: "white",
								fontSize: 24,
								lineHeight: 1.25
							}}
							>
							Two-Player Chess
							</Typography>
						</div>
					</Box>
					<div
						style={{
							borderBottom: "1.5px solid transparent",
							paddingTop: "16px",
							width: smallerCalculatedWidth
						}}
					/>
				</Box>
				<div
					style={{
						borderLeft: "1.5px solid black",
						height: smallerCalculatedWidth,
						paddingTop: "16px",
						paddingBottom: "16px",
					}}
				/>
			</Box>
		</section>
		</>
	);
};
