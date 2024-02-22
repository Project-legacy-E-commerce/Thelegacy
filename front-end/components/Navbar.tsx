import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box
      sx={{
        height: "58px",
        width: "1170px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginX: "auto",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          height: "24px",
          width: "645px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Exclusive
        </Typography>
        <Box
          className="links"
          sx={{
            width: "367px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <Link href="/home">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="">Log Out</Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "395px",
        }}
      >
        <Box
          sx={{
            width: "243px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            padding: "6px",
            marginTop: "-8px",
          }}
        >
          <InputBase
            style={{ fontSize: "12px" }}
            placeholder="What are you looking for?"
          />
          <IconButton
            sx={{
              color: "black",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
        </Box>
        <IconButton
          sx={{
            color: "black",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </IconButton>
        <IconButton
          sx={{
            color: "black",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </IconButton>
        <IconButton
          sx={{
            border: "1px solid #f5f5f5",
            borderRadius: "50%",
            backgroundColor: "#DB4444",
            width: "32px",
            height: "32px",
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </IconButton>
      </Box>
    </Box>
  );
}
