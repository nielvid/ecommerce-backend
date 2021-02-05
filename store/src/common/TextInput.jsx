import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import {React, useState} from 'react'


function TextInput({children,leftIcon,rightIcon, type, placeholder, ...rest }) {
    const [focus,setFocus] = useState(false)
    
    return (
           <InputGroup
       // borderRadius="20px"
        border={focus ? '1px solid #9ba09c' : '1px solid #B5B5B5'}
        alignItems="center"
       
        {...rest}>
    <InputLeftElement
      pointerEvents="none"
      children={leftIcon}
      ></InputLeftElement>
    <InputRightElement
      pointerEvents="none"
      children={children}
      >
          {rightIcon}
      </InputRightElement>
    <Input 
    type={type}
    border="none"
    py=".5rem"
    px=".5rem"
    fontSize="1.8rem" 
    color= "#020113"
    placeholder={placeholder} 
    //rounded="20px" 
    focusBorderColor="transparent" 
    w="30%" 
    d="inline"
    onFocus={() => setFocus(true)}
    onBlur={() => setFocus(false)} />
  </InputGroup>
    )
}

export default TextInput
