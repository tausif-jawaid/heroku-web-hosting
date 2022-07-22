import {
  IndexTable,
  TextStyle,
  Card,
  useIndexResourceState,
  Button,
  Layout,
  Modal,
  TextContainer
} from "@shopify/polaris";  
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css'; 
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; 
import '../assets/external-css/productsExport.css'; 
import Import from "./Import";
import { ModalExample } from "./ModalExample";
import ReadExcel from "./ReadExcel";
import {importFun,onChange} from "./add"
export function ProductsList({data}) {
  console.log(data.nodes)
  const newData = data.nodes;
  const gridRef = useRef(); // Optional - for accessing Grid's API
 // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
   {field: 'handle', filter: true},
   {field: 'title', filter: true},
   {field: 'variants.edges.0.node.price', headerName: 'Price', filter: true},
   {field: 'variants.edges.0.node.compareAtPrice', headerName: 'ComparePirce', filter: true},
   {field: 'variants.edges.0.node.sku',  headerName: 'SKU' ,filter: true},
 
  ]);


 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
     sortable: true,
     flex: 1
   }));

 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);

let gridApi;
const onGridReady=params=>{
  gridApi=params.api
}

const onExportClick = () => {
  console.log(gridApi)
  gridApi.exportDataAsCsv();
}


 return (
  <Card sectioned>
   <div >
     <button onClick={onExportClick} className='exportBtn'>Export Excel</button>
     {/* <Import /> */}
     {/* <ReadExcel /> */}
      {/* <ModalExample /> */}
      <input type="file" onChange={onChange} />
     {/* <button className='importBtn' onClick={importFun}>Import Excel</button> */}
     <br />
     <br />
     <br />
     <div className="ag-theme-alpine" style={{width:'100%', height: 500}}>
       <AgGridReact
           ref={gridRef} 
           rowData={newData} 
           columnDefs={columnDefs}
           defaultColDef={defaultColDef} 
           onGridReady={onGridReady}
           />
     </div>
   </div>
   </Card>
 );
};
