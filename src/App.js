import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import Main from './Components/Main';
import Planner from './Components/Planner';
import SignIn from './Components/SignIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route
          path="planner"
          element={isAuthenticated ? <Planner /> : <Navigate to="/signin" replace />}
        />
        <Route path="" element={<Main />} />
      </Routes>
  );
}

export default App;
