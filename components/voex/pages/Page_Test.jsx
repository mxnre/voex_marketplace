import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Test from '../components/new_component/Test';

const TestPage= () => {
    const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

  return (
    <div>
        <GlobalStyles/>
        <Test/>
        <h2>Hola soy un test</h2>
    </div>
  );
}

export default TestPage;