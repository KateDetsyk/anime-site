import React from 'react';
// import ScrollUpButton from "react-scroll-up-button"; 
import './App.css';

import Content from './catalog_page/content';
import Header from './header/header';
import Footer from './footer/footer';

function App() {
  
  return (
    <div>
      {/* <ScrollUpButton/> */}
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
