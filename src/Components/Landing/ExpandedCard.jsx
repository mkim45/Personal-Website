// import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
// import {
// 	Paper,
// 	Box,
// 	Button,
// 	Dialog,
// 	DialogTitle,
// 	DialogContent,
// 	DialogContentText,
// 	DialogActions,
// } from "@mui/material";
// import HoverMenu from "./HoverMenu";
// import React, { useState } from "react";
// import PostedToIcons from "./PostedToIcons";
// import { useNavigate } from "react-router-dom";

// function shortenLocations(locationArray) {
// 	let arrLength = locationArray.length;
// 	let leftover = arrLength - 1;
// 	let text;
// 	if (leftover > 0) {
// 		text = `${locationArray[0]} + ${leftover} more`;
// 	} else {
// 		text = `${locationArray[0]}`;
// 	}

// 	return <HoverMenu text={text} options={locationArray} />;
// }

// function timeSince(date) {
// 	var seconds = Math.floor((new Date() - date) / 1000);
// 	var interval = seconds / 31536000;
// 	if (interval > 1) {
// 		return (
// 			Math.floor(interval) + " year" + (Math.floor(interval) > 1 ? "s" : "")
// 		);
// 	}
// 	interval = seconds / 2592000;
// 	if (interval > 1) {
// 		return (
// 			Math.floor(interval) + " month" + (Math.floor(interval) > 1 ? "s" : "")
// 		);
// 	}
// 	interval = seconds / 86400;
// 	if (interval > 1) {
// 		return (
// 			Math.floor(interval) + " day" + (Math.floor(interval) > 1 ? "s" : "")
// 		);
// 	}
// 	interval = seconds / 3600;
// 	if (interval > 1) {
// 		return (
// 			Math.floor(interval) + " hour" + (Math.floor(interval) > 1 ? "s" : "")
// 		);
// 	}
// 	interval = seconds / 60;
// 	if (interval > 1) {
// 		return (
// 			Math.floor(interval) + " minute" + (Math.floor(interval) > 1 ? "s" : "")
// 		);
// 	}
// 	return (
// 		Math.floor(seconds) + " second" + (Math.floor(interval) > 1 ? "s" : "")
// 	);
// }

// const Img = styled("img")({
// 	margin: "auto",
// 	display: "block",
// 	maxHeight: "100%",
// });

// const ExpandedCard = ({ listing }) => {
// 	const [open, setOpen] = useState(false);
// 	const locations = listing.locations;
// 	const timeAgo = timeSince(listing.date_created);
// 	const deadline = listing.date_deadline.toLocaleString([], {
// 		dateStyle: "short",
// 		timeStyle: "short",
// 	});
// 	const navigate = useNavigate();
// 	const handleEdit = () => {
// 		navigate("/postOpportunity/details", {
// 			state: { postId: listing.id },
// 		});
// 	};
// 	const handleDelete = () => {
// 		deletePost(listing.id);
// 		handleClose();
// 	};

// 	const handleDeleteDialog = () => {
// 		setOpen(true);
// 	};
// 	const handleClose = () => {
// 		setOpen(false);
// 	};

