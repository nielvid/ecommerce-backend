import React, {useContext} from 'react'
import { Flex, Box,Link, Image, Text, Heading, Button,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,} from "@chakra-ui/react"
  import { useDisclosure } from "@chakra-ui/react"
import {Products} from "../state/contexts/context"

export default function Card() {
let name = useContext(Products)
console.log(name)

   //let data = useContext(ProductContext)

    //data = data.state.data
    //console.log(data)
    
   let data = [];

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()



    return (
        <>
        {data ? data.map((item, index)=>{
            return (
                <Box  p="1rem"  maxW="23%"
        m="5px" bg="#ffffff"
        position="relative" 
        borderRadius="19px" 
        boxShadow="2px 2px 5px #bebebe,
             -2px -2px 5px #ffffff"
        _hover={{
        boxShadow: "5px 5px 5px #bebebe , -5px -5px 5px #ffffff",
        transform:"scale(1.1)"
        }}
            
        >
        
        <Link to="/" _hover={{textDecoration:"none" }}>
            <Image src={item.image} style={{borderRadius:"19px 19px 19px 19px"}} key="index"></Image>
            <Heading key="index">{item.productName}</Heading>
            <Flex justifyContent="space-between" alignItems="center">
            <Box>
               

      <Button mt={4} onClick={onOpen}>
        Product Description
      </Button>
      <Modal size='3xl'  finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader key="index">{item.productName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody key="index" >
          {item.description}
          </ModalBody>

        </ModalContent>
      </Modal>
            </Box>
            <Text mr="0.3rem" key="index">category: {item.category} </Text>
            </Flex>
            <Flex justifyContent="space-between" p="0 1rem">
            <Heading key="index">{item.salesPrice} </Heading>
                <Text textDecoration = "line-through" opacity="0.5">{item.price}</Text>
            </Flex>
            
            <Box bg="#f00" w="18%" color="#fff" position="absolute" top="0" right="5"><Text>{item.discount}</Text></Box>
        </Link>
            
        </Box>
            )
        }): "data loading"}
        
        </>
    )
}
