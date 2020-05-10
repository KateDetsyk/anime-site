import React from 'react';
import './App.css';

import Content from './catalog_page/content';
import Header from './header/header';
import Footer from './footer/footer';
import Ongoings from'./ongoing_page/ongoing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Title from './title_page/title';

import MAnime from './anime-movies/m-anime';
import Login from './log-in/log-in';
import Singup from './sing-up/sing-up';


function App() {  

  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/ongoings/page0' render={(props) => <Title {...props} id={0} />}/>
        <Route path='/ongoings/page1' render={(props) => <Title {...props} id={1} />}/>
        <Route path='/ongoings/page2' render={(props) => <Title {...props} id={2} />}/>

        <Route path='/ongoings' component={Ongoings} />
   
        <Route path='/movies/page3' render={(props) => <Title {...props} id={3} />}/>
        <Route path='/movies/page4' render={(props) => <Title {...props} id={4} />}/>
        <Route path='/movies/page5' render={(props) => <Title {...props} id={5} />}/>
        <Route path='/movies' component={MAnime} />

        <Route path='/page0' render={(props) => <Title {...props} id={0} />}/>
        <Route path='/page1' render={(props) => <Title {...props} id={1} />}/>
        <Route path='/page2' render={(props) => <Title {...props} id={2} />}/>
        <Route path='/page3' render={(props) => <Title {...props} id={3} />}/>
        <Route path='/page4' render={(props) => <Title {...props} id={4} />}/>
        <Route path='/page5' render={(props) => <Title {...props} id={5} />}/>

        <Route path='/page6' render={(props) => <Title {...props} id={7} />}/>
        <Route path='/page7' render={(props) => <Title {...props} id={8} />}/>
        <Route path='/page8' render={(props) => <Title {...props} id={9} />}/>
        <Route path='/page9' render={(props) => <Title {...props} id={10} />}/>
        <Route path='/page10' render={(props) => <Title {...props} id={11} />}/>
        <Route path='/page11' render={(props) => <Title {...props} id={12} />}/>

        <Route path='/login' component={Login} />
        <Route path='/singup' component={Singup} />

        <Route path='/' component={Content} />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
