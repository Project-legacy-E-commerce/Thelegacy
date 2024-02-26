"use clients"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



type ProductData = {
    id: number;
    name: string;
    initalprice: number;
    imgurlmain: string;
    description: string;
    category: string;
  };

export default function StackBars() {

    const [data, setData] = React.useState<ProductData[]>([]);

    React.useEffect(() => {
      fetch('http://localhost:3000/saler/getallprod')
        .then((res) => res.json())
        .then((data: ProductData[]) => {
          setData(data);
        });
    }, []);
  return (
   
    <BarChart sx={{color:'#BF1736'}}
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Furniture',},
        { data: [4, 3, 1, 5, 8], stack: 'A', label: ' Electronics' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Clothes' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Cosmetics' },
        { data: [10, 6, 5, 8, 9], label: 'Products' },
        
      ]}
      width={650}
      height={270}
    />

  );
}