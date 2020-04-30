import React from 'react';
// import ScrollUpButton from "react-scroll-up-button"; 
import './App.css';

import Content from './catalog_page/content';
// import Ongoing from './ongoing_page/ongoing';
import Header from './header';

function App() {
  return (
    <div>
      {/* <ScrollUpButton/> */}
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
