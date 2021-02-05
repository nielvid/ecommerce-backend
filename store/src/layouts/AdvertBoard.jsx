import React from 'react'
import {  Box} from "@chakra-ui/react"

export default function AdvertBoard({children}) {
    return (
        <Box p='2px 10%'>
        
        <Box  p='2px 10px' bg="#ffffff" >
       
            {children}
        </Box>
        </Box>
    )
}
