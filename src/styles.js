import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#482fd7",
		},
		secondary: {
			main: "#ff8800",
		},
		white: "#fff",
	},
	typography: {
		fontFamily: '"Poppins", "Arial", sans-serif',
		fontSize: 16,
		htmlFontSize: 16,
		header1: {
			fontFamily: '"Poppins", "Arial", sans-serif',
			fontSize: "72px",
		},
		body1: {
			fontFamily: '"Poppins", "Arial", sans-serif',
		},
		body2: {
			fontFamily: '"Inter", "Arial", sans-serif',
			fontSize: "1.25rem",
			fontWeight: 400,
		},
		subtitle2: {
			fontWeight: 300,
			fontFamily: ' "Roboto", "Arial", sans-serif',
		},
	},
});

export default theme;
