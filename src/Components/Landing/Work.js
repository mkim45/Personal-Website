import React from "react";
import { Box, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { styled } from "@mui/material/styles";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

export default function Work({calculatedWidth, calculatedHeight, smallerCalculatedWidth, Images}) {
	const [open, setOpen] = React.useState([false, false, false, false]);

	const handleClickOpen = (index) => {
		const updatedOpen = [false, false, false, false];
		updatedOpen[index] = true;
		setOpen(updatedOpen);
	};
	  
	const handleClose = () => {
		setOpen([false, false, false, false]);
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
								borderBottom: "1.5px solid transparent",
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
							alt="proteomics"
							src={Images[0]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
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
								borderBottom: "1.5px solid transparent",
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
							alt="battery"
							src={Images[1]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
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
								borderBottom: "1.5px solid transparent",
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
							alt="inbound"
							src={Images[2]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
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
								borderBottom: "1.5px solid transparent",
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
								repository linked in the future. 
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
						onClick={() => handleClickOpen(2)}
					>
						<Img
							alt="bastiat"
							src={Images[3]}
							sx={{ height: smallerCalculatedWidth, width: smallerCalculatedWidth }}
						/>
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
						borderRight: "1.5px solid black",
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