// 	if (listing.id === "DZWSNKVFOc8M9ugmeEHJ") {
// 		return (
// 			<Paper
// 				elevation={3}
// 				sx={{
// 					p: "40px",
// 					m: "10px",
// 					borderRadius: "40px",
// 					maxHeight: {sm: "600px", md: "700px", lg: "800px"},
// 					display: { xs: "none", md: "block" },
// 				}}>
// 				<Box sx={{ display: "flex", mb: 2 }}>
// 					<Box component='span'>
// 						<Img
// 							alt={listing}
// 							src={listing.image}
// 							sx={{ width: 108, height: 108, borderRadius: "12px" }}
// 						/>
// 					</Box>
// 					<Box
// 						component='span'
// 						textAlign={"left"}
// 						sx={{ flexGrow: 1, ml: "20px" }}>
// 						<Typography variant='h5' fontWeight={"medium"}>
// 							{listing.title}
// 						</Typography>
// 						<Typography variant='h6' fontWeight={"regular"}>
// 							{listing.company}
// 						</Typography>
// 						{locations}
// 					</Box>
// 					<Box
// 						component='span'
// 						textAlign={"right"}
// 						sx={{ alignSelf: "flex-end" }}>
// 						<Typography variant='body1' fontWeight={"medium"}></Typography>
// 						<Button variant='contained' href={listing.link} target='_blank'>
// 							Learn More
// 						</Button>
// 					</Box>
// 				</Box>
// 				<Box textAlign={"left"} sx={{ mb: 2 }}>
// 					<Typography
// 						textAlign={"left"}
// 						gutterBottom
// 						variant='body2'
// 						sx={{ fontSize: "1rem" }}></Typography>
// 				</Box>
// 				<Box textAlign={"left"} sx={{ mb: 2 }}>
// 					<Typography variant='h6' fontWeight={"medium"}>
// 						About Us
// 					</Typography>
// 					<Typography variant='body2'>{listing.description}</Typography>
// 				</Box>
// 				<Box textAlign={"left"} sx={{ mb: 2 }}>
// 					<Typography variant='h6' fontWeight={"medium"}>
// 						Posted To
// 					</Typography>
// 					<PostedToIcons clubs={listing.clubs} />
// 				</Box>
// 			</Paper>
// 		);
// 	}
// 	return (
// 		<Paper
// 			elevation={3}
// 			sx={{
// 				p: "40px",
// 				m: "10px",
// 				borderRadius: "40px",
// 				maxHeight: {sm: "600px", md: "700px", lg: "800px"},
// 				flexGrow: "1",
// 				display: { xs: "none", md: "block" },
// 			}}>
// 			<Box sx={{ display: "flex", mb: 2 }}>
// 				<Box component='span'>
// 					<Img
// 						alt={listing}
// 						src={listing.image}
// 						sx={{ width: 108, height: 108, borderRadius: "12px" }}
// 					/>
// 				</Box>
// 				<Box
// 					component='span'
// 					textAlign={"left"}
// 					sx={{ flexGrow: 1, ml: "20px" }}>
// 					<Typography variant='h5' fontWeight={"medium"}>
// 						{listing.title}
// 					</Typography>
// 					<Typography variant='h6' fontWeight={"regular"}>
// 						{listing.company}
// 					</Typography>
// 					{locations}
// 				</Box>
// 				<Box
// 					component='span'
// 					textAlign={"right"}
// 					sx={{ alignSelf: "flex-end" }}>
// 					<Typography variant='body1' fontWeight={"medium"}>
// 						{`Posted ${timeAgo} ago`}
// 					</Typography>
// 					<Button variant='contained' href={listing.link} target='_blank'>
// 						Apply
// 					</Button>
// 				</Box>
// 			</Box>
// 			<Box textAlign={"left"} sx={{ mb: 2 }}>
// 				<Typography
// 					textAlign={"left"}
// 					gutterBottom
// 					variant='body2'
// 					sx={{ fontSize: "1rem" }}>
// 					Application Deadline: <b>{deadline}</b>
// 				</Typography>
// 			</Box>
// 			{/*
// 			<Box textAlign={"left"} sx={{ mb: 2 }}>
// 				<Typography variant='h6' fontWeight={"medium"}>
// 					Overview
// 				</Typography>
// 				<Typography textAlign={"left"} gutterBottom variant='body2'>
// 					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
// 					sint, vel placeat et laborum distinctio soluta possimus vero quo
// 					recusandae.
// 				</Typography>
// 			</Box>
// 			*/}
// 			<Box textAlign={"left"} sx={{ mb: 2 }}>
// 				<Typography variant='h6' fontWeight={"medium"}>
// 					Job Description
// 				</Typography>
// 				<Typography variant='body2'>{listing.description}</Typography>
// 			</Box>
// 			<Box textAlign={"left"} sx={{ mb: 2 }}>
// 				<Typography variant='h6' fontWeight={"medium"}>
// 					Posted To
// 				</Typography>
// 				<PostedToIcons clubs={listing.clubs} />
// 			</Box>
// 			{/* <Dialog
// 				open={open}
// 				onClose={handleClose}
// 				aria-labelledby='alert-dialog-title'
// 				aria-describedby='alert-dialog-description'>
// 				<DialogTitle id='alert-dialog-title'>{"Delete Post?"}</DialogTitle>
// 				<DialogContent>
// 					<DialogContentText id='alert-dialog-description'>
// 						This cannot be undone
// 					</DialogContentText>
// 				</DialogContent>
// 				<DialogActions>
// 					<Button onClick={handleDelete} autoFocus>
// 						Cancel
// 					</Button>
// 					<Button onClick={handleClose} color='error'>
// 						Delete
// 					</Button>
// 				</DialogActions>
// 			</Dialog>
// 			<Box textAlign={"left"} sx={{ mb: 2 }}>
// 				<Typography variant='h6' fontWeight={"medium"}>
// 					Comments {17}
// 				</Typography>
// 			</Box>
// 			<Box textAlign={"left"} sx={{ mb: 2 }}>
// 				7
// 			</Box> */}
// 		</Paper>
// 	);
// };

// export default ExpandedCard;