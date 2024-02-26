import * as React from "react";
import Products from "@/app/seller/Interfaces/ProductType";

export default function FetchAllProducts() {
  const [product, setProduct] = React.useState<Products[]>([]);

  React.useEffect(() => {
    fetch(`http://localhost:3000/saler/promoprod`)
      .then((result) => result.json())
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return product;
}