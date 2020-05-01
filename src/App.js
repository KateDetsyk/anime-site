import React from 'react';
// import ScrollUpButton from "react-scroll-up-button"; 
import './App.css';

import Content from './catalog_page/content';
// import Ongoing from './ongoing_page/ongoing';
import Header from './header';
import Side from './side-component/side';
import Footer from './footer/footer';
import Search from './search-bar/search';

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
