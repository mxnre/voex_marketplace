import React, { useState } from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import Home3 from './pages/home3';
import Explore from './pages/explore';
import Explore2 from './pages/explore2';
import Rangking from './pages/rangking';
import Auction from './pages/Auction';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import LoginTwo from './pages/loginTwo';
import Register from './pages/register';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import Create from './pages/create';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import Contact from './pages/Page_Contact';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';
import TestPage from './pages/Page_Test';
import PageTerms from './pages/Page_Terms_of_services';
import PagePrivacy from './pages/Page_Privacy_Policy'
import Faqs from './pages/Faqs';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Press from './pages/Press';

import { createGlobalStyle } from 'styled-components';
import { WalletContext } from '../context/WalletContext';
import About from './pages/About';
import { CreateNft } from './pages/CreateNft';


const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);


const App= () => {
 const initialSate=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
const [userWallet, setUserWallet] = useState(initialSate)

  return (
    <WalletContext.Provider  className="wraper" value={{userWallet,setUserWallet}}>
    <GlobalStyles />
      <Header/>
        <PosedRouter>
        <ScrollTop path="/">
          <Home exact path="/">
            <Redirect to="/home" />
          </Home>
          <CreateNft path="/createNft"/>
          <Home1 path="/home1" />
          <About path="/about"/>
          <Blog path="/blog" />
          <TestPage path="/test" />
          <PageTerms path="/terms_of_services" />
          <Press path="/press" />
          <PagePrivacy path="/privacy_policy" />
          <Home2 path="/home2" />
          <Home3 path="/home3" />
          <Explore path="/explore" />
          <Explore2 path="/explore2" />
          <Rangking path="/rangking" />
          <Auction path="/Auction" />
          <Support path="/support" />
          <Faqs path="/faqs"/>
          <Helpcenter path="/helpcenter" />
          <Colection path="/colection" />
          <ItemDetail path="/ItemDetail" />
          <Author path="/Author" />
          <Wallet path="/wallet" />
          <Login path="/login" />
          <LoginTwo path="/loginTwo" />
          <Register path="/register" />
          <Price path="/price" />
          <Works path="/works" />
          <News path="/news" />
          <Create path="/create" />
          <Create2 path="/create2" />
          <Create3 path="/create3" />
          <Createoption path="/createOptions" />
          <Activity path="/activity" />
          <Contact path="/contact" />
          <ElegantIcons path="/elegantIcons" />
          <EtlineIcons path="/etlineIcons" />
          <FontAwesomeIcons path="/fontAwesomeIcons" />
          <Accordion path="/accordion" />
          <Alerts path="/alerts" />
          <Progressbar path="/progressbar" />
          <Tabs path="/tabs" />
          </ScrollTop>
        </PosedRouter>
      <ScrollToTopBtn />
      
    </WalletContext.Provider>
  )
}


export default App;
