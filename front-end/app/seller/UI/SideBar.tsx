import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import StarIcon from "@mui/icons-material/Star";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

export default function SideBar() {
  const router = useRouter();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#253544",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <SpaceDashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                onClick={() => router.push("/seller")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="All clients"
                onClick={() => router.push("/seller/clients")}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <AllInboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="All products"
                onClick={() => router.push("/seller/allproducts")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                primary="Top products"
                onClick={() => router.push("/seller/top")}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <ReviewsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Reviews"
                onClick={() => router.push("/seller/reviews")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText
                primary="New Product"
                onClick={() => router.push("/seller/addnewproduct")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#EEEFF8", p: 2 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
