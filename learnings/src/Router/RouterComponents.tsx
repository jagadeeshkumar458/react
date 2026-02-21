import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
// import About from './About';
import Navbar from './Navbar';
import OrderSummary from './OrderSummary';
import NoMatch from './NoMatch';
import Products from './Products';
import FeaturedProducts from './FeaturedProducts';
import NewProducts from './NewProducts';
import { Users } from './Users';
import { UserDetails } from './UserDetails';
import { Admin } from './Admin';
import Profiles from './Profiles';
import { AuthProvider } from './Auth';
import Login from './Login';
import RequireAuth from './RequireAuth';

const About = lazy(() => import('./About'));

function RouterComponents() {
  return (
    <div>
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='about' element={<Suspense fallback='Loading....'> <About /> </Suspense>}></Route>
                <Route path='summary' element={<OrderSummary />}></Route>
                <Route path='*' element={<NoMatch />}></Route>
                <Route path='products' element={<Products />}>
                    <Route index element={<FeaturedProducts />} />
                    <Route path='featured' element={<FeaturedProducts />}/>
                    <Route path='new' element={<NewProducts />} />
                </Route>
                <Route path='users' element={<Users />}>
                <Route path=':userId' element={<UserDetails />} />
                <Route path='admin' element={<Admin />} />
                </Route>
                <Route path='profile' element={<RequireAuth><Profiles /></RequireAuth>} />
                <Route path='login' element={<Login />} />
            </Routes>
        </AuthProvider>
    </div>
  )
}

export default RouterComponents