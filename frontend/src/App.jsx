import React from 'react'
import {BrowserRouter, RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from 'react-router-dom'
import Homepage from './Pages/Homepage';

//routes
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout />}>
    <Route index element={<Homepage /> }/>
   
    

  </Route>)
);

function App ()  {
  
  return (<RouterProvider router = {router}/>
  )
}

export default App
