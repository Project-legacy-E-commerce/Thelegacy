"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import axios from "axios"
type SellerData = {
  iduser: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  address: string; 
};

const [data, setData]= React.useState<SellerData[]>([]);
const columns = [
  { field: 'iduser', headerName: 'ID', width: 90 },
  { field: 'firstname', headerName: 'First Name', width: 150, editable: true },
  { field: 'lastname', headerName: 'Last Name', width: 150, editable: true },
  { field: 'email', headerName: 'Email', width: 200, editable: true },
  { field: 'phone', headerName: 'Phone', width: 150, editable: true },
  { field: 'address', headerName: 'Address', width: 250, editable: true },
  {
    field: 'deleteBtn',
    type: 'actions',
    headerName: '',
    sortable: false,
    width: 100,
    renderCell: (params: { row: { iduser: any; }; }) => (
      <Button size='small' variant='outlined' color='error' onClick={() => handleDelete(params.row.iduser)}>
        Delete
      </Button>
    ),
  },
];

async function handleDelete(idUser: number) {
  try {
    await axios.delete(`http://localhost:3000/user/deleteuser/${idUser}`);

    alert('Successfully deleted!');
    setData((prevData: any[]) => prevData.filter((item: { iduser: number; }) => item.iduser !== idUser));
  } catch (err) {
    console.error('Error deleting user:', err);
    alert('An error occurred while trying to delete the user.');
  }
}

export default function Datasellers() {
  const [data, setData] = React.useState<SellerData[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/user/getSellers')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ marginTop:"120px", marginLeft:"235px" }}
        getRowId={(row) => row.iduser}
        rows={data}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination:{
            paginationModel:{
              pageSize :5,
            },
          },
        }}
      />
    </Box>
  );
}