import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

let theme = createTheme({
	palette: {
		primary: {
			main: "#fbe4d8",
		},
		secondary: {
			main: "#ff8800",
		},
		white: {
			main: "#fff",
		},
	},
	typography: {
		fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
		fontSize: 16,
		htmlFontSize: 16,
		header1: {
			fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
			fontSize: "72px",
		},
		body1: {
			fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
		},
		body2: {
			fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
			fontSize: "1.25rem",
			fontWeight: 400,
		},
		subtitle2: {
			fontWeight: 300,
			fontFamily: '"Rosart", "Georgia", "Times New Roman", "FZNewBaoSong", serif',
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
