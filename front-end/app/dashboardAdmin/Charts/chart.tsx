"use client"
import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';

type SellerData = {
    iduser: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    adress: string;
  };
  type BuyerData = {
    iduser: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    adress: string;
  };

export default function Stats (){
    const [data, setData] = React.useState<BuyerData[]>([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/user/getSellers')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const [seller, setSeller] = React.useState<SellerData[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/user/getClients')
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
      });
  }, []);

    return(
     <main >
<PieChart  
colors={['#BF1736', '#0378A6']}
  series={[
    {
      data: [
        { id: 0, value: data.length, label: 'sellers' },
        { id: 1, value: seller.length, label: 'clients' },
     
      ],
    },
  ]}
  width={650}
  height={270}
/>
</main>)
}

