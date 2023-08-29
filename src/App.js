import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import NoScrollLayout from "./Components/NoScrollLayout"
import ViewPosts from "./Components/Landing/ViewPosts";

import { useMediaQuery } from "@mui/material";

import TempMobile from "./Components/TempMobile";

function App() {
	const mobile = useMediaQuery("(min-width:900px)");
	if (!mobile) {
		return <TempMobile />;
	}
	return (
		<div className='App'>
				<Routes>
					<Route path='/' element={<DefaultLayout />}>
						<Route index element={<ViewPosts />} />
					</Route>
				</Routes>
		</div>
	);
}

export default App;