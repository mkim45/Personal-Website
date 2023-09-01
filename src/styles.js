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

export default theme;
