import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import {
  Provider as AppBridgeProvider,
  useAppBridge,
} from "@shopify/app-bridge-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { Redirect } from "@shopify/app-bridge/actions";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

import { HomePage } from "./components/HomePage";
import { ApiTest } from "./components/ApiTest";
import Niya from "./components/Niya";
import NavBar from "./components/NavBar";
import Continent from "./components/Continent";
import AddProducts from "./components/AddProducts";
import { ProductsPage } from "./components/ProductsPage";
import { TestApi } from "./components/TestApi";
import HeaderNav from "./components/HeaderNav";
import ReadExcel from "./components/ReadExcel";
import BulkUpload from "./components/BulkUpload";
import Import from "./components/Import";

export default function App() {
  //console.log("repeat")
  return (
    <PolarisProvider i18n={translations}>
      <AppBridgeProvider
        config={{
          apiKey: process.env.SHOPIFY_API_KEY,
          host: new URL(location).searchParams.get("host"),
          forceRedirect: true,
        }}
      >
         <MyProvider>
       {/* <BrowserRouter>
          <Routes>
              <Route path="/" element={<TestApi />}/>
              <Route path="/addproducts" element={<AddProducts />}/>
          </Routes>
       </BrowserRouter> */}
       
          {/* <ReadExcel /> */}
          <HomePage />
         
          {/* <Import /> */}



          {/* <NavBar /> */}
          {/* <Niya /> */}
          {/* <ApiTest /> */}
          {/* <TestApi /> */}
        </MyProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  );
}

function MyProvider({ children }) {
  const app = useAppBridge();

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: "include",
      fetch: userLoggedInFetch(app),
    }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export function userLoggedInFetch(app) {
  const fetchFunction = authenticatedFetch(app);

  return async (uri, options) => {
    const response = await fetchFunction(uri, options);

    if (
      response.headers.get("X-Shopify-API-Request-Failure-Reauthorize") === "1"
    ) {
      const authUrlHeader = response.headers.get(
        "X-Shopify-API-Request-Failure-Reauthorize-Url"
      );

      const redirect = Redirect.create(app);
      redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`);
      return null;
    }

    return response;
  };
}
