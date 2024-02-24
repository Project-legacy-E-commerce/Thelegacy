"use client";
import { Box, Container, Divider } from "@mui/material";
import Products from "@/app/seller/Functions/FetchAllProducts";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Rating from "@mui/material/Rating";
import { useState } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Reviews() {
  const [expanded, setExpanded] = useState(false);
  const product = Products();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Box>
        {product?.map((e) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  S
                </Avatar>
              }
              title={e.name}
              subheader={e.category}
            />
            <CardMedia
              component="img"
              height="194"
              image={e.imgurlmain}
              alt=""
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {e.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="reviews">
                <ReviewsIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {e.review_rates?.map((r:any) => (
                  <><Typography>client{" "}{r.userIduser}</Typography>
                    <Rating name="read-only" value={r.rateofuser} readOnly />
                    <Typography paragraph>{r.comment}</Typography>
                    <Divider/>
                  </>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
