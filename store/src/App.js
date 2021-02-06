import React, {useReducer, useEffect} from 'react'
import { ChakraProvider } from "@chakra-ui/react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Banner from "./common/Banner";
import Header from "./common/Header";
import TopHeader from "./common/TopHeader";
import AddNewProduct from "./components/AddNewProduct";
import Advert from "./components/Advert";
import Card from "./components/Card";
import FeaturedProducts from "./components/FeaturedProducts";
import PageWarapper from "./components/PageWarapper";
import SmallCards from "./components/SmallCards";
import AdvertBoard from "./layouts/AdvertBoard";
import CardsHolder from "./layouts/CardsHolder";
import FeaturedCategory from "./layouts/FeaturedCategory";
import Footer from "./layouts/Footer";
import OtherCardsHolder from "./layouts/OtherCardsHolder";
import axios from 'axios';

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
    
      dispatch({type:'success', payload: res.data})
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
    
    <TopHeader />
       <Header />
       <Banner />
       <CardsHolder>
       <Card />
      </CardsHolder>
      <OtherCardsHolder>
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
        <SmallCards />
      </OtherCardsHolder>
      <FeaturedCategory>
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
        <FeaturedProducts />
      </FeaturedCategory>
      <AdvertBoard>
        <Advert />
      </AdvertBoard>
      <Footer />
      </Route>
      <Route exact path="/add-product">
        <AddNewProduct />
      </Route>
   </Switch>
   </PageWarapper>
   </ProductContext.Provider>
    </ChakraProvider>
   </Router>
  
  );
}

export default App;
