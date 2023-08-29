import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Paper, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { isWithinCurrentWeekTimeRange } from './ViewPosts';

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

const ListingCard = ({ listing, isActive, clickFunction, open }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [newBidValue, setNewBidValue] = useState(listing.newBidValue || "");

	const handleExpandToggle = () => {
		setIsExpanded((prevState) => !prevState);
	  };
	
	  const handleBidChange = (event) => {
		const value = event.target.value;
		setNewBidValue(value);
	  };

	return (
	  <Paper
		elevation={3}
		sx={{
		  mt: 1.5,
		  mx: 2,
		  border: 2,
		  borderColor: isActive ? "primary.main" : "transparent",
		  borderRadius: "30px",
		  minWidth: { xs: "100%", sm: "100%", md: "400px", lg: "515px" },
		  maxWidth: "1410px",
		  height: "100px",
		}}
	  >
		<Box
		  sx={{
			justifyContent: "flex-start",
			width: "100%",
			borderRadius: "30px",
			px: "14px",
			py: "4px",
			"&.Mui-active": {
			  border: "4px solid #482FD7",
			},
		  }}
		>
		  <Box
			  flex={1}
			  sx={{
				display: "flex",
				flexDirection: "horizontal",
				justifyContent: "space-between",
				height: "100%", 
				alignItems: "center"
			  }}
			>
			<Box
			  flex={1}
			  sx={{
				display: "flex",
				flexDirection: "horizontal",
				height: "100%", 
				alignItems: "center",
				maxWidth: 988
			  }}
			>
			<Box
				width={88}
				height={88}
				   sx={{
					  display: "flex",
					  justifyContent: "flex-start",
					  alignItems: "center",
				}}
			  >
				<Img
					alt={listing.Company}
					  src={listing["ImageLink"]}
					  sx={{ maxWidth: 88, maxHeight: 88, width: "auto", height: "auto", borderRadius: "5px" }}
				/>
			  </Box>
				<Box
				  flex={1}
				  sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					height: "100%", 
					maxWidth: 898,
					paddingLeft: 2
				  }}
			  >
			  <Typography
				textAlign="left"
				variant="h6"
				fontWeight="bold"
				sx={{
				  overflow: "hidden",
				  textOverflow: "ellipsis",
				  whiteSpace: "nowrap",
				}}
				component="div"
			  >
				{listing.Company}
			  </Typography>
			  <Typography
				variant="subtitle2"
				textAlign="left"
				sx={{
				  display: "-webkit-box",
				  overflow: "hidden",
				  textOverflow: "ellipsis",
				  WebkitLineClamp: 2, 
				  WebkitBoxOrient: "vertical",
				}}
			  >
				{listing["One-Liner"]}
			  </Typography>
			  </Box>
			  </Box>
			  {open && (
				  <>
					   <Box sx={{ paddingRight: 2, paddingLeft: 2 }}>
						  <Typography variant="body2">
							Saved Bid: {listing.bids && listing.bids[user] ? listing.bids[user] : 0}
						  </Typography>
					</Box>
					<Box>
					<TextField
						  type="number"
						  label="New Bid"
						  variant="outlined"
						  value={listing.newBidValue}
						  onChange={(event) => {
							const value = event.target.value;
							listing.newBidValue = value; // Update the input value

						// Update the companyBids dictionary with the new bid value
						setCompanyBids(prevBids => ({
							  ...prevBids,
							  [listing.Company]: value,
						}));
					 }}
					/>
					</Box>
				  </>
			)}
			</Box>
		</Box>
	  </Paper>
	);
  };

export default ListingCard;
