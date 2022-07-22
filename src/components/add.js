import axios from "axios"
import * as XLSX from "xlsx";
    // const body = {
    //     product:{
    //         title : "Sameer",
    //         handle : "sam",
    //         body_html: "<strong>Good Product</strong>",
    //         variants : [
    //             {
    //                 price : 350,
    //                 sku : 7,
    //                 compare_at_price : 200
    //             }
    //         ]
    //     }
    // };



export const add  = async () => {
    let url = process.env.HOST
    const api_url = "https://apna-star-store.myshopify.com/admin/api/2022-07/products.json"
    //const api_url = "https://api.publicapis.org/entries"
    const res = await axios.get(api_url, {
        //body: body,
        variables: null,
        crossDomain: true
      }, {
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': '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',

          }
        })
    return res;
}
 
export const importFun = async () => {
 // const api_url = "https://apna-star-store.myshopify.com/admin/api/2022-07/products.json"
   const api_url = "https://api.publicapis.org/entries"
  let res;
  try {
  res = await axios.get(api_url, {
      //body: body,
      variables: null,
      crossDomain: true
    }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': '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',

        }
      })
  } catch(e) {
      console.log(e)
  }
  setTimeout(() => {console.log(res)},10000)
}

export const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr,{type:"binary"});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_csv(ws, {header: 1});
        //console.log(data);
        const jsonData = convertToJson(data);
        console.log(jsonData); // shows data in json format
       
        console.log(jsonData.length)

        for(var single in jsonData) {
          //console.log(jsonData[single].Handle)
          const body = {
              product:{
                  title : jsonData[single].Title,
                  handle : jsonData[single].Handle,
                  variants : [
                      {
                          price : jsonData[single].Price,
                          sku : jsonData[single].SKU,
                          compare_at_price : jsonData[single].ComparePirce
                      }
                  ]
              }
          };


          const api_url = "https://apna-star-store.myshopify.com/admin/api/2022-07/products.json"
          //const api_url = "https://api.publicapis.org/entries"
          let res;
          try {
          res =  axios.post(api_url, {
              body: body,
              variables: null,
              crossDomain: true
            }, {
                headers: {
                  'Content-Type': 'application/json',
                  'X-Shopify-Access-Token': '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',
        
                }
              })
          } catch(e) {
              console.log(e)
          }
          setTimeout(() => {console.log(res)},2000)

          //console.log(body)
        }



    };
    reader.readAsBinaryString(file);  
};

function convertToJson(csv) {
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
}




// export const add = () =>  {
//     let a = 9, b = 7, sub;
//     sub = a - b;
//     return sub;
// }


// export const sub = () =>  {
//     let a = 9, b = 7, sub;
//     sub = a - b;
//     return sub;
// }
