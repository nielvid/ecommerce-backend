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
import Content from './layouts/Content';

export const ProductContext = React.createContext()

const initialState = {
  data : [],
  error: "",
  loading: true
}

const reducer = (state, action)=>{
  switch (action.type) {
    case "success":
      return{
        data: action.payload,
        error: "",
        loading: false
      }
      case 'error':
         return{
        data:{},
        error: "Something went wrong",
        loading: false
      }
  
    default:
     return  state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(()=>{
    axios.get("/api/v1/products").then((res)=>{
      
      //console.log(res.data.docs)
    
      dispatch({type:'success', payload: res.data.docs})
    }).catch((err)=>{
      dispatch({type:"error"})
    })
  },[])

  return (
   <Router>
   <ChakraProvider >
   <ProductContext.Provider value={{state}}>
   <PageWarapper>
  
   <Switch>
   <Route exact path="/">
    <Content />
      </Route>
      <Route exact path="/add-product">
        <AddNewProduct />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
   </Switch>
    
   </PageWarapper>
   </ProductContext.Provider>
    </ChakraProvider>
   </Router>
  
  );
}

export default App;
