import React, {useState, useEffect} from 'react'
import { Box,Link, Image, Text} from "@chakra-ui/react"
import Phone from '../img/phone.jpg'

export default function SmallCards() {
     const [state, setState] = useState("")

     useEffect(()=>{
            setState('N5,500.00')
        },[])
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
            <Box>N4000.00 <br />
            <Text textDecoration = "line-through" opacity="0.5">{state}</Text>
            </Box>
            <Box bg="#f00" w="18%" color="#fff" position="absolute" top="10" right="10"><Text>-46%</Text></Box>
        </Link>
            
        </Box>
    )
}
