import React from 'react'
import { Box,Link, Image} from "@chakra-ui/react"
import Toast from '../img/bake.jpg'

export default function FeaturedProducts() {
   
       
    return (
        <Box textAlign="center" p="10px"  maxW="15%" m="10px 5px" bg="#ffffff" position="relative" borderRadius="3px" boxShadow="2px 2px 5px #bebebe,
             -2px -2px 5px #ffffff" 
              _hover={{
        boxShadow: "5px 5px 5px #bebebe , -5px -5px 2px #ffffff",
        transform:"scale(1.1)"
        }}>
        <Link href="/" p _hover={{textDecoration:"none" }}>
            <Image src={Toast} style={{borderRadius:"19px 19px 19px 19px"}}></Image>
            <Box>Product name</Box>
            
            
        </Link>
            
        </Box>
    )
}
