import React from 'react'

//Bootstrap and jQuery libraries
import * as  $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";



import {  Card } from "@shopify/polaris";

export default function ProductsList({ data }) {
    console.log(data)
    $(document).ready(function () {
        $.noConflict();
        setTimeout(function(){
        $('#example').DataTable({
                pagingType: 'full_numbers',
                pageLength: 10,
                processing: true,
                dom: 'Bfrtip',
                    buttons: ['csv'
                    ]
            });
        } ,
        1000
        );
    });

  return(
    <Card title="Product List" sectioned>
    <div className='MainDiv'>
        <div className='container p-5'>
      <table id="example" className="table table-hover table-bordered">
              <thead>
                  <tr>
                      <th>S.N</th>
                      <th>Images</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Compare Price</th>
                      <th>SKU</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    data.nodes.map((data, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><img src={data.images.edges[0] ? data.images.edges[0].node.originalSrc : "" }  alt="" width="60" height="70" /></td>
                                <td>{data.title ? data.title : "" }</td>
                                <td>₹ {data.variants.edges[0] ? data.variants.edges[0].node.price : "" }</td>
                                <td>₹ {data.variants.edges[0] ? data.variants.edges[0].node.compareAtPrice : "" }</td>
                                <td>₹ {data.variants.edges[0] ? data.variants.edges[0].node.sku : "" }</td>
                            </tr>
                        )
                    })
                  }
              </tbody>
      </table>    
      </div>
    </div>
    </Card>     
)
}
