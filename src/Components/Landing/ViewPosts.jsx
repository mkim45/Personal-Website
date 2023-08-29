import { AppBar, Toolbar, Box, Stack, Typography, IconButton, Switch, Divider, Drawer,
	List,
	ListItem,
	ListItemText,
	InputAdornment,
	Checkbox } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect, useCallback } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Hero from "./Hero";
import SignUp from "./SignUp";
import Footer from "../Footer";
import OpportunitiesImage from "../Landing/viewposts.png";
import RelationshipImage from "../Landing/discussionpost.png";
import Video from "../Landing/cardiacrehab.mp4"
import SummariesImage from "../Landing/message.png";
import Banner from "./Banner";
import Image from "../Landing/Auditboard.png"
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { Grid, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import firestore from '../../Utilities/firebase';
import { doc, setDoc, collection, getDocs, writeBatch } from "firebase/firestore"; 
import Logo from "../../images/Logo.svg";

import ExpandedCard from "./ExpandedCard";
import SearchIcon from "@mui/icons-material/Search";

import { navigateTo } from "../../Utilities/navigate";
import { useNavigate, Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

const ViewPosts = () => {

	const navigate = useNavigate();

	return (
		<Container component='main' maxWidth='xs' sx={{ marginBlock: "auto" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				color='white'
				m={0}
				sx={{ zIndex: 1400, height: 96, backgroundColor: "#414fb6"}}>
				<Container maxWidth='xl'>
					<Toolbar sx={{ justifyContent: "space-between" }}>
						<Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
							<img src={Logo} width={140} alt='Logo' />
						</Box>
						<Stack
							sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
							direction='row'
							>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										mr: 8,
										display: "flex",
										fontFamily: "Poppins",
										fontWeight: 500,
										color: "#fff",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									About Me
								</Typography>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										mr: 8,
										display: "flex",
										fontFamily: "Poppins",
										fontWeight: 500,
										color: "#fff",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									Projects
								</Typography>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										mr: 8,
										display: "flex",
										fontFamily: "Poppins",
										fontWeight: 500,
										color: "#fff",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									Experiences
								</Typography>
								<Typography
									variant='body3'
									noWrap
									component='a'
									sx={{
										display: "flex",
										fontFamily: "Poppins",
										fontWeight: 500,
										color: "#fff",
										textDecoration: "none",
										flexGrow: 1,
										cursor: "pointer",
									}}>
									Contact Me
								</Typography>
						</Stack>
					</Toolbar>
				</Container>
			</AppBar>
			</Container>
	)
};

export default ViewPosts;
