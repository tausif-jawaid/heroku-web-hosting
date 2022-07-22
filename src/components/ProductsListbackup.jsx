import { from } from "@apollo/client";
import { ResourceList, TextStyle, Stack, Thumbnail, Icon } from "@shopify/polaris";
import {
  ExportMinor
} from '@shopify/polaris-icons';

import React from 'react';
import {Grid, GridColumn, GridToolbar} from '@progress/kendo-react-grid';
import {ExcelExport} from '@progress/kendo-react-excel-export';

export function ProductsList({ data }) {
  console.log(data)

  const data1 = data.nodes;

  const _export = React.useRef(null);

  const excelExportFile = () => {
     if(_export.current !== null){
        _export.current.save();
     }
  }

  // return (
  //   <ExcelExport data={data1} ref={_export}>
  //     <Grid data={data1}>
  //       <GridToolbar>
  //         <button onClick={excelExportFile}>
  //           Export
  //         </button>
  //       </GridToolbar>
  //       <GridColumn field="title" />
  //       <GridColumn field="handle" />
  //       <GridColumn field="descriptionHtml" />
  //     </Grid>
  //   </ExcelExport>
  // )


  return (
    <>
     
    <ResourceList // Defines your resource list component
      showHeader
      resourceName={{ singular: "Product", plural: "Products" }}
      items={data.nodes}
      renderItem={(item) => {
        const media = (
          <Thumbnail
            source={
              item.images.edges[0] ? item.images.edges[0].node.originalSrc : ""
            }
            alt={item.images.edges[0] ? item.images.edges[0].node.altText : ""}
          />
        );
        const price = item.variants.edges[0].node.price;
        
        return (
          <ResourceList.Item
          
            id={item.id}
            media={media}
            accessibilityLabel={`View details for ${item.title}`}
            onClick={() => {
              store.set("item", item);
            }}
          >
            <Stack>
              <Stack.Item fill>
                <h3>
                  <TextStyle variation="strong">{item.title}</TextStyle>
                </h3>
              </Stack.Item>
              <Stack.Item>
                <p>₹ {price}</p>
              </Stack.Item>
            </Stack>
          </ResourceList.Item>
        );
      }}
    />
    </>
  );
}
