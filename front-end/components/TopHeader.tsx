import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function TopHeader() {
  return (
    <Box sx={{ width: "100%", height: "48px", background: "#000" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          height: "48px",
          background: "#000",
          right: "155px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1200px",
          }}
        >
          <Typography sx={{ color: "#fafafa", px: 2, fontWeight: "normal" }}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </Typography>
          <Button
            sx={{
              color: "#fafafa",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            ShopNow
          </Button>
        </Box>
        <select  className="select-lang">
          <option value="english">English</option>
        </select>
      </Box>
    </Box>
  );
}
