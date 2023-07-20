import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Login from './components/Login';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { PageNotFound } from './components/PageNotFound';
import { Product } from './components/Product';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import {RequireAuth} from './components/RequireAuth';
import { AuthProvider } from './components/auth';
import { UserDetails } from './components/UserDetails';


const LazyAbout=React.lazy(()=>import('./components/About'))
function App() {
  return (
    
      <AuthProvider>
        
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='About' element={<LazyAbout />} />
        <Route path='order-summary' element={<OrderSummary />} ></Route>
        <Route path='Product' element={<Product />}>
        {/* default page */}
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route >
        <Route path='*' element={<PageNotFound />} />
        <Route path='users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<Admin/>}/>
        </Route>
        
        {/* <Route path='users/1' element={<UserDetails/>}/>
        <Route path='users/2' element={<UserDetails/>}/>
        <Route path='users/3' element={<UserDetails/>}/> */}

        <Route path='profile' element={<RequireAuth> <Profile/></RequireAuth> }/>

        <Route path='login' element={<Login/>} />
      
          
      </Routes>
      
      </AuthProvider>
    
  );
}

export default App;
