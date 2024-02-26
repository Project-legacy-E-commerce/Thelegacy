"use client";

import ProductCard from '@/app/dashboardAdmin/Allproducts/products'
import TemporaryDrawer from '@/app/dashboardAdmin/Sidebar'
import * as React from 'react';
type ProductData= {

  id: number,
  name: string,
  price: number,
}

export default function Products (){

    const [data, setData] = React.useState<ProductData[]>([])
   
    React.useEffect(() => {
      fetch('http://localhost:3000/saler/getallprod')
        .then((res) => res.json())
        .then((data: ProductData[]) => {
          setData(data)
          console.log("data",data)
        
        })
    }, [])
    
    return(
      
<main>
               <TemporaryDrawer/>
       <ProductCard/>

</main>
    )


}
