import React, {useState} from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Stack, Box, Input, Button, Heading, Flex, Text} from "@chakra-ui/react"
import ImageThumb from "./ImageThumb";
import {Link} from 'react-router-dom'; 


export default function AddNewProduct() {


    const [file, setFile] = useState("");
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [salesPrice, setSalesPrice] = useState("");
    const [discount, setDiscount] = useState("");



    function handleChange(event) {
    setFile(event.target.files[0]);
     //setFile(event.target.files);  for uploading multiple files
    
  }
  function handleChange2(event) {
    setProductName(event.target.value)
  }
   function handleChange3(event) {
       
    setDescription(event.target.value)
  }
 function handleChange4(event) {
  
   let data = event.target.value
   data = data.split(",");
 console.log(data)
    setCategory(data)
  }
   function handleChange5(event) {
    setPrice(event.target.value)
  }
   function handleChange6(event) {
    setSalesPrice(event.target.value)
  }
   function handleChange7(event) {
    setDiscount(event.target.value)
  }

   const Logout = ()=>{
    axios.get("/api/v1/logout",{ withCredentials: true }, {Header:
      {
         Cookie: "ecommerce"
     }} ).then((res)=>{
      console.log(res)
    }).catch(err => console.log(err))

  }
const Upload = ()=>{
    
   
    var data = new FormData();
    data.append("image", file);
    data.append("productName", productName);
    data.append("description", description);
    data.append("category", category);
    data.append("price", price);
    data.append("salesPrice", salesPrice);
    data.append("discount", discount);
    
    //const local = "http://localhost:5000/api/v1/newpost"
    axios
      .post("/api/v1/add-product", data)
      .then(res => {
        console.log(res);
        toast.success('File successfully uploaded')
      })
      .catch(err => {
        console.log(err.message);
        toast.error('File not uploaded')
      });
    }

return (
        <Box w="50%" p="15px 25px" m="15px auto" bg="#ffffff" border="2px #ffffff solid">
       <Flex justifyContent="space-between" marginBottom="15px">
       <Heading> Add New Product</Heading> 
       <Link to="/"><Button>Home</Button></Link>
       <Button onClick={Logout}>Logout</Button>
       </Flex> 
        <ToastContainer />
        <Box>
        <Stack spacing={3}>
  <Input placeholder="Product Name" size="lg" fontSize="1.1em" value={productName}  onChange={handleChange2}/>
  <Input placeholder="Description" size="lg" fontSize="1.1em" value={description} onChange={handleChange3}/>
  <Input placeholder="Category" size="lg"fontSize="1.1em"  value={category} onChange={handleChange4}/>
  <Input placeholder="Price" size="lg" fontSize="1.1em" value={price} onChange={handleChange5}/>
  <Input placeholder="Sale Price" size="lg" fontSize="1.1em" value={salesPrice} onChange={handleChange6}/>
   <Input placeholder="Discount" size="lg" fontSize="1.1em" value={discount} onChange={handleChange7}/>
  <Input type="file" onChange={handleChange} fontSize="1em" size="lg" mb="15px" />
</Stack>
<Button bg="#000000" color="#ffffff" p="20px" m="15px" fontSize="1.2em" onClick={Upload}>upload</Button>
        </Box>
              <Box mt="20px">
              <Heading>Image Preview</Heading>
      <Text>Filename: {file.name}</Text>
      <Text>File type: {file.type}</Text>
      <Text>File size: {file.size} bytes</Text>
      {file && <ImageThumb image={file} />}
</Box>
        </Box>
    );
}
