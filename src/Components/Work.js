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
							  minHeight: "50vh",
							  maxHeight: "68vh",
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
								px: "10px",
								pt: "10px",
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
									Northwestern Proteomics Center of Excellence
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "24px",
								px: "20px",
								fontStyle: "italic"
							}}>
								Informatics and Software Engineering Intern
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "10px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jun 2023 - Present
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
								pt: "10px",
							}}
							>
								After joining the Northwestern Proteomics Center of Excellence with the Kelleher Research Group in June 2023 as a informatics and software engineering intern, 
								I will be continuing in these roles as I begin my junior year working on new projects surrounding mass spectrometry, proteomics, and data analysis.
								<br/>
								<ul>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Implemented composite spectrum creation project for the Kelleher Research Group using C#, F#, and .NET framework to optimize ASC and AIM-based proteoform discovery on multiple spectral outputs from individual ion mass spectrometry</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Conducted statistical analyses with custom Python, R, and SAS scripts for external collaborators, including top-down, label-free quantification using hierarchical linear model-based ANOVA to identify differentially expressed proteoforms and metabolites</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Currently creating a data quality assessment tool for displaying tabular and graphical representations of mass spectrometry scan data using a Model-View-ViewModel (MVVM) framework in Blazor WebAssembly and C#</span>
									</li>
								</ul>
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
							  minHeight: "50vh",
							  maxHeight: "68vh",
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
								px: "10px",
								pt: "10px",
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
									Battery Ventures
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "24px",
								px: "20px",
								fontStyle: "italic"
							}}>
								Analyst Sourcing and Diligence Extern & Freelance Software Developer
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "10px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jan 2023 - Present
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
								pt: "10px",
							}}
							>
								In January 2023, I joined Battery Ventures ($13B AUM) as an analyst sourcing extern to find target B2B SaaS companies, and in May 2023, I transitioned to being an
								analyst diligence extern to complete a months-long project on the broadcasting software space. I am now continuing as an analyst leadership extern to assist current students in the 
								program and am working on an internal tool as a freelance software developer. 
								<br/>
								<ul>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Sourced and led deal due-diligence for potential minority investments in early-stage and growth-stage B2B SaaS companies, with focuses on 
										systems of collaboration, vertical operating systems, and marketplaces</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Developed the investment thesis and pitched potential investment opportunities to Battery Ventures senior leadership surrounding the Internet and non-Internet 
										broadcasting and media software space</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Led discussions with company CEOs, built market maps of competitive landscapes, analyzed potential investments with Battery Ventures analysts, and drove financial due-diligence 
										of key SaaS metrics</span>
									</li>
								</ul>
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
							  minHeight: "50vh",
							  maxHeight: "68vh",
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
								px: "10px",
								pt: "10px",
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
									Inbound
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "24px",
								px: "20px",
								fontStyle: "italic"
							}}>
								Software Engineer and Growth Associate
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "10px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Aug 2022 - Jun 2023
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
								pt: "10px",
							}}
							>
								I joined Inbound, a university student recruiting platform connecting student organizations with company internships, in August 2022 as a growth associate. I led student outreach efforts 
								over several months before taking on an additional role as a software engineer, where I contributed to building and refactoring the student and employer portals ahead of planned onboarding 
								of global student users.
								<br/>
								<ul>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Collaborated in agile software development environment to create a university student recruiting platform for finance and consulting 
										internships with distinct student and employer portals</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Handled initial platform refactoring using JavaScript, React, and Firebase, with a specific focus on recruiter
										accounts and student group creation to handle impending expansion to new university systems and firms</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Created go-to-market plans for gaining student users with verbal commitments from 21+ universities across U.S., Europe, and Asia with 300+ student users 
										and 25 recruiters onboarded, including Blackstone, Deloitte, Mastercard, and PepsiCo</span>
									</li>
								</ul>
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
							  minHeight: "50vh",
							  maxHeight: "68vh",
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
								px: "10px",
								pt: "10px",
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
									Bastiat Partners
								</Typography>
							</Box>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "24px",
								px: "20px",
								fontStyle: "italic"
							}}>
								Investment Banking Summer Analyst
							</Typography>
							<Typography sx={{
								fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
								fontWeight: 500,
								fontSize: "18px",
								px: "20px",
								py: "10px"
							}}>
								<span style={{ fontWeight: "bold" }}>Duration:</span> Jun 2022 - Sep 2022
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
								pt: "10px",
							}}
							>
								In June 2022, I joined Bastiat Partners as an investment banking summer analyst to focus on advising seed through Series C companies on venture capital raises. I joined calls with 
								startup CEOs to discuss prospective and active primary opportunities across various tech-enabled SaaS verticals and led sourcing efforts to identify target private companies in need 
								of assistance given macroeconomic conditions.
								<br/>
								<ul>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}> Advised fast-growing, early-stage private company clients on seed through Series C rounds for investment banking venture capital raises, 
										with a concentration on differentiated, well-positioned technology companies</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Facilitated competitive operational benchmarking, valuation analyses, holistic marketing materials preparation, and process tracking for active and prospective 
										primary, co-investment, and secondary opportunities</span>
									</li>
									<br/>
									<li style={{ color: "#356760" }}>
										<span style={{ color: "#190019" }}>Conducted sourcing to identify target early-stage private cybersecurity, cloud computing, and machine learning/artificial intelligence SaaS technology companies 
										likely in need of advisory firm assistance for their next round capital raise</span>
									</li>
								</ul>
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
