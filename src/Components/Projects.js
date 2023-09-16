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
									RNA Folding Structure Prediction
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A creation of machine learning predictive models for reactivity of RNA sequences to chemical modifiers.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Sep 2023 - Present <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Python, Keras, PyTorch, TensorFlow, Optuna, Scikit-learn, Statsmodels
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
								Through data from a Kaggle competition, I will be predicting the reactivity of an RNA sequence to two chemical modifiers, DMS and 2A3. Models with accurate RNA structure prediction can be leveraged 
								to predictively design RNA-based medicines or deepen understandings of RNA molecules that underlie biological processes. The dataset contains data that is measured through a mutational profiling (MaP) experiment 
								read out by high-throughput sequencing, knowing that positions protected from chemical modification are likely to form base pairs or other kinds of RNA structure.<br/><br/>
								
								I will be utilizing 800,000+ sequences to train predictive machine learning models to get target reactivities for each seequence position for both of the chemical modifiers. MAE will be used to determine 
								performance of the models comparing actual and predicted values for 1M+ experimentally-synthesized sequences. Additional sequence libraries may be utilized to inform training of the model, along with open knot 
								sequences and knot metadata.<br/><br/>
								
								The actual model that is trained for prediction will likely use PyTorch and other machine learning or deep learning libraries in Python and will be the product of optimizing 
								hyperparameters to minimize cross-validated MAE while preventing overfitting to the train data.<br/><br/>

								I am currently in the process of working on this project and will update this with my GitHub repository at completion.
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
							RNA Folding Structure Prediction
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

								Below is a sample image of the prototype landing page for a user. The prototype, Figma mockup, and formatted HTML email are in the process of being completed and will all be found in a GitHub 
								repository linked in the future. <br/><br/>
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
				<div
					style={{
						borderRight: "1.5px solid black",
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
								<a href="https://github.com/mkim45/ICR-Age" target="_blank" rel="noopener noreferrer">
									<ImgNoMargin
										src={GitHub}
										sx={{ height: "50px", width: "50px" }}
									/>
								</a>
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
								<a href="https://github.com/mkim45/Wine-Prediction" target="_blank" rel="noopener noreferrer">
									<ImgNoMargin
										src={GitHub}
										sx={{ height: "50px", width: "50px" }}
									/>
								</a>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A project to predict the quality of Vinho Verde red and white wines with predictive machine learning models.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Apr 2023 - Jun 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Python, Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn, Statsmodels
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
								As part of the final coursework for Northwestern University's STAT_303-3 Data Science in Python course, I completed a project to predict the quality of Vinho Verde red and white wines 
								using various models as part of a four-person team. Wine quality was measured as a discrete response variable on a scale of 0-10, with 11 predictor variables based on physicochemical 
								properties of wines being used from samples to train our models. We attempted to minimize MAE to attempt to predict quality within the margin of rounding up or down to the nearest integer value.<br/><br/>

								To begin with, stratified splitting of data was done with respect to wine quality to obtain training and testing data at similar distributions to the overall dataset for response variables. MARS, Bagged 
								Decision Trees, Random Forest, and XGBoost models were used to test individual model performance in reducing MAE beyond naive methods. Fine tuning of hyperparameters was done for all four of these models 
								to minimize cross-validated MAE. Afterwards, the four individual models were ensembled using various methods, including voting ensemble and stacking ensemble with different metamodels. Further attempts at creating 
								ensembles of ensembled models with different metamodels was conducted. However, the best model ended up being the fine-tuned voting ensemble, with a test MAE of 0.35 being within the desired range to predict 
								wine quality within the margin of rounding.<br/><br/>

								The GitHub repository containing the code and report writeup can be found in the top right.
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
								<a href="https://github.com/mkim45/Uber-Lyft-Ride-Price-Prediction" target="_blank" rel="noopener noreferrer">
									<ImgNoMargin
										src={GitHub}
										sx={{ height: "50px", width: "50px" }}
									/>
								</a>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A project to predict the prices of Uber and Lyft rides in the greater Boston area.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jan 2023 - Mar 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Python, Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn, Statsmodels
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
								As part of the final coursework for Northwestern University's STAT_303-2 Data Science in Python course, I completed a project to predict the price of Uber and Lyft rides in the greater Boston 
								area using various models as part of a four-person team. Predictor variables were ride factors that included the distance of the trip, time of the ride, the weather, and destination. Further analysis was done 
								to determine which predictors had the largest impact on price and any statistically significant associations of interest.<br/><br/>

								To begin with, we did exploratory data analysis (EDA) and examined the distributions of the predictors and response variable, in addition to examining the dataset for missing values. The naive simple linear regression model 
								was used as a basis of comparison, with an RMSE of approximately $3.06. Transformations were then applied, including a non-linear relationship between distance and price that was included through a log transformation. Two-factor 
								interactions and variable selection were considered through forward stepwise selection (method was chosen due to computational costs of handling 171 predictors). 
								This final model yielded an RMSE of approximately $2.69, with subsequent analysis being done to handle potential outliers or influential points that might impact the final linear regression model. Ridge regression and lasso regression 
								was also considered, however, the forward stepwise selection yielded the best model that was not overfitting to the train data. Multicollinearity was addressed through VIF values and autocorrelation was also factored into our analysis.<br/><br/>
						
								The GitHub repository containing the code and report writeup can be found in the top right.
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
									Science Olympiad Testing Autograder
								</Typography>
								<a href="https://github.com/mkim45/Science-Olympiad-Autograder" target="_blank" rel="noopener noreferrer">
									<ImgNoMargin
										src={GitHub}
										sx={{ height: "50px", width: "50px" }}
									/>
								</a>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								An internal test autograding tool built using CNNs for Northwestern University's Science Olympiad Invitational to supplement grading for specific events.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Dec 2022 - Feb 2023 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Python, Keras, Scikit-learn, Pandas, TensorFlow, NumPy
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
								As the technology director for the Northwestern University Science Olympiad organization, I created a project for the February 2023 Invitational to autograde tests of certain events based off of the answer key to help in 
								supplementing the manual grading efforts. Additionally, there is potential for certain events using multiple choice or simple fill in the blank questions to use a new version of this autograder in future competitions to 
								reduce the amount of time needed to complete grading ahead of announcing results.<br/><br/>

								The project uses Python and many machine learning and deep learning libraries to train a CNN to recognize digits from student answer sheets for a single event, Fermi Questions. In this event, students write integer values as 
								responses and are graded based on their proximity to the actual answer. To start, the student answer sheet was taken as input files and segmented to highlight the different boxes containing answers for each question. The digits were 
								then able to be extracted from this and predicted using the model trained on MNIST digit datasets to output the predicted integer value they represent. The model had a test accuracy of over 99% and performed well on test day with no 
								recorded errors compared to the manual grading efforts. Although the model was not used for official grading purposes, this may change in future events.<br/><br/>

								The GitHub repository containing the code can be found in the top right (however, the code is currently being updated and changed to prepare for the upcoming 2024 Invitational, which may result in some parts not being functional).
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
							Science Olympiad Testing Autograder
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
								<a href="https://github.com/mkim45/Yelp-Analysis" target="_blank" rel="noopener noreferrer">
									<ImgNoMargin
										src={GitHub}
										sx={{ height: "50px", width: "50px" }}
									/>
								</a>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A project for data analysis of Yelp reviews across different metropolitan areas.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Oct 2022 - Dec 2022 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used: </span>Python, Pandas, NumPy, Matplotlib, Scikit-learn, Seaborn, Statsmodels
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
								As part of the final coursework for Northwestern University's STAT_303-1 Data Science in Python course, I completed a project to analyze Yelp reviews across 11 metropolitan areas. Different variables surrounding restaurant attributes (ratings, 
								review counts, categories, status, etc.) and user account information (review counts, average stars given, and profile compliements) were used to find significant associations of interest and answer questions related to Yelper behavior and whether 
								Yelp ratings were strongly correlated with a business's status as open or closed. Further, we wanted to use U.S. Census data to analyze whether ratings varied by demographics of different regions in metropolitan areas.<br/><br/>

								To begin with, we cleaned the data of outliers to hone in on the 11 metropolitan areas of interest and grouped categorical variables for more interpretable results from analysis. We segmented the restaurants by types to get a better understanding of 
								what restaurants and businesses populated the dataset. Further, we found that associations did exist between a business's open/closed status and the parking they offered, in addition to the total hours that they were opened and the stars they were given. 
								Analyzing the demographics of different zip codes in these metropolitan areas yielded that mean household income and the proportion of population that was White had moderate, positive correlations with the average number of stars for businesses in a region. Lastly, 
								analysis of user behavior was done to reveal that as the number of reviews written by users increases, on average, the number of five star reviews and higher rated reviews written decreases.<br/><br/>
						
								The GitHub repository containing the code and report writeup can be found in the top right.
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
								<a href="https://github.com/mkim45/Chess" target="_blank" rel="noopener noreferrer">
									<ImgNoMargin
										src={GitHub}
										sx={{ height: "50px", width: "50px" }}
									/>
								</a>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px"
							}}>
								A two-player chess game created using C++ as part of final coursework.
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "5px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> May 2022 - Jun 2022 <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> C++
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
								As a part of final coursework for Northwestern University's COMP_SCI 211 Fundamentals of Computer Programming II, I created a two-player simplified game of chess adhering to most 
								standard rules as part of a two-person team.<br/><br/>
								
								The gameplay consists of standard pieces on an 8x8 board with alternating moves, starting with the player with white pieces. All of the 
								functionalities of possible move sets are allowed for all pieces, except for two exceptions: castling and promotions. Castling is not implemented and for pawn promotions, they were 
								automatically promoted to queens, rather than giving users decisions for which piece to promote to. Gameplay automatically is planned to 
								end when checkmate or a draw is detected and occurs.<br/><br/>

								The project was created using C++ and consists of an interactive GUI using a Model-View-Controller architectural pattern. The view contained the sprites, functions, and board layout shown 
								to the user and displays move changes accordingly. The model contains details on how gameplay should work, the rules of the game, movement of pieces, the interactions between pieces, the setup 
								of the board, and how gameplay and moves should end. The controller controls detection of user inputs of mouse clicks and mouse movements, with additional supplementing files being used to define 
								other classes or unit tests for edge cases of gameplay functions.<br/><br/>

								The GitHub repository containing the code for the project can be found in the top right.
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
