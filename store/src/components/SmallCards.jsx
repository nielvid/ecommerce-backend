import React from 'react'
import { Box,Link, Image, Text, Heading, Flex} from "@chakra-ui/react"
import Phone from '../img/phone.jpg'

export default function SmallCards() {
    
    return (
        <Box  p="10px"  maxW="15%" m="10px 5px" bg="#ffffff" position="relative" borderRadius="19px" boxShadow="2px 2px 5px #bebebe,
             -2px -2px 5px #ffffff" 
              _hover={{
        boxShadow: "5px 5px 5px #bebebe , -5px -5px 2px #ffffff",
        transform:"scale(1.1)"
        }}>
        <Link href="/" p _hover={{textDecoration:"none" }}>
            <Image src={Phone} style={{borderRadius:"19px 19px 19px 19px"}}></Image>
            <Box>Product name</Box>
            <Flex justifyContent="space-evenly" p="0 2px">
            <Heading fontSize='1.1em'>N4000.00</Heading>
                 <Text textDecoration = "line-through" opacity="0.5">N5500.00</Text>
            </Flex>
            
            <Box bg="#f00" w="25%" color="#fff" position="absolute" top="0" right="3px"><Text>-46%</Text></Box>
        </Link>
            
        </Box>
    )
}
