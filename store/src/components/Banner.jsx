import React from 'react'
import { Box,Flex, Link, 
     List, ListItem, 
        UnorderedList,} from "@chakra-ui/react"
import Ban from '../img/b1.gif'
import Ad from '../img/b2.gif'

export default function Banner() {
    return (
        <Flex p=" 0 10%" m="15px 0">
        <Box bg="#ffffff" w="25%" p="5px 15px" mr="15px">
        <UnorderedList>
        <List spacing={3}>
<ListItem><Link to="/">Supermarket</Link></ListItem>
<ListItem><Link to="/">Phones & Tablets</Link></ListItem>
<ListItem><Link to="/">Home & Office</Link></ListItem>
<ListItem><Link to="/">Computing</Link></ListItem>
<ListItem><Link to="/">Health & Beauty</Link></ListItem>
<ListItem><Link to="/">Electronics</Link></ListItem>
<ListItem><Link to="/">Fashion</Link></ListItem>
<ListItem><Link to="/">Baby Products</Link></ListItem>
<ListItem><Link to="/">Gaming</Link></ListItem>
<ListItem><Link to="/">Sporting Goods</Link></ListItem>
<ListItem><Link to="/">Automobile</Link></ListItem>
<ListItem><Link to="/">Other categories</Link></ListItem>
</List>
</UnorderedList>
        </Box>
        <Box bg="#fff" >
     <img src={Ban}  alt='hi' objectFit="contain"/>
  </Box>
  <Flex flexDirection="column" alignItems="flex-start"  w="25%" ml="15px">
       <Box bg="#fff" >
     <img src={Ad}  alt='hi' objectFit="contain"/>
  </Box>
  <Box bg="#fff" mt="75px" mb="0">
     <img src={Ad}  alt='hi' objectFit="contain"/>
  </Box>
  </Flex>
  </Flex>
    )
}
