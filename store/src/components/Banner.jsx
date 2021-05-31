import React, {useState} from 'react'
import { Box,Flex, Grid, GridItem } from "@chakra-ui/react"
import Ban from '../img/b1.gif'
import Ad from '../img/b2.gif'
import Ad2 from '../img/BSB.gif'
import Categories from './Categories'

export default function Banner() {
   const [state, setstate] = useState(false)

   const Show = ()=>{
      setstate(true)
   }
    const Hide = ()=>{
     setstate(false)
     }
    return (
       <>
     <Box p="0 10%" m="1.5rem 0" >
       <Box background="#ae3736" color="#fff" as="button" onMouseOver={Show}
         position="relative" borderRadius="1rem" px="1rem" py="0.5rem">Browse by Category</Box>
         {state && <Categories onMouseLeave={Hide}  />  }
        </Box>
        <Flex p="0 10%" m="1.5rem 0">
        <Box > 
     <img src={Ban}  alt='hi' />
  </Box>
  <Grid templateColumns="auto" gridTemplateRows="auto auto" gap={[2, 4,5, 14]}>
       <GridItem>
     <img src={Ad}  alt='hi'/>
  </GridItem>
  <GridItem>
     <img src={Ad2}  alt='hi'/>
  </GridItem>
  </Grid>
  </Flex>
  </>
    )
}
