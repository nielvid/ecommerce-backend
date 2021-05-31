import React from 'react'
import { Flex, Box, Heading} from "@chakra-ui/react"


export default function FeaturedCategory({children}) {
    return (
       <Box p='2px 10%'>
        <Box width="100%" bg="#ffffff" p="1rem 2rem" mt="1.5rem" color="#000000"><Heading>Featured Categories</Heading></Box>
        <Flex  p='4rem 2rem'  bg="#ffffff" justifyContent="space-around" flexWrap="wrap">
       
            {children}
        </Flex>
        </Box>
    )
}
