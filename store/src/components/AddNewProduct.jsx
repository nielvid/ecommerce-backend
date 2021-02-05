import React, {useState} from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Stack, Box, Input, Button, Heading, Flex} from "@chakra-ui/react"
import ImageThumb from "./ImageThumb";
import {Link} from 'react-router-dom'; 


export default function AddNewProduct() {


    const [file, setFile] = useState("");
    const [p_name, setPname] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("");
    const [price, setPrice] = useState("");
    const [salesp, setSalesp] = useState("");

    console.log(p_name)

    function handleChange(event) {
    setFile(event.target.files[0]);
     //setFile(event.target.files);  for uploading multiple files
    
  }
  function handleChange2(event) {
    setPname(event.target.value)
  }
   function handleChange3(event) {
       
    setDesc(event.target.value)
  }
 function handleChange4(event) {
    setCat(event.target.value)
  }
   function handleChange5(event) {
    setPrice(event.target.value)
  }
   function handleChange6(event) {
    setSalesp(event.target.value)
  }
const Upload = ()=>{
    
   
    var data = new FormData();
    data.append("images", file);
    data.append("product_name", p_name);
    data.append("description", desc);
    data.append(" category", cat);
    data.append("price", price);
    data.append("sales_price", salesp);
    
    axios
      .post("http://localhost:5000/api/v1/newpost", data)
      .then(res => {
        console.log(res);
        toast.success('File successfully uploaded')
      })
      .catch(err => {
        console.log(err);
        toast.error('File not uploaded')
      });
    }

return (
        <Box w="50%" p="15px 25px" m="15px auto" bg="#ffffff" border="2px #ffffff solid">
       <Flex justifyContent="space-between" marginBottom="15px">
       <Heading> Add New Product</Heading> 
       <Link to="/"><Button>Home</Button></Link>
       </Flex> 
        <ToastContainer />
        <Stack spacing={3}>
  <Input placeholder="Product Name" size="md" value={p_name}  onChange={handleChange2}/>
  <Input placeholder="Description" size="md"  value={desc} onChange={handleChange3}/>
  <Input placeholder="Category" size="md"  value={cat} onChange={handleChange4}/>
  <Input placeholder="Price" size="md"  value={price} onChange={handleChange5}/>
  <Input placeholder="Sale Price" size="md"  value={salesp} onChange={handleChange6}/>
  <Input type="file" onChange={handleChange}  size="sm"  />
</Stack>
<Button bg="#000000" color="#ffffff" p="20px" fontSize="1.2em" onClick={Upload}>upload</Button>
        
    
              <div>
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      {file && <ImageThumb image={file} />}
</div>
        </Box>
    );
}
