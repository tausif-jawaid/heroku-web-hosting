import {
  IndexTable,
  Card,
  Page,
  DataTable,
  Layout,
  TextContainer,
  Image,
  Stack,
  Heading,
  Button,
} from "@shopify/polaris";
import React from 'react'
import axios from "axios"
import { useState } from "react";
import {Link} from "react-router-dom";
import HeaderNav from "./HeaderNav";

 function Niya() {
    const fetchData = async () => {
        const api_url = "https://countries.trevorblades.com/graphql"
        const res = await axios.post(api_url, {
            query: `{
              countries {
                name
                code
                capital
              }
            }`,
            variables: null,
            crossDomain: true
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
        return res.data.data.countries;
    }
    let fdata = fetchData()

    const [arrData, setArrData] = useState([])
     fdata.then(result => {
     // console.log(result)
      setArrData(result)
    });
  
    console.log(arrData);


   



  return (

    <Page >
      <HeaderNav />
      <Layout>
        <Layout.Section secondary>
            <Card title="Country List" sectioned>
              <table className="table">
                      <thead>
                          <tr>
                              <th>S.N</th>
                              <th>Country Name</th>
                              <th>Country Code</th>
                              <th>Country Capital</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                            arrData.map((data, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.code}</td>
                                        <td>{data.capital}</td>
                                    </tr>
                                )
                            })
                          }
                      </tbody>
              </table>    
            </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default Niya
