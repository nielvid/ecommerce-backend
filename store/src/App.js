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

function App() {
  return (
   <Router>
   <ChakraProvider >
   <PageWarapper>
   <Switch>
   <Route exact path="/">
    
    <TopHeader />
       <Header />
       <Banner />
       <CardsHolder>
       <Card />
       <Card />
       <Card />
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
    </ChakraProvider>
   </Router>
  
  );
}

export default App;
