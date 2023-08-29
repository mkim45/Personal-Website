import React, { useState } from "react";
import {
  AppBar,
  ButtonBase,
  Paper,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
  Box,
  Checkbox,
  TextField,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomButton = ({ children, onClick }) => (
	<ButtonBase
	  onClick={onClick}
	  sx={{
		width: "100%",
		height: "100%",
		textAlign: "center",
		backgroundColor: "#414fb6",
		"&:hover": {
		  backgroundColor: "#35409e", // Add a darker shade on hover
		},
	  }}
	>
	  {children}
	</ButtonBase>
  );

const SearchBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [minValues, setMinValues] = useState({});
  const [maxValues, setMaxValues] = useState({});

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleOptionToggle = (option) => () => {
    const currentIndex = selectedOptions.indexOf(option);
    const newSelectedOptions = [...selectedOptions];

    if (currentIndex === -1) {
      newSelectedOptions.push(option);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleMinValueChange = (feature) => (event) => {
    setMinValues((prevMinValues) => ({
      ...prevMinValues,
      [feature]: event.target.value,
    }));
  };
  
  const handleMaxValueChange = (feature) => (event) => {
    setMaxValues((prevMaxValues) => ({
      ...prevMaxValues,
      [feature]: event.target.value,
    }));
  };

  const handleSearch = () => {
    // Implement your search logic here using selectedOptions, minValues, and maxValues
    console.log("Performing search with selected options:", selectedOptions);
    console.log("Min values:", minValues);
    console.log("Max values:", maxValues);
  };

  return (
    <Box
    sx={{ justifyContent: "center" }}
    >
    <AppBar 
      position="static" 
      sx={{ backgroundColor: "#fff",  
            minWidth: { xs: "100%", sm: "100%", md: "400px", lg: "515px" }, 
            maxWidth: "1410px", 
            mt: 1,
            mx: 2,
            border: 2,
            borderColor: "transparent",
            borderRadius: "30px" }}>
      <Toolbar color="#414fb6" sx={{ backgroundColor: "#fff", maxWidth: "1000px", borderRadius: "30px" }}>
        <IconButton
          edge="start"
          onClick={handleDrawerOpen}
          sx={{ color: "#414fb6" }}
        >
          <SearchIcon />
        </IconButton>
        <Typography
          onClick={handleDrawerOpen}
          sx={{ ml: 1, flex: 1, color: "#414fb6" }}
          >
            Search...
        </Typography>
      </Toolbar>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <Container>
        <Box sx={{
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <Typography 
					    variant="h5"
					    fontFamily="Poppins"
					    color="#414fb6"
					    sx={{
                py: 2,
				      	overflow: "hidden",
				        textOverflow: "ellipsis",
				       	whiteSpace: "nowrap",
					    	fontWeight: 700,
				    	}}
					    component="div">
                Company Search
            </Typography>
            <Paper
									elevation={3}
									sx={{
                      mt: 2,
		  								border: 2,
		  								borderColor: "transparent",
		  								borderRadius: "10px",
		  								minWidth: { xs: "100%", sm: "100%", md: "200px", lg: "200px" },
		  								maxWidth: "200px",
		  								height: "40px",
										backgroundColor: "#414fb6"
									}}
	  							>
									<Box
		 								sx={{
											justifyContent: "flex-start",
											width: "100%",
											borderRadius: "10px",
											px: "14px",
											py: "4px",
											"&.Mui-active": {
			  									border: "4px solid #482FD7",
											},
											textAlign: "center",
											color: "#fff",
		  								}}
									>
										<CustomButton onClick={handleSearch}>
										<Typography sx={{ fontWeight: 600 }}>
											Apply Search
										</Typography>
										</CustomButton>
									</Box>
								</Paper>
        </Box>
        <Divider></Divider>
          <Box sx={{
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
          <Box sx={{ 
            display: "flex",
						flexDirection: "column"}}>
            <Typography variant="h6" gutterBottom>
              Deal Opportunity:
            </Typography>
            <List>
              {["Venture", "Growth", "Buyout"].map((option) => (
                <ListItem
                  key={option}
                  button
                  onClick={handleOptionToggle(option)}
                >
                  <Checkbox
                    checked={selectedOptions.indexOf(option) !== -1}
                  />
                  <ListItemText primary={option} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ 
            display: "flex",
						flexDirection: "column"}}>
            <Typography variant="h6" gutterBottom>
              Founding Year:
            </Typography>
            <TextField
              label="Year (Min)"
              type="number"
              value={minValues.feature1 || ""}
              onChange={handleMinValueChange("feature1")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Year (Max)"
              type="number"
              value={maxValues.feature1 || ""}
              onChange={handleMaxValueChange("feature1")}
              sx={{ mb: 2 }}
            />
          </Box>
          <Box sx={{ 
            display: "flex",
						flexDirection: "column"}}>
            <Typography variant="h6" gutterBottom>
              # of Employees:
            </Typography>
            <TextField
              label="Employees (Min)"
              type="number"
              value={minValues.feature2 || ""}
              onChange={handleMinValueChange("feature2")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Employees (Max)"
              type="number"
              value={maxValues.feature2 || ""}
              onChange={handleMaxValueChange("feature2")}
              sx={{ mb: 2 }}
            />
          </Box>
          <Box sx={{ 
            display: "flex",
						flexDirection: "column"}}>
            <Typography variant="h6" gutterBottom>
              YoY Employee Growth:
            </Typography>
            <TextField
              label="Growth (Min)"
              type="number"
              value={minValues.feature3 || ""}
              onChange={handleMinValueChange("feature3")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Growth (Max)"
              type="number"
              value={maxValues.feature3 || ""}
              onChange={handleMaxValueChange("feature3")}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              sx={{ mb: 2 }}
            />
          </Box>
          </Box>
          <Divider />
          <Box sx={{
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
          <Box sx={{ 
            display: "flex",
						flexDirection: "column"}}>
            <Typography variant="h6" gutterBottom>
              Total Raised-to-Date (USD$M):
            </Typography>
            <TextField
              label="Amount (Min)"
              type="number"
              value={minValues.feature4 || ""}
              onChange={handleMinValueChange("feature4")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Amount (Max)"
              type="number"
              value={maxValues.feature4 || ""}
              onChange={handleMaxValueChange("feature4")}
              sx={{ mb: 2 }}
            />
          </Box>
          <Box sx={{ 
            display: "flex",
						flexDirection: "column"}}>
            <Typography variant="h6" gutterBottom>
              Last Round Post-Money (USD$M):
            </Typography>
            <TextField
              label="Amount (Min)"
              type="number"
              value={minValues.feature5 || ""}
              onChange={handleMinValueChange("feature5")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Amount (Max)"
              type="number"
              value={maxValues.feature5 || ""}
              onChange={handleMaxValueChange("feature5")}
              sx={{ mb: 2 }}
            />
          </Box>
          <Box sx={{ 
            display: "flex",
						flexDirection: "column"}}>
            <Typography variant="h6" gutterBottom>
              Last Round Amount (USD$M):
            </Typography>
            <TextField
              label="Amount (Min)"
              type="number"
              value={minValues.feature6 || ""}
              onChange={handleMinValueChange("feature6")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Amount (Max)"
              type="number"
              value={maxValues.feature6 || ""}
              onChange={handleMaxValueChange("feature6")}
              sx={{ mb: 2 }}
            />
          </Box>
          </Box>
        </Container>
      </Drawer>
    </AppBar>
    </Box>
  );
};

export default SearchBar;
