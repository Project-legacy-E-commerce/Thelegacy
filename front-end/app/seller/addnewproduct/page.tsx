"use client";
import * as React from "react";
import * as Next from "next";
import * as MUI from "@mui/material";
import NavBar from "@/app/seller/UI/NavBar";
import SideBar from "@/app/seller/UI/SideBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Slider from "@mui/material-next/Slider";
import ImageList from "@mui/material/ImageList";
const drawerWidth = 240;

export default function AddNewProduct() {
  const [value, setValue] = React.useState<number>(0);
  const [name, setName] = React.useState("");
  const [Category, setCategory] = React.useState("");
  const [rate, setRate] = React.useState(3);
  const [status, setStatus] = React.useState("");
  const [intialPrice, setIntialPrice] = React.useState("");
  const [currentPrice, setCurrentPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [description, setDiscription] = React.useState("");
  const [photo, setPhoto] = React.useState<string[]>([]);
  const [imgurl, setImgUrl] = React.useState<string[]>([]);
  const [imageMain, setImageMain] = React.useState("");

  const notifySuccess = () => toast.success("Product added successfully!");

  const uploadImage = async (image: any) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "iexr9rlx")
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dixniotyg/upload",formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const handleImageChange = async (e: any) => {
    const selectedImages = Array.from(e.target.files);
    console.log(selectedImages);
    setPhoto(Array.from(e.target.files));
    try{
      const mainImageUrl = await uploadImage(photo[0]);
      setImageMain(mainImageUrl);
      const additionalImageUrls = await Promise.all(
        photo.slice(1).map(uploadImage)
      );
      setImgUrl(additionalImageUrls);
      notifySuccess();
    }
    catch(err){
      console.log("Error in insert data from the frontend", err);
    }
  };

  const insertProduct = async () => {
    try {
      const newProduct = {
        name: name,
        category: Category,
        rate: rate,
        status: status,
        initalprice: intialPrice,
        currentprice: currentPrice,
        imgurlmain: imageMain,
        color: "blue",
        quantity: quantity,
        description: description,
        image: {
          image1: imgurl[0] || "",
          image2: imgurl[1] || "",
          image3: imgurl[2] || "",
          image4: imgurl[3] || "",
        },
      };

      await axios.post("http://localhost:3000/saler/createprod/1", newProduct);
      console.log(newProduct);
      notifySuccess();
    } catch (err) {
      console.log("Error in insert data from the frontend", err);
    }
  };

  return (
    <MUI.Container
      maxWidth={false}
      sx={{
        bgcolor: "#EEEFF8",
        height: 800,
        width: "100%",
        display: "inline-flex",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <MUI.CssBaseline />
      <SideBar />
      <MUI.Box sx={{ mt: "100px", width: "40%" }}>
        <Card
          variant="outlined"
          sx={{
            maxHeight: "max-content",
            maxWidth: "100%",
            mx: "auto",
            overflow: "auto",
          }}
        >
          <Typography level="title-lg" startDecorator={<InfoOutlined />}>
            Add new Product
          </Typography>
          <Divider inset="none" />
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
              gap: 1.5,
            }}
          >
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Product name</FormLabel>
              <Input
                endDecorator={<Inventory2Icon />}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <Select
              placeholder="Select a category…"
              indicator={<KeyboardArrowDown />}
              sx={{
                width: 240,
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.5s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
              onChange={()=>setCategory("electronic")}
              value={Category}
            >
              <Option value="electronic">electronic</Option>
              <Option value="gaming">gaming</Option>
              <Option value="sports">sports</Option>
            </Select>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Input
                endDecorator={<InfoOutlined />}
                onChange={(e) => setStatus(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Initial Price</FormLabel>
              <Input
                endDecorator={<AttachMoneyIcon />}
                onChange={(e) => setIntialPrice(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Current Price</FormLabel>
              <Input
                endDecorator={<AttachMoneyIcon />}
                onChange={(e) => setCurrentPrice(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <Slider
                disabled={false}
                marks={false}
                onChange={(e: any) => setQuantity(e.target.value)}
                steps={1}
                max={200}
                min={0}
                valueLabelDisplay="auto"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity</FormLabel>
            </FormControl>
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="..."
                onChange={(e) => setDiscription(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>add Photos</FormLabel>
              <input
                multiple
                type="file"
                aria-label="img"
                onChange={handleImageChange}
              />
            </FormControl>
            <CardActions sx={{ gridColumn: "1/-1" }}>
              <Button variant="solid" color="primary" onClick={insertProduct}>
                Add Product
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </MUI.Box>
      <MUI.Box sx={{ mt: "100px" }}>
        <Card>
          <ImageList
            sx={{ width: 500, height: 470, pl: "30px", pt: "30px" }}
            variant="quilted"
            cols={2}
            rowHeight={121}
          >
            <img src={imageMain} alt="" width={"200px"} height={"200px"} />
            {imgurl?.map((item) => (
              <img src={item} alt="" width={"200px"} height={"200px"} />
            ))}
          </ImageList>
        </Card>
      </MUI.Box>
    </MUI.Container>
  );
}
