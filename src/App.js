import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer'
import CartContainer from './containers/CartContainer';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/cart' element={<CartContainer />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
