import React from 'react'

import { Flex, Box, Text, Link, 
     List, ListItem, 
        UnorderedList, Button, Image, Input} from "@chakra-ui/react"
import  Apps from "./../img/appstore.png"
import  Apps2 from "./../img/appstore_2.png"

export default function Footer() {



    return (
        <Box bg="#323232" w="100%">
        <Box  p='35px 10%' bg="#282828" w="100%" color="#ffffff">
        <Flex justifyContent="space-between">
        <Box><Image src="https://res.cloudinary.com/netsignreg/image/upload/v1612347532/logo_b10yg3.png" alt="logo" w="100px"/></Box>
        <Box>
            <Text textTransform="uppercase">New to DgtallMall</Text>
            <Text fontSize="0.8em">Subscribe to our newsletter to get updates on our latest offers!</Text>
            <Flex>
            <Input type="text" name="subscrie" placeholder="Enter your email address" bg="#ffffff" fontSize="1.1em"/>
            <Button bg="transparent" border="1px solid #ffffff" color="#ffffff" fontSize="1.1em">subscribe</Button>
            </Flex>
        </Box>
        <Box><Text>DOWNLOAD DGTALLMALL FREE APP</Text>
        <Text>Get access to exclusive offers!</Text>
        <Flex justifyContent="flex-start">
             <img src={Apps} alt="App store" width="150px" display="inline" />
        <img src={Apps2} alt="App store" width="150px" style={{marginLeft: "10px"}}/>
        </Flex>
       
        </Box>
          
            
            </Flex>
        </Box>
        <Box p='35px 10%'>
            <Flex justifyContent="space-between" color="#ffffff">
                <Box>
                <Text textTransform="uppercase">Let's Help You</Text>
                <UnorderedList fontSize="0.7em" pt="20px" ml="0">
                <List spacing={3}>
                   <ListItem><Link href="/">Help Center</Link></ListItem> 
                    <ListItem><Link href="/">How to shop on DgtalMall?</Link></ListItem>
                   <ListItem><Link href="/">Delivery options and timelines</Link> </ListItem>
                    <ListItem><Link href="/"> How to return a product on DgtallMall?</Link></ListItem>
                    <ListItem><Link href="/"> Corporate and bulk purchases</Link></ListItem>
                    <ListItem> <Link href="/">Report a Product</Link></ListItem>
                     </List>
                </UnorderedList>
                </Box>

                 <Box>
                 <Text textTransform="uppercase">About DgtallMall</Text>
                 <UnorderedList fontSize="0.7em" pt="20px" ml="0">
                <List spacing={3}>
                   <ListItem><Link href="/">About us</Link></ListItem> 
                    <ListItem><Link href="/">Other Services</Link></ListItem>
                   <ListItem><Link href="/">Events</Link> </ListItem>
                    <ListItem><Link href="/">Promotions</Link> </ListItem>
                    <ListItem><Link href="/">Career</Link></ListItem>
                    <ListItem><Link href="/"> Corporate and bulk purchases</Link></ListItem>
                    <ListItem> <Link href="/">Terms and Condition</Link></ListItem>
                    <ListItem> <Link href="/">Privacy Policy</Link></ListItem>
                     </List>
                </UnorderedList></Box>
                  <Box>
                  <Text textTransform="uppercase">Affiliates</Text>
                  <UnorderedList fontSize="0.7em" pt="20px" ml="0">
                <List spacing={3}>
                   <ListItem><Link href="/">Sell on DgtallMall</Link></ListItem> 
                    <ListItem><Link href="/">Become a Sales Consultant</Link></ListItem>
                   <ListItem><Link href="/">Become a Logistic Agent</Link> </ListItem>
                    <ListItem><Link href="/"> Become a Service Center</Link></ListItem>
                     </List>
                </UnorderedList>
                  </Box>
                   <Box><Text textTransform="uppercase">Our International Partners</Text>
                   <Flex justifyContent="space-between">
                       <UnorderedList fontSize="0.7em" pt="10px" ml="0">
                <List spacing={3}>
                   <ListItem display="inline" mr="15px"><Link href="/">Mojoi Couture</Link></ListItem> 
                    <ListItem display="inline" mr="15px"><Link href="/">Bella Apparel</Link></ListItem>

                     </List>
                </UnorderedList>
                   </Flex>
                   <Flex justifyContent="space-between">
                       <UnorderedList fontSize="0.7em" pt="10px" ml="0">
                <List spacing={3}>
                   <ListItem display="inline" mr="15px"><Link href="/">Katty Kitchen</Link></ListItem> 
                    <ListItem display="inline" mr="15px"><Link href="/">Glow Skin </Link></ListItem>

                     </List>
                </UnorderedList>
                   </Flex>
                   <Flex justifyContent="space-between">
                       <UnorderedList fontSize="0.7em" pt="10px" ml="0">
                <List spacing={3}>
                   <ListItem display="inline" mr="15px"><Link href="/">Ajax Clothings</Link></ListItem> 
                    <ListItem display="inline" mr="15px"><Link href="/">Tara Apparel</Link></ListItem>

                     </List>
                </UnorderedList>
                   </Flex>
                   <Flex justifyContent="space-between">
                       <UnorderedList fontSize="0.7em" pt="10px" ml="0">
                <List spacing={3}>
                   <ListItem display="inline" mr="15px"><Link href="/">Curtis Design</Link></ListItem> 
                    <ListItem display="inline" mr="15px"><Link href="/">Sproff Tech</Link></ListItem>

                     </List>
                </UnorderedList>
                   </Flex>
                   </Box>
            </Flex>
        </Box>
            <Box  p='35px 10%' bg="#282828" w="100%" color="#ffffff" textAlign="center">
                <Text>&copy; 2021 | <Link href="/" >Nielvid Technologies</Link></Text>
            </Box>
        </Box>
            
        
    )
}
