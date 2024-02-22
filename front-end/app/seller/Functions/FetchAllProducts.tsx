import { error } from "console";
import * as React from "react";
import * as MUI from "@mui/material";
import axios from "axios";

export default function FetchAllProducts() {
  
  const [product, setProduct] = React.useState([]);

    React.useEffect(() => {
      fetch(`http://localhost:3000/saler/getallprod/${1}`)
        .then((result) => result.json())
        .then((res) => {
          setProduct(res);
          console.log(res,'res');
        })
        .catch((err) => {
          throw error(err);
        });
    }, []);


  return <MUI.Container></MUI.Container>;
}
