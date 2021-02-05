import React from 'react'
import { chakra } from "@chakra-ui/react"
// import {ReactComponent as Find} from "./assets/loupe.svg"
import {ReactComponent as User} from "../common/assets/user.svg"
import {ReactComponent as Cart} from "../common/assets/cart.svg"
import {ReactComponent as Help} from "../common/assets/information.svg"
import { Flex,  Image, Input} from "@chakra-ui/react"


import Buttons from './Buttons'


export default function Header() {
    const Carts = chakra(Cart)
    return (
        <Flex justifyContent="space-between" bg="#ffffff" w="100%" p=" 9px 10%">
            <Image d="inline" w="60px" src="https://res.cloudinary.com/netsignreg/image/upload/v1612347532/logo_b10yg3.png" alt="logo"  />
            <Flex>
            <Input fontSize="1em" size="md" ml="25px" mr="5px" d="inline" w="550px" h="38px" placeholder="Search products" />
            <Buttons>Search</Buttons>
            </Flex>
            <Buttons bg="transparent" fontSize="1.1em" color="000000"><User width="30px"  height="30px"color="000000" display="inline-block" mr="4px" /><span>Login</span></Buttons>
            <Buttons bg="transparent" fontSize="1.1em" color="000000"><Help width="30px"  height="30px"color="000000" display="inline-block" mr="4px" /><span>Help</span></Buttons>
              <Buttons bg="transparent" fontSize="1.1em" color="000000"><Carts width="30px"  height="30px"color="000000" display="inline-block" mr="4px" /><span>Cart</span></Buttons>
         </Flex>
    )
}
