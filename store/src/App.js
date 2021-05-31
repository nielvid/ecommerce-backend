import React, {useReducer, useEffect} from 'react'
import { ChakraProvider } from "@chakra-ui/react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import AddNewProduct from "./components/AddNewProduct";
import PageWarapper from "./layouts/PageWarapper";
import axios from 'axios';
import Login from './components/Login';
import FrontPage from './layouts/FrontPage';
import SinglePage from './components/SinglePage';
import ProductProvider from './state/contexts/Provider';
import {initialState, reducer} from "./state/contexts/productreducer"



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
console.log(state)
  useEffect(()=>{
    axios.get("/api/v1/products").then((res)=>{
      
      //console.log(res.data.docs)
    
      dispatch({type:'success', payload: res.data.docs})
    }).catch((err)=>{
      console.log(err)
      dispatch({type:"error"})
    })
  },[dispatch])

  return (
  
   <ChakraProvider >
   <ProductProvider>
   
   <Router>
   <Switch>
    <PageWarapper>
    
    
   
 <Route exact path="/">
<FrontPage />
 </Route>

      <Route exact path="/add-product">
        <AddNewProduct />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
   <Route exact path="/:slug">
        <SinglePage />
      </Route>

    <Route exact path="/single">
        <SinglePage />
      </Route>
      
       </PageWarapper>
       </Switch>
      </Router>
     </ProductProvider>
    </ChakraProvider>
  
  
  );
}

export default App;
