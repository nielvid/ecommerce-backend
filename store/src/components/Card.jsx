import React from 'react'
import { Flex, Box,Link, Image, Text, Heading, Button,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,} from "@chakra-ui/react"
  import { useDisclosure } from "@chakra-ui/react"
//import {ProductContext} from "../App"

export default function Card() {

   /* let data = useContext(ProductContext)

    data = data.state.data
    
    */
   let data = [];

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()



    return (
        <>
        {data ? data.map((item)=>{
            return (
                <Box  p="5px"  maxW="23%"
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
        
        <Link to="/"_hover={{textDecoration:"none" }}>
            <Image src={item.images} style={{borderRadius:"19px 19px 19px 19px"}}></Image>
            <Heading>{item.product_name}</Heading>
            <Flex justifyContent="space-between" alignItems="center">
            <Box>
               

      <Button mt={4} onClick={onOpen}>
        Product Description
      </Button>
      <Modal size='3xl'  finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.product_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          {item.description}
          </ModalBody>

        </ModalContent>
      </Modal>
            </Box>
            <Text mr="3px">category: {item.category} </Text>
            </Flex>
            <Flex justifyContent="space-between" p="0 10px">
            <Heading>{item.sales_price} </Heading>
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
