import React from "react";
import { Grid, Typography, Button, Box, Stack } from "@mui/material";
import hero from "./Hero.png";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	//	maxWidth: {md: '300px', lg: '600px'}
});

const Hero = () => {
	const navigate = useNavigate();

	const navigateNext = () => {
		navigate("/signup", { replace: true });
	};

	const navigateRegister = () => {
		window.open("https://forms.gle/9Pgy9vX3saK38N239");
	};

	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				minHeight: "600px",
				alignItems: "center",
				justifyContent: "center",
				//backgroundImage: `url(${Image})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<Grid
				container
				spacing={6}
				sx={{
					display: "flex",
					alignItems: "center",
					maxWidth: "1300px",
					padding: "50px",
				}}>
				<Grid item xs={12} md={7}>
					<Typography variant='h6'>
						For recruiters, visit{" "}
						<a
							style={{ color: "#482fd7" }}
							href='https://recruiter.joininbound.com'
							target='_blank'
							rel='noopener noreferrer'>
							<span style={{ color: "#482fd7" }}>
								recruiter.joininbound.com
							</span>
						</a>
					</Typography>
					<Typography
						variant='h3'
						fontWeight={700}
						sx={{
							paddingBottom: "15px",
						}}>
						The talent platform for{" "}
						<span style={{ color: "#482fd7" }}>
							university student groups.
						</span>
					</Typography>
					<Typography
						variant='h6'
						sx={{
							opacity: "0.4",
							paddingBottom: "30px",
						}}>
						Inbound connects employers with university talent through
						groups like professional clubs, competitive teams, and academic societies.
					</Typography>
					<Stack direction={{xs: "column", sm: "row"}} spacing={2}>
						<Button
							onClick={navigateNext}
							variant='contained'
							color='primary'
							sx={{ width: "200px", fontSize: "16px" }}>
							Sign Up
						</Button>
						<Button onClick={navigateRegister}
							variant="contained"
							color="primary"
							sx={{ width: '300px', fontSize: '16px' }}
						>
							Register Your Student Group
						</Button>
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={1}
					sx={{
						display: { xs: "none", md: "inline", lg: "inline" },
					}}>
					<Img
						src={hero}
						alt='hero'
						sx={{
							width: { md: "400px", lg: "600px" },
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Hero;
