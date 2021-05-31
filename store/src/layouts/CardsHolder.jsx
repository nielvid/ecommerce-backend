import React from 'react'
import { Flex, Box, Heading} from "@chakra-ui/react"

export default function CardsHolder({children}) {
    return (
        <Box  p='2px 10%'>
         <Box width="100%" bg="#ff0"  p="1rem 2rem" mt="1.5rem"><Heading>Top Selling Items</Heading></Box>
        <Flex p='4rem 2rem'  bg="#ffffff"  justifyContent="space-around" flexWrap="wrap">
       
            {children}
        </Flex>
        </Box>
    )
}
