import React, { useState } from "react";
//import "./App.css";
import '../assets/external-css/productsExport.css';
import * as XLSX from "xlsx";
//import  {BulkImport} from "./BulkUpload";
import {add} from "./add"


class ReadExcel extends React.Component {
    
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });
    console.log(this.state.file);
    this.readFile();
  }

  readFile() {
    var f = this.state.file;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      //console.log( data);// shows that excel data is read
      const jsonData = this.convertToJson(data);
      console.log(jsonData); // shows data in json format
      // Numbers of Rows in Excel 
      const numRowsInExcel = jsonData.length;
      console.log(numRowsInExcel);

         let fdata = add()
        fdata.then(result => {
         console.log(result)
          //setArrData(result)
        });

       // console.log(arrData);


      //console.log("add :"+add())
      //BulkImport();

    };
    reader.readAsBinaryString(f);
  }

  convertToJson(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return (result); //JavaScript object
   // return JSON.stringify(result); //JSON
  }

  render() {
    return (
      <div>
        <input
          type="file"
          id="file"
          ref="fileUploader"
          className="exportBtn"
          onChange={this.filePathset.bind(this)}
        />
        <button
          className="exportBtn"
          onClick={() => {
            this.readFile();
          }}
        >
          Read File
        </button>
      </div>
      
    );
  }
}

export default ReadExcel;
