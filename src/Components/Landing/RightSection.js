import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	//	maxWidth: {md: '300px', lg: '600px'}
});

const RightSection = (props) => {
	return (
		<Box
			className
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Grid
				container
				spacing={6}
				sx={{
					display: "flex",
					flexWrap: "wrap-reverse",
					alignItems: "center",
					justifyContent: "center",
					maxWidth: { xs: "475px", sm: "600px", md: "1300px", lg: "1300px" },
					gap: { xs: "0px", sm: "0px", lg: "100px" },
					textAlign: "right",
				}}>
				<Grid item xs={12} md={6}>
					<Typography
						variant='h5'
						fontWeight={550}
						sx={{
							paddingBottom: "15px",
						}}>
						{props.mainText[0]}{" "}
						<span style={{ color: "#482fd7" }}>{props.mainText[1]}</span>{" "}
						{props.mainText[2]}{" "}
						<span style={{ color: "#482fd7" }}>{props.mainText[3]}</span>{" "}
						{props.mainText[4]}
					</Typography>

					<Typography
						sx={{
							opacity: "0.7",
							paddingBottom: "30px",
							fontSize: "18px",
						}}>
						{props.bodyText}
					</Typography>
				</Grid>
				<Grid item xs={12} md={5}>
					<Img
						src={props.image}
						alt='Temp'
						sx={{
							maxHeight: "375px",
							maxWidth: "450px",
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default RightSection;
