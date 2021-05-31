import React from 'react'
import {useSelector} from "react-redux"
import { chakra, Box, Text } from "@chakra-ui/react"
// import {ReactComponent as Find} from "./assets/loupe.svg"
import {ReactComponent as User} from "../common/assets/user.svg"
import {ReactComponent as Cart} from "../common/assets/cart.svg"
import {ReactComponent as Help} from "../common/assets/information.svg"
import { Flex,  Image, Input} from "@chakra-ui/react"


import Buttons from './Buttons'


export default function Header() {
    const state = useSelector(state => state.cart.value)
    console.log(state)
    const Carts = chakra(Cart)
    return (
        <Flex justifyContent="space-between" bg="#ffffff" w="100%" p=" 9px 10%">
            <Image d="inline" w={["15%", "8%", "3%"]} src="https://res.cloudinary.com/netsignreg/image/upload/v1612347532/logo_b10yg3.png" alt="logo"  />
            <Flex w="45%" display={["none", "none", "block"]} justifyContent="start">
            <Input fontSize={["0.6rem", "0.8em"]}  ml="0.8rem"  d="inline" w={["40%","75%" ]} h="38px" placeholder="Search products" />
            <Buttons>Search</Buttons>
            </Flex>
            <Flex justifyContent="space-around">
                <Buttons bg="transparent" fontSize="0.8em" color="000000"><User width="1rem"  height="1rem" color="000000" display="inline-block" mr="4px" /><span>Login</span></Buttons>
            <Buttons bg="transparent" fontSize="0.8em" color="000000"><Help  width="1rem"  height="1rem" color="000000" display="inline-block" mr="4px" /><span>Help</span></Buttons>
              <Box as="button" bg="transparent" _hover={{ background: "gray.500"}} borderRadius="5px" px="0.6rem" fontSize="0.8em" color="000000" position="relative" fontWeight="600" ><Carts width="1rem"  height="1rem" color="000000" display="inline-block" mr="4px" /><Text bg="#f68b1e" color="white" w="1.6rem" h="1.9rem" borderRadius="50%" position="absolute" top="-0.3rem">{state}</Text><span>Cart</span></Box>
            </Flex>
         </Flex>
    )
}

