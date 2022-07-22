
import { gql, useQuery } from "@apollo/client";
import { Page, Layout, Banner, Card,Icon, Link } from "@shopify/polaris";
import { Loading } from "@shopify/app-bridge-react";
import { ProductsPage } from "./ProductsPage";
import {
  MobileBackArrowMajor
} from '@shopify/polaris-icons';

const GET_PRODUCTS_BY_ID = gql`
   query{
     products (first: 50){
        edges{
          node{
            id
          }
        }
     }
   }
`;


export function TestApi() {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: null,
  });

  //console.log(data)

  if (loading) return <Loading />

  if (error) {
    console.warn(error)
    return (
      <Banner status="critical">There was an issue loading products.</Banner>
    );
  }


  const arrData =  data.products.edges
  //console.log(arrData)

  let new_arr = [];

  arrData.map((data,index) => {
    new_arr.push(`${(data.node.id).toString()}`);
  })

 // console.log(new_arr);

  return (
    <>
    {/* <Link url="/">{<Icon source={MobileBackArrowMajor} color="base"/>}</Link> */}
    <Page fullWidth  sectioned title=''>
      <Layout>
        <Layout.Section> 
            <ProductsPage new_arr={new_arr} />
        </Layout.Section>
      </Layout>
    </Page>
    </>
  );
}
