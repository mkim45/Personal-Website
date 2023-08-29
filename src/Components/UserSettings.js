import * as React from "react";
import PropTypes from "prop-types";
import {
	Box,
	CssBaseline,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Toolbar,
} from "@mui/material";
import {
	AccountBox as AccountBoxIcon,
	Groups as GroupsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const navigate = useNavigate();

	const buttons = [
		{ text: "Profile", icon: <AccountBoxIcon /> },
		{ text: "Groups", icon: <GroupsIcon /> },
		//{ text: "Newsletter", icon: <EmailIcon /> },
	];

	const drawer = (
		<div>
			<Toolbar />
			<Typography align='left' variant='h5' alignItems='center' sx={{ m: 2 }}>
				Settings
			</Typography>
			<List disablePadding>
				{/* {buttons.map((item, index) => (
					<div key={index}>
						<ListItem
							button
							onClick={() => navigate("/settings/" + item.text.toLowerCase())}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					</div>
				))} */}
				<div>
					<ListItem
						button
						onClick={() => navigate("/settings/profile")}>
						<ListItemIcon><AccountBoxIcon /></ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItem>
				</div>
				<div>
					<ListItem
						button
						onClick={() => navigate("/settings/groups")}>
						<ListItemIcon><GroupsIcon /></ListItemIcon>
						<ListItemText primary="Groups" />
					</ListItem>
				</div>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex", zIndex: 0 }}>
			<CssBaseline />
			<Box
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
						zIndex: 0,
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
						zIndex: 0,
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
