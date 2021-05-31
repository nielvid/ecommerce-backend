import React from 'react'
import {  Button} from "@chakra-ui/react"

export default function Buttons(props) {
    const { children,  ...rest } = props;
  return (
    <Button
      py="20px"
      bg="#f68b1e"
      color="#fff"
     
      {...rest}
      
    >
      {children}
    </Button>
  )
}
