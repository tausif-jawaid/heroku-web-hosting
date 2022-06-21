import React from 'react'
import {
    Button,
    IndexTable,
    Card,
    Page,
    DataTable,
    Layout,
    TextContainer,
    Image,
    Stack,
    Heading,
    ButtonGroup,
  } from "@shopify/polaris";

  import {Link} from "react-router-dom";

export default function HeaderNav() {
  return (
    <Layout>
        <Layout.Section secondary>
              <header>
                <nav>
                  <ButtonGroup>
                    <Link to="/"><Button primary>Products</Button></Link>
                    <Link to="/addproducts"><Button primary>Add Products</Button></Link> 
                  </ButtonGroup>
                </nav>
              </header>
          </Layout.Section>
      </Layout>
  )
}
