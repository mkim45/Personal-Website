import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

let theme = createTheme({
	palette: {
		primary: {
			main: "#482fd7",
		},
		secondary: {
			main: "#ff8800",
		},
		white: {
			main: "#fff",
		},
	},
	typography: {
		fontFamily: '"Poppins", "Arial", sans-serif',
		fontSize: 16,
		htmlFontSize: 16,
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

theme = responsiveFontSizes(theme);

export default theme;
