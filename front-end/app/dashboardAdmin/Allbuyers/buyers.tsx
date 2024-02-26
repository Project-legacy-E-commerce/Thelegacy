"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

type BuyerData = {
  iduser: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  address: string;
};

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
    renderCell: (params: { row: { iduser: number; }; }) => (
      <Button size='small' variant='outlined' color='error' onClick={() => handleDelete(params.row.iduser)}>
        Delete
      </Button>
    ),
  },
];

function handleDelete(idUser: number) {
  // Implement delete functionality here
}

export default function Databuyers() {
  const [data, setData] = React.useState<BuyerData[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/user/getClients')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%', marginLeft: '250px', marginTop: '60px' }}>
      <DataGrid
        getRowId={(row) => row.iduser}
        rows={data}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </Box>
  );
}
