import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import trophyImgUrl from "../assets/home-trophy.png";
import Dashboard from "./Dashboard";

import { ProductsCard } from "./ProductsCard";
import { TestApi } from "./TestApi";
import AddProducts from "./AddProducts";


export function HomePage() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section secondary>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<TestApi />}/>
              <Route path="/addproducts" element={<AddProducts />}/>
          </Routes>
       </BrowserRouter>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
