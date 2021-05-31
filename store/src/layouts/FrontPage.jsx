import React from 'react'
import Banner from "../components/Banner";
import Advert from "../components/Advert";
import Card from "../components/Card";
import FeaturedProducts from "../components/FeaturedProducts";
import SmallCards from "../components/SmallCards";
import AdvertBoard from "./AdvertBoard";
import CardsHolder from "./CardsHolder";
import FeaturedCategory from "./FeaturedCategory";
import OtherCardsHolder from "./OtherCardsHolder";

export default function FrontPage() {
    return (
        <>
             <Banner />
       <CardsHolder>
       <Card />
      </CardsHolder>
      <OtherCardsHolder>
       {Array(6).fill(null).map(() => (<SmallCards />))}
        
      </OtherCardsHolder>
      <FeaturedCategory>
        {Array(12).fill(null).map(() => (<FeaturedProducts />))}
      </FeaturedCategory>
      <AdvertBoard>
        <Advert />
      </AdvertBoard>
        </>
    )
}
