/* eslint-disable react/button-has-type */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ProvideAuth } from './context/useAuth';
import './App.css';
import Header from './Components/Header';

import theme from './theme';
import SignIn from './pages/SignIn';

const App : React.FC = () => (
  <div>
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/*" element={<Header />} />
            <Route path="/signin*" element={<SignIn />} />
            <Route path="/signup*" element={<div>signup</div>} />
            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ProvideAuth>

  </div>
);

export default App;
