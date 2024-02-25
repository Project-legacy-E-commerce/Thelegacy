import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Carousel from 'react-bootstrap/Carousel';
import Container from '@mui/material/Container';

export default function Slides () {
  return (
    <Container sx={{display:'flex', justifySelf:'auto', marginTop:"100px"}}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 250,
          bgcolor: "background.paper",
          maxHeight: 400,
        }}
      >
        <List aria-label="Categories">
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Woman's Fashion
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Men's Fashion
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Electronics
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Home & Lifestyle
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Medicine
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Sports & Outdoor
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Baby's & Toys
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Groceries & Pets
          </ListItemButton>
          <ListItemButton sx={{ maxHeight: "40px" }}>
            Health & Beauty
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <div style={{float:'right'}}>
            <Carousel>
                <Carousel.Item>
                <img style={{height:'50vh'}}
                    className="d-block w-100"
                    src={'https://res.cloudinary.com/hzxyensd5/image/upload/v1708036896/v1bkuxkrxe25w9xy2a5b.png'}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'50vh'}}
                    className="d-block w-100"
                    src={'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'}
                    alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'50vh'}}
                    className="d-block w-100"
                    src={'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'}
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        </div>
      </Box>
    </Container>
  );
};
