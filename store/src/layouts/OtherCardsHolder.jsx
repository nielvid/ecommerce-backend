import React from 'react'
import { Flex, Box, Heading} from "@chakra-ui/react"

export default function OtherCardsHolder({children}) {
    return (
        <Box p='2px 10%'>
        <Box width="100%" bg="#f00" p="1rem 2rem" mt="1.5rem" color="#ffffff"><Heading>Deals of the Day: N2, 000.00</Heading></Box>
        <Flex p='4rem 2rem' bg="#ffffff" justifyContent="space-around" flexWrap="wrap">
       
            {children}
        </Flex>
        </Box>
    )

}

