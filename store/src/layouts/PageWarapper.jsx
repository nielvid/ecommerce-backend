import React from 'react'
import { Box } from "@chakra-ui/react"
import Content from './Content'
import Header from "../common/Header";
import TopHeader from "../common/TopHeader";
import Footer from "../common/Footer"

export default function PageWarapper({children}) {
    return (
        <Box w="100%" h="100vh"  bg="#ededed">
         <TopHeader />
       <Header />
           <Content>{children}</Content> 
           <Footer />
        </Box>
    )
}
