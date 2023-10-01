import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import RootElement from './components/RootElement';
import Home from './pages/Home';
// import Error from './pages/Error';
import About from './pages/About';
import LiveProject from './components/LiveProject';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<RootElement />}>

        <Route
        path="/"
        element={<Home />} >
        </Route>

        <Route
        path="/about"
        element={<About />} >
        </Route>

        <Route
        path="/home/:heading"
        element={<LiveProject />} >
        </Route>

        {/* <Route
        path="*"
        element={<Error />} >
        </Route> */}
     
    </Route>
    
    </>
  )
);

export default function App() {
  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}
