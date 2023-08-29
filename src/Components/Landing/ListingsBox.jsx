import { Stack } from "@mui/material";
import React from "react";
import ListingCard from "./ListingCard";

const ListingsBox = ({ posts, activeId, clickFunction, open }) => {
	const filteredPosts = Object.values(posts);
  	const strongBatteryFitListings = filteredPosts.filter(listing => listing["Battery Fit"] === 1);
  	const moderateBatteryFitListings = filteredPosts.filter(listing => listing["Battery Fit"] === 2);
  	const lowBatteryFitListings = filteredPosts.filter(listing => listing["Battery Fit"] === 3);
	  return (
		<Stack direction="column">
		  {/* Strong Battery Fit section */}
		  {strongBatteryFitListings.length > 0 && (
			<>
			  <Typography variant="h6">Strong Battery Fit</Typography>
			  {renderListings(strongBatteryFitListings, activeId, clickFunction, open)}
			</>
		  )}
	
		  {/* Moderate Battery Fit section */}
		  {moderateBatteryFitListings.length > 0 && (
			<>
			  <Typography variant="h6">Moderate Battery Fit</Typography>
			  {renderListings(moderateBatteryFitListings, activeId, clickFunction, open)}
			</>
		  )}
	
		  {/* Low Battery Fit section */}
		  {lowBatteryFitListings.length > 0 && (
			<>
			  <Typography variant="h6">Low Battery Fit</Typography>
			  {renderListings(lowBatteryFitListings, activeId, clickFunction, open)}
			</>
		  )}
		</Stack>
	  );
	
	  const renderListings = (listings, activeId, clickFunction, open) => {
		return listings.map(listing => {
		  return (
			<ListingCard
			  key={listing.id}
			  isActive={listing.id === activeId}
			  listing={listing}
			  clickFunction={clickFunction}
			  open={open}
			/>
		  );
		});
	  };

};

export default ListingsBox;
