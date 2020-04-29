import React from 'react';
import './App.css';

import Content from './catalog_page/content';
// import Ongoing from './ongoing_page/ongoing';
import Header from './header';

function App() {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      {/* <Header></Header>
      <Ongoing></Ongoing> */}
    </div>
  );
}

export default App;
