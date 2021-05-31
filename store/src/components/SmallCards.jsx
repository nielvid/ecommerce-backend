import React from 'react'
import { Box,Link, Image, Text, Heading, Flex} from "@chakra-ui/react"
import Phone from '../img/phone.jpg'

export default function SmallCards() {
    
    return (
        <Box maxWidth="18rem"  p="1rem"  m="1rem 0.2rem" bg="#ffffff" position="relative" borderRadius="1.9rem" boxShadow="2px 2px 5px #bebebe,
             -2px -2px 5px #ffffff" 
              _hover={{
        boxShadow: "5px 5px 5px #bebebe , -5px -5px 2px #ffffff",
        transform:"scale(1.1)"
        }}>
        <Link href="/"  _hover={{textDecoration:"none" }}>
            <Image src={Phone} style={{borderRadius:"19px 19px 19px 19px"}}></Image>
            <Box textAlign="center" fontWeight="600">Product name</Box>
            <Flex justifyContent="space-evenly"  flexWrap="wrap" p="0 0.2rem">
            <Heading fontSize='1.1em'>N4000.00</Heading>
                 <Text textDecoration = "line-through" opacity="0.5">N5500.00</Text>
            </Flex>
            
            <Box bg="#f00" w="25%" color="#fff" position="absolute" top="0" right="0.3rem"><Text>-46%</Text></Box>
        </Link>
            
        </Box>
    )
}
