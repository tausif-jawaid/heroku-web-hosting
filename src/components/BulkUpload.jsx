import React from 'react'
import { gql, useMutation } from '@apollo/client';


export default function BulkUpload(jsonData){
    var counter,productInput;
    var e;
    for(e=0; e<jsonData.length; e++){

         
        // if(data) return `Product Added Successfully!`;

        const handle = jsonData[e].Handle;
        const title  = jsonData[e].Title;
        const compare_price  = jsonData[e].Compare_Pirce;
        const sku  = jsonData[e].SKU;
        const price  = jsonData[e].Price;
        //counter = console.log(`handle ${handle}, title ${title} , compare_price ${compare_price} , sku ${sku} , price ${price}`);

        // const ADD_NEW_PRODUCT = gql`
        //     mutation productCreate($input: productInput!){
        //         productCreate(input : $input){
        //         product{
        //             id
        //             title
        //             handle
        //             }
        //         }
        //     }`;

        const productInput = {
            input:{
                handle: handle,
                title: title,
                variants: {
                    price: price,
                    sku: sku,
                    compareAtPrice : compare_price
                }
            }
        }

       // const [productCreate, {data,loading,error}] = useMutation(ADD_NEW_PRODUCT);


    }

    return(
        productInput
    )
}

// export  {BulkImport}