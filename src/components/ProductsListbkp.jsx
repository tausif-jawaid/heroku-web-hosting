import { ResourceList, TextStyle, Stack, Thumbnail } from "@shopify/polaris";
import {
  IndexTable,
  Card,
  Page,
  DataTable,
  Layout,
  TextContainer,
  Image,
  //Stack,
  Heading,
  Button,
} from "@shopify/polaris";
import { useState } from "react";
import Table from 'react-bootstrap/Table'

export function ProductsList({ data }) {
  console.log(" product list " +data)
  const arrData=  data.products.edges

  
  return(
    <Card title="Product List" sectioned>
      <Table  hover size="sm">
              <thead>
                  <tr>
                      <th>S.N</th>
                      <th>Images</th>
                      <th>Title</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    arrData.map((data, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><img src={data.node.images.edges[0] ? data.node.images.edges[0].node.originalSrc : "" }  alt="" width="60" height="70" /></td>
                                <td>{data.node.title ? data.node.title : "" }</td>
                                <td>₹ {data.node.variants.edges[0] ? data.node.variants.edges[0].node.price : "" }</td>
                            </tr>
                        )
                    })
                  }
              </tbody>
      </Table>    
    </Card>     
)
  
}
