import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Logo from "../images/Logo.png";

const Footer = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				paddingBottom: "50px",
			}}>
			<Grid
				container
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Grid item xs={6}>
					<img src={Logo} alt='inbound'></img>
					<Typography
						variant='h5'
						fontWeight={550}
						sx={{
							paddingBottom: "15px",
							textAlign: "left",
							fontSize: "16px",
						}}>
						Inbound
					</Typography>
					<Typography
						sx={{
							opacity: "0.7",
							fontSize: "14px",
							textAlign: "left",
						}}>
						INBOUND CAREERS INC
					</Typography>
					<Typography
						sx={{
							opacity: "0.7",
							fontSize: "14px",
							textAlign: "left",
						}}>
						Delaware C Corp
					</Typography>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={6}
				sx={{
					display: "flex",
					justifyContent: "center",
				}}>
				<Grid item xs={6}>
					<Typography
						variant='h5'
						sx={{
							paddingBottom: "15px",
							textAlign: "left",
							fontSize: "16px",
						}}>
						Company
					</Typography>
					<Typography
						sx={{
							opacity: "0.7",
							fontSize: "14px",
							textAlign: "left",
							color: "#482fd7",
						}}>
						<a
							style={{ textDecoration: "none", color: "#482fd7" }}
							href='https://www.linkedin.com/company/inbound-careers/about/'
							target='_blank'
							rel='noopener noreferrer'>
							Linkedin
						</a>
					</Typography>
					<Typography
						sx={{
							opacity: "0.7",
							fontSize: "14px",
							textAlign: "left",
							color: "#482fd7",
						}}>
						<a
							style={{ textDecoration: "none", color: "#482fd7" }}
							href='mailto:han@joininbound.com'
							target='_blank'
							rel='noopener noreferrer'>
							{" "}
							Contact
						</a>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
