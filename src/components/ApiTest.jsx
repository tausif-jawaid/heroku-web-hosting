import React from "react";
import { useEffect } from "react";

const raw_query = `{
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }`;

// const raw_query = `
// {
//     products(first: 3){
//         edges{
//             node{
//                 id
//                 title
//             }
//         }
//     }
//   }

// `;

export function ApiTest(){

    React.useEffect(() => {

        fetch('http://api.spacex.land/graphql/', {
            method : 'POST',
            headers: { "Content-Type" : "application/json",
                       "X-Shopify-Access-Token" : "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"
                        },      
            body : JSON.stringify({ query : raw_query })
        }).then(responce => responce.json())
        .then(  data => console.log(data))
    }, [])


    return(
        <div>
                {/* {fdata.map((d) => (
                    <div>
                         <p>{d.id}</p>: <p>{d.mission_name}</p>
                 </div>
                ))} */}
                {/* <p>{data}</p>: <p>{data}</p> */}
         </div>
    )
}