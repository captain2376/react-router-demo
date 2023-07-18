
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { PageNotFound } from './components/PageNotFound';
import { Product } from './components/Product';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='About' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} ></Route>
        <Route path='Product' element={<Product />}>
        {/* default page */}
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route >
        <Route path='*' element={<PageNotFound />} />
        <Route path='users' element={<Users/>}/>
        {/* <Route path='/users/1' element={<UserDetails/> }/>
        <Route path='/users/2' element={<UserDetails/> }/>
        <Route path='/users/3' element={<UserDetails/> }/> */
        }
        <Route path='users/:userId' element={<UserDetails/> } />
       
        <Route  path='users/:admin' element={<Admin/>}/>
      </Routes>

    </>
  );
}

export default App;
