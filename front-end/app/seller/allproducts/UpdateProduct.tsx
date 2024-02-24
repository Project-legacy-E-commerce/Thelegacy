import * as React from "react";
import * as Next from "next";
import * as MUI from "@mui/material";
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
import ProductContext from "./UseContext";

export default function UpdateProduct() {
  const productData = React.useContext(ProductContext);
  const [name, setName] = React.useState(productData?.name);
  const [Category, setCategory] = React.useState(productData?.category);
  const [rate, setRate] = React.useState(3);
  const [status, setStatus] = React.useState(productData?.status);
  const [intialPrice, setIntialPrice] = React.useState(productData?.initalprice);
  const [currentPrice, setCurrentPrice] = React.useState(productData?.currentprice);
  const [quantity, setQuantity] = React.useState(0);
  const [description, setDiscription] = React.useState("");
  const [newphoto, setNewPhoto] = React.useState("");
  const [imageMain, setImageMain] = React.useState("");


  const updatephoto = async (image:string) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "iexr9rlx");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dixniotyg/upload",
        formData
      );
      console.log(response.data.secure_url);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const notifySuccess = () => toast.success("Product added successfully!");


  const updateprodnew = async () => {
    try {
      const updatepho = await updatephoto(newphoto);
      console.log(updatepho);
  
      const newProduct = {
        name: name,
        category: Category,
        rate: rate,
        status: status,
        initalprice: intialPrice,
        currentprice: currentPrice,
        imgurlmain: updatepho,
        quantity: quantity,
        description: description,
      };
      axios.put(`http://localhost:3000/saler/update/11`, newProduct)
        .then(() => {
          console.log("data inserted !");
          notifySuccess();
          window.location.reload()
        })
        .catch((err) => {
          console.log("err in insert data from the frontend", err);
        });
    } catch (err) {
      console.log("err in update product in front !", err);
    }
  };

  return (
    <MUI.Container>
      <MUI.Box>
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
            Update a Product
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
              onChange={() => setCategory("electronic")}
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
                type="file"
                name="file"
                id="file"
                aria-label="img"
                onChange={(ele) => {
                  setNewPhoto(ele.target.files[0])
                  updatephoto(ele.target.files[0]);
                }}
              />
            </FormControl>
            <CardActions sx={{ gridColumn: "1/-1" }}>
              <Button variant="solid" color="primary" onClick={()=> updateprodnew()}>
                Update
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </MUI.Box>
    </MUI.Container>
  );
}
