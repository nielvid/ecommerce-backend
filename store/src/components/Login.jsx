import React,{ useState} from 'react'
import '../App.css';
import { Stack, Box, Input, Button, Text } from "@chakra-ui/react"
import {Link, useHistory} from "react-router-dom";
import axios from 'axios'


function Login() {
 const history = useHistory() // hooks for redirection
    
if(localStorage.getItem('token')){
  history.push('/home'); //redirect to login page
}

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

const LoginUser = (e)=>{
    e.preventDefault()
    const user = {
        email: email,
       password:password
     
    }
    axios.post('api/v1/login', user).then((res) => {
        console.log(res)
      
        history.push('/add-product'); //redirect to login page
        
}).catch((err) =>{
        //console.log(err)
        setError(err.response.data.error);
    })
}

    return (
        <>
              <Box w="50%" m="15px auto" bg="#ffffff">
        <Box>
            <Box className="logo">
                <Box color='#252b72'/>
            </Box>
        </Box>
    <h2 style={{ textAlign: 'center'}}>Login</h2>
    <Stack>
        <Box>
<Box>
    <i className="fa fa-envelope"></i>
    <Input type="email" className="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    </Box>

    <Box>
    
        <i className="fa fa-lock"></i>
    <Input type="password" className="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </Box>  

    
        </Box>
</Stack>
{error ? <p style={{textAlign:'center', fontSize:'22px'}}>{error}</p> : null}
<Button type="submit" onClick={LoginUser}> Login</Button>
<Text>Don't have account? <Link to="/" className="link" style={{textDecoration: 'none',
    color: '#ffffff'}} >Sign up</Link> </Text>

</Box>
        </>
    )
}

export default Login



 