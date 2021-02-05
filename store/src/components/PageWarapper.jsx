import React from 'react'
import { Box } from "@chakra-ui/react"
import Content from './Content'

export default function PageWarapper({children}) {
    return (
        <Box w="100%" h="100vh"  bg="#ededed">
           <Content>{children}</Content> 
        </Box>
    )
}
