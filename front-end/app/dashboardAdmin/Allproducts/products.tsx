import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const HoverCard = styled(Card)(({ theme }) => ({
  height: 500, // Set a fixed height for all cards
  width: 300, // Set a fixed width for all cards
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 5px 20px 0 rgba(0,0,0,0.2)',}
}));


type ProductData = {
  id: number;
  name: string;
  initalprice: number;
  imgurlmain: string;
  description: string;
  category: string;
  quantity: string;
};

export default function ProductCard() {
  const [data, setData] = React.useState<ProductData[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/saler/getallprod')
      .then((res) => res.json())
      .then((data: ProductData[]) => {
        setData(data);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', marginBottom:'80px',marginTop:"90px", padding: '10px', backgroundColor: '#fafbfc',marginLeft:"250px" }}>
      {data?.map((product) => (
        <Grid item key={product.id}>
          <HoverCard sx={{ width: 300, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor:'#ffffff' }}>
            <CardMedia
              sx={{ height: 200 }}
              image={product.imgurlmain}
            />
            <CardContent sx={{ padding: '16px', backgroundColor:'#fcfcfd' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ color: '#666', mb: 2 }}>
                {product.description}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', color: '#d32f2f', mb: 1 }}>
                ${product.initalprice}
              </Typography>
              <Typography sx={{ color:'#333', mb: 1 }}>
                Quantity:{product.quantity}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent:'center', padding:'8px', borderTop:'1px solid #ddd', backgroundColor:'#fcfcfd' }}>
            <Button
  size="medium"
  variant="contained"
  color="error"
  
  sx={{
    
    backgroundColor: '#d32f2f',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#b71c1c',
    },
    borderRadius: '4px',
    textTransform: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s',
  }}
>
  Delete
</Button>
            </CardActions>
            <Typography variant="body2" color="textSecondary" sx={{ p:'8px', backgroundColor:'#fcfcfd', borderTop:'1px solid #ddd', color:'#666' }}>
              Category:{product.category}
            </Typography>
          </HoverCard>
        </Grid>
      ))}
    </Grid>
  );
}
