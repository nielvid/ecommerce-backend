import React from 'react'
import {
  Link
} from 'react-router-dom';
import { Flex, Box, Heading} from '@chakra-ui/react'

export default function TopHeader() {
  return (
    <Flex p='10px 10%' justifyContent="space-between" bg="#ededed">
    <Box ><Heading fontSize={["0.6em", "1em", "1.5em"]}>DgtalMall</Heading></Box>
     <Flex fontSize={["0.43em", "0.8em"]} >
     <Link className="link" to="/" alt="home">Home</Link>
     <Link  className="link"  to="/" alt="home">About</Link> 
     <Link  className="link"  to="/" alt="home">Shop</Link> 
      <Link  className="link"  to="/add-product" alt="home">Add Product</Link> 
      </Flex>
    </Flex>
  )
}
