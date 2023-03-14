import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Auth from '../Components/Auth';
import HomePage from '../Components/HomePage';
import {authAction} from '../Store/index';
import ProductPage from '../Components/ProductPage';
const MainRoute = () => {
  const dispatch = useDispatch();
    const loggedIn = useSelector((state)=>state.isLoggedIn);
    useEffect(()=>{
      if(localStorage.getItem("userId")){
        dispatch(authAction.login());
      }
    },[dispatch]);
  return (
    <Routes>
        <Route path='/' element={<Auth/>}/>
        {
          loggedIn ? <>
        <Route path='/home' element={<HomePage/>}/>
          </> : 
        <Route path='/' element={<Auth/>}/>
        }
        {
          loggedIn ? <>
        <Route path='/products' element={<ProductPage/>}/>
          </> : 
        <Route path='/' element={<Auth/>}/>
        }
    </Routes>
  )
}

export default MainRoute