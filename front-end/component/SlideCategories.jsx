import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
// import Carousel from 'react-bootstrap/Carousel';
import Container from "@mui/material/Container";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Item(props) {
  console.log("::",props)
  return (
    <Paper>
      <img
        style={{ width: "100%", height: "350px", minHeight: "350px", maxHeight: "350px"}}
        src={props.item.url}
        alt="First slide"
      />
    </Paper>
  );
}

const SlideCategories = () => {
  var items = [
    {
      name: "Random Name #1",
      url: "https://s3-alpha.figma.com/hub/file/2388586455/4a311ea1-b8e3-4a97-8f76-3bd53aa7bbc5-cover.png",
    },
    {
      name: "Random Name #1",
      url: "https://assets.hardwarezone.com/img/2022/09/iphone14-pro-vs-iphone13-pro.jpg",
    },
    {
      name: "Random Name #1",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ8xX4qiN4ExDbEHnzen4YmxTa0yt-IBCchHWiIBTy9xYuqqMgZ9h6wC2xSZbyDNK1ig&usqp=CAU",
    },
  ];

  return (
    <>
      <Container sx={{ display: "flex", justifySelf: "auto" }}>
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
            <ListItemButton sx={{ maxHeight: "40px" }}>Medicine</ListItemButton>
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
          <div style={{ float: "right", width: "70vw" }}>
            <Carousel>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SlideCategories;
