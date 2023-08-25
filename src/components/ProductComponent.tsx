
import { ProductContract } from "../contracts/ProductContract"
import { useEffect, useState } from "react"
import { Button } from "@mui/material";
export  default function ProductComponent(){

    const [product ,setProduct ] = useState <ProductContract> ();

    useEffect (()=>{
            setProduct({
                 Name :"Tv",
                 Price :45600,
                 Stock :true
            })
    } ,[])


    function handleClick(){
        alert('REgistered')
    }

//   var  product : ProductContract = {

//             Name :"TV",
//             Price : 4500.5,
//             Stock :true
//   }
    return (
        <div style={{'marginLeft':'200px'}}>
            <dl>
                <dt>Name</dt>
                <dd>{product?.Name}</dd>

                <dt>Price</dt>
                <dd>{product?.Price}</dd>

                <dt>Stock</dt>
                <dd>{product?.Stock}</dd>

            </dl>
             <Button onClick={handleClick} variant="outlined" color="primary"> Register </Button>
        </div>
    )

}