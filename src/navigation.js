import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  
 
 
import ImgPost from './components/post';
import FrontPage from './components/frontPage';

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={FrontPage} />
          <Route path="/about" Component={ImgPost} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
