import React from 'react'
import { Box, Link, 
     List, ListItem, 
        UnorderedList,} from "@chakra-ui/react"

export default function Categories({onMouseLeave}) {
     // const [state, setstate] = useState(false)
     

//    const Hide = ()=>{
//       setstate(!state)
//    }
    return (
        <>
       <Box position="absolute" background="#ae3736" px="0.5rem" opacity="0.8"  onMouseLeave={onMouseLeave}>
             <UnorderedList>
        <List spacing={3} fontSize={["0.4em", "1em"]} fontWeight="500"  color="#fff">
<ListItem><Link to="/">Supermarket</Link></ListItem>
<ListItem><Link to="/">Phones & Tablets</Link></ListItem>
<ListItem><Link to="/">Home & Office</Link></ListItem>
<ListItem><Link to="/">Computing</Link></ListItem>
<ListItem><Link to="/">Health & Beauty</Link></ListItem>
<ListItem><Link to="/">Electronics</Link></ListItem>
<ListItem><Link to="/">Fashion</Link></ListItem>
<ListItem><Link to="/">Baby Products</Link></ListItem>
<ListItem><Link to="/">Gaming</Link></ListItem>
<ListItem><Link to="/">Sporting Goods</Link></ListItem>
<ListItem><Link to="/">Automobile</Link></ListItem>
<ListItem><Link to="/">Other categories</Link></ListItem>
</List>
</UnorderedList>
        </Box>
            
        </>
    )
}
