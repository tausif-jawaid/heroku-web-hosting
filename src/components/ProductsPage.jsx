import { gql, useQuery } from "@apollo/client";
import { Page, Layout, Banner, Card } from "@shopify/polaris";
import { Loading } from "@shopify/app-bridge-react";
import { ProductsList } from "./ProductsList";
import HeaderNav from "./HeaderNav";

// const GET_PRODUCTS_BY_ID = gql`
//    query{
//      products (first: 50){
//         edges{
//           node{
//             id
//             title
//             images (first: 1) {
//               edges{
//                 node{
//                   id
//                   originalSrc
//                 }
//               }
//             }
//             variants (first :1){
//               edges{
//                 node{
//                   id
//                   price
//                 }
//               }
//             }
//           }
//         }
//      }
//    }
// `;



const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids ) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              id
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;





export function ProductsPage(new_arr) {
  const product_id_arr = new_arr.new_arr

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: {ids : product_id_arr},
  });

  //console.log(data)

  if (loading) return <Loading />;

  if (error) {
    console.warn(error);
    return (
      <Banner status="critical">There was an issue loading products.</Banner>
    );
  }

  return (
    <Page>
      <HeaderNav />
      <Layout>
        <Layout.Section>
          <Card>  
            <ProductsList data={data} />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
