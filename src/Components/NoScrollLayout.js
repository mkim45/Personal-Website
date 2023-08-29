import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Navbar from "./Navbar";

const link = window.location.pathname;
const loginAttempt = link === "/signin" || link === "/signup" || link === "/";

class NoScrollLayout extends React.Component {
	constructor(props) {
		super(props);
		this.accessGranted = this.props.currentUser !== null || loginAttempt;
	}

	async componentDidMount() {
		if (this.props.currentUser == null && !loginAttempt) {
			this.props.navigate("/signin");
		}
	}

	render() {
		if (this.accessGranted) {
			return (
				<div className='container'>
					<div style={{ height: 64 }}></div>
					<Stack spacing={2} sx = {{
						height: '100vh',
						overflowY: "hidden",
					}}>
						<Navbar />
						<Box>
							<Outlet />
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								sx={{
									width: "90%",
								}}></Box>
						</Box>
					</Stack>
				</div>
			);
		} else {
			console.log("access not granted");
		}
	}
}

export default function (props) {
	const navigate = useNavigate();

	return (
		<NoScrollLayout {...props} navigate={navigate} />
	);
}

// export default DefaultLayout;
