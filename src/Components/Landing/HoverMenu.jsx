import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function HoverMenu({ text, options }) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<div>
			<Typography
				variant='body1'
				fontWeight={"regular"}
				sx={{
					textDecoration: "underline",
					cursor: "pointer",
					width: "fit-content",
				}}
				aria-owns={open ? "mouse-over-popover" : undefined}
				aria-haspopup='true'
				onClick={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}>
				{text}
			</Typography>
			<Popover
				id='mouse-over-popover'
				sx={{
					pointerEvents: "none",
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus>
				{options.map((option, index) => {
					return (
						<Typography key={index} sx={{ p: 1 }}>
							{option}
						</Typography>
					);
				})}
			</Popover>
		</div>
	);
}
