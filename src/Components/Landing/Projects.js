import React from "react";
import { Box, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { styled } from "@mui/material/styles";
import GitHub from "./GitHub.png";

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
								<span style={{ fontWeight: "bold" }}>Duration:</span> Sep 2023 - Present <span style={{ fontWeight: "bold", marginLeft: "16px" }}>Technologies Used:</span> Blazor, WebAssembly, C#, JavaScript
							</Typography>
							<div style={{
								borderBottom: "1.5px solid black",
								marginLeft: "14px",
								marginRight: "14px",
								width: `calc(100% - 28px)`
							}} />
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
