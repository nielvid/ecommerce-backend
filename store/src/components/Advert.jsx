import React from 'react'
import { Box,Link, Image} from "@chakra-ui/react"
import Binatone from '../img/Binatone.jpg'


export default function Advert() {
    
    return (
        <Box  p="5px"  maxW="100%"
         bg="#ffffff"
        borderRadius="19px" 
        boxShadow="2px 2px 5px #bebebe,
             -2px -2px 5px #ffffff"
        _hover={{
        boxShadow: "5px 5px 5px #bebebe , -5px -5px 5px #ffffff",
        transform:"scaleY(.99)"
        }}
            
        >
        <Link href="/"_hover={{textDecoration:"none" }}>
            <Image src={Binatone} style={{borderRadius:"2px"}}></Image>
           
        </Link>
            
        </Box>
    )
}
