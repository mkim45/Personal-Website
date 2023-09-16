import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewPosts from "./Components/Landing/ViewPosts";

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