import { from } from "@apollo/client";
import { ResourceList, TextStyle, Stack, Thumbnail, Icon } from "@shopify/polaris";
import {
  ExportMinor
} from '@shopify/polaris-icons';

import React from 'react';
import {Grid, GridColumn, GridToolbar} from '@progress/kendo-react-grid';
import {ExcelExport} from '@progress/kendo-react-excel-export';
import Table from "react-bootstrap/esm/Table";


export function ProductsList({ data }) {
  console.log(data)

  const data1 = data.nodes;

  const _export = React.useRef(null);

  const excelExportFile = () => {
     if(_export.current !== null){
        _export.current.save();
     }
  }

//   return (
//     <ExcelExport data={data1} ref={_export}>
//       <Grid data={data1}>
//         <GridToolbar>
//           <button onClick={excelExportFile}>
//             Export
//           </button>
//         </GridToolbar>
//         <GridColumn field="title" />
//         <GridColumn field="handle" />
//         <GridColumn field="descriptionHtml" />
//       </Grid>
//     </ExcelExport>
//   ) 


 return (
    <>
    <button onClick={excelExportFile}>
                 Export
              </button>
    <Table  hover size="sm" ref={_export}>
    <ExcelExport data={data1} ref={_export}>
      <Grid data={data1} >
        <GridToolbar>
          {/* <button onClick={excelExportFile}>
            Export
          </button> */}
        </GridToolbar>
        <GridColumn field="title" title="Title" width="300px" />
        <GridColumn field="handle" title="Handle" width="300px" />
        <GridColumn field="variants.edges[0].node.price" title="Price" width="300px" />
      </Grid>
    </ExcelExport>
      </Table>
      </>

 )



}
