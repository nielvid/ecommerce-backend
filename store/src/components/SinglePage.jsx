import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Box, Flex, Image, Text, Heading} from "@chakra-ui/react"
import Phone from '../img/phone.jpg'
import { addToCart,removeFromCart, login, addItem, removeItem} from "../state/app/reducers"

export default function SinglePage() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.user)
     const cartItems = useSelector(state => state.item)
    console.log(state)
     console.log(cartItems)

    const addItemToCart = ()=>{
       
        dispatch(addToCart())
         dispatch(addItem({item:"6 inches Tv", id: 3, amount:" N50, 000", rating: "good"}))
        
    }

    const RemoveItemFromCart = ()=>{
        dispatch(removeFromCart())
           dispatch(removeItem({item: "Samsung Phone", id:3}))
    }
const Login = ()=>{
     console.log("i should increase")
    dispatch(login({name:"John", id: 10685, password: "pass1234"}))
}

    return (
        <>
            <Box  w="100%" p="5rem 10%" background="#f5f5f5">
            <Flex justifyContent="space-between">
            <Box mx={[0,"0.3em"]} boxShadow="1px 1px 2px #bebebe,
             -1px -1px 2px #ffffff">
               <Flex flexWrap="wrap" bg="white" boxShadow="2px 2px 5px #bebebe,
             -2px -2px 5px #ffffff" >
                  
                   <Box mx={["0.2em", "0.3em"]} my="1em" >
                <Image src={Phone} alt="Product" maxWidth="25rem" />
                
                </Box>
               
                   <Box mx={["0.2em", "0.5em"]} maxWidth="70rem" >    
                 <Box my="1em" >
                     <Heading fontSize="1.5rem"  maxWidth="60rem">
                          QUBO BIG1,6.26 Inch Screen,4500mAh ,16GB
               ROM,8MP Main Camera, QUBO BIG1,6.26 Inch Screen,4500mAh ,16GB
               ROM,8MP Main Camera, 
                     </Heading>
                  </Box>
               
                <Box my="1em" >
                    <Text>
                        Brand: QUBO | Similar products from QUBO
                    </Text>
                </Box>
                     <Box my="1em" >
                         <Text>rating (36 rating)</Text>
                     </Box>
                
                <Box my="1em" > <Heading>N49,000.00</Heading></Box>
                    
                    <Box my="1em" >
                        <Text> + shipping from ₦ 180 to LEKKI-AJAH (SANGOTEDO)</Text>
                    </Box>
                
                      <Box as="button" my="1em" textAlign="center" w="100%" bg='#f68b1e' p="0.2em 1em" fontSize="1em"fontWeight="500"  color="white" onClick={addItemToCart }>
                          ADD TO CART
                      </Box>
                        <button onClick={RemoveItemFromCart}>remove from cart</button>
                      <button onClick={Login}>login</button>
                   </Box>
               </Flex>
              <Box w="100%" bg="white"  >
                   <Box my="1em" p="0.5em 2em" borderBottom="0.2em solid #f5f5f5" >
                   <Heading>Product Details</Heading>
                   </Box>
                   <Box maxWidth="80rem"  m="1em auto" p="0.5em 1em" >
                       <Text textAlign="justify">
                           Qubo- comes from Spain, Europe,aims to bring consumers high-quality and cost-effective creative electronics products.Design and develop by the Spanish team and produce in China. Hope you have a good experience on our devices.

Qubo BIG series /  BIG 1- An affordable large screen & large battery 3G entry-level android smartphone

Description:

The bigger,the better. The BIG 1 quipped with 6.26 inch FW+ IPS screen which will bring you a better experience on games,videos,reading.

Photographer could be interesting.The BIG 1 with 5MP front camera allows you to enjoy vivid selfies.Beside, HD Rear Camera 8MP  enable you get High quality shooting moments.

No need to carried chargers around at all time. Super lasting powered by 4500mAh battery which lets you be more energetic in business, games,videos and reading. 

Big built-in memory let you love more. Qubo BIG1 comes with 16GB of Rom which make you have more room to do more things you like, such games, videos,books and pictures. 

Secure all information in your device. BIG1 comes with Rear fingerprint recognition. You don’t need to remember a complex password,only your fingerprint can unlock the phone. 

The BIG 1 comes with the latest android 10 , App switching is now faster and more efficient, with apps launching 10% faster than before.

Main features:

Display: 6.26 inch IPS FW+ waterdrop fullview screen
Memory: RAM 1GB / ROM16GB ( Expandable up to 32GB via microSD card)
Camera: Rear main camera 8.0MP with flashlight /Front camera 5.0MP
Battery: 4500 mAh battery
CPU: MTK6580-Quad Core 1.3 GHz
GPU: ARM Mali400 MP2
System OS: Android 10 (go edition)
SIM Card: Nano SIM + Nano SIM
                       </Text>
                   </Box>
                   
               </Box>
              </Box>
            
                <Box display={["none", "block"]} height="100vh" background="white"  boxShadow="1px 1px 2px #bebebe,
             -1px -1px 2px #ffffff">
               <Box p="0.5em 2em" textAlign="center">
                    <Heading fontSize={["0.6em", "0.8em"]} >More Details</Heading>
               </Box>
                <Box  >
                <Image src={Phone} alt="Product" />
                </Box>
                </Box>
            </Flex> 
            </Box>
        </>
    )
}
