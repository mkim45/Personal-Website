import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaPlus } from 'react-icons/fa';

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const Projects = ({calculatedWidth, calculatedHeight, smallerCalculatedWidth, Images}) => {
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
								AIM-Based Discovery Fragment Ion Mass Comparison For Ensemble and I2MS
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
							Science Olympiad Test Autograder w/ Machine Learning
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
		</>
	);
};

export default Projects;
