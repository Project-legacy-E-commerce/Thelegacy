import * as MUI from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReviewsIcon from "@mui/icons-material/Reviews";

export default function Numbers() {
  return (
    <MUI.Container>
      <MUI.Box
        
        sx={{
          p: 0,
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 4,
            width: 200,
            height: 170,
          },
        }}
      >
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <PeopleAltIcon sx={{ fontSize: "60px" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            85
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Clients
          </MUI.Typography>
        </MUI.Paper>
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Inventory2Icon sx={{ fontSize: "60px", color: "burlywood" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            250
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Products
          </MUI.Typography>
        </MUI.Paper>
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <StarBorderIcon sx={{ fontSize: "60px", color: "yellow" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            66
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Top Products
          </MUI.Typography>
        </MUI.Paper>
        <MUI.Paper
          elevation={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <ReviewsIcon sx={{ fontSize: "60px", color: "rebeccapurple" }} />
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "fantasy" }}>
            200
          </MUI.Typography>
          <MUI.Typography sx={{ fontSize: "25px", fontFamily: "monospace" }}>
            Reviews
          </MUI.Typography>
        </MUI.Paper>
      </MUI.Box>
    </MUI.Container>
  );
}
