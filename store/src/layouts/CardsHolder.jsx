import React from 'react'
import { Flex, Box, Heading} from "@chakra-ui/react"

export default function CardsHolder({children}) {
    return (
        <Box  p='2px 10%'>
         <Box width="100%" bg="#ff0" p="10px 20px"><Heading>Top Selling Items</Heading></Box>
        <Flex p='30px 10px' bg="#ffffff"  justifyContent="space-around" flexWrap="wrap">
       
            {children}
        </Flex>
        </Box>
    )
}
