import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import NoScrollLayout from "./Components/NoScrollLayout"
import ViewPosts from "./Components/Landing/ViewPosts";

import { useMediaQuery } from "@mui/material";

import TempMobile from "./Components/TempMobile";

function App() {
	return (
		<div className='App'>
				<Routes>
					<Route path='/' element={<ViewPosts />}/>
				</Routes>
		</div>
	);
}

export default App;