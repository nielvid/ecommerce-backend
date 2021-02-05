import React from 'react'
import { Flex, Box, Heading} from "@chakra-ui/react"


export default function FeaturedCategory({children}) {
    return (
       <Box p='2px 10%'>
        <Box width="100%" bg="#ffffff" p="10px 20px" mt="15px" color="#000000"><Heading>Featured Categories</Heading></Box>
        <Flex  p='30px 10px' bg="#ffffff" justifyContent="space-around" flexWrap="wrap">
       
            {children}
        </Flex>
        </Box>
    )
}
