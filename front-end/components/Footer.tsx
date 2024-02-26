import React from "react";
import { Box, Typography } from "@mui/material";
import { Stack, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Divider from "@mui/material/Divider";

const Footer = () => {
  const styles: any = {
    marginTop: "40px",
    paddingTop: "1px",
    bottom: 0,
    width: "100%",
    height: "400px",
    textAlign: "center",
    backgroundColor: "#000",
    color: "#fff",

    left: "0",
  };

  return (
    <div style={styles}>
      <Box>
        <div className="FoutrePosition">
          <Stack spacing={15} direction="row">
            <Stack spacing={2} direction="column">
              <Typography variant="h6" color="#f0f0f0">
                Exclusive
              </Typography>

              <Typography variant="subtitle2" color="#c2c2c2">
                Subscribe
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Get 10% off your first order
              </Typography>
              <div style={{ borderStyle: "inset", borderColor: "#979797" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "transparent",
                    borderColor: "red",
                    borderStyle: "double",
                  }}
                  endIcon={<SendIcon />}
                >
                  {" "}
                  Enter your email
                </Button>
              </div>
            </Stack>

            <Stack spacing={2} direction="column">
              <Typography variant="h6" color="#f0f0f0">
                Support
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                {" "}
                DH 1515, Bangladesh.
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                exclusive@gmail.com
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                +88015-88888-9999
              </Typography>
            </Stack>

            <Stack spacing={2} direction="column">
              <Typography variant="h6" color="#f0f0f0">
                Account
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                My Account
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Login / Register
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Cart
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Wishlist
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Shop
              </Typography>
            </Stack>
            <Stack spacing={2} direction="column">
              <Typography variant="h6" color="#f0f0f0">
                Quick Link
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Privacy Policy
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Terms Of Use
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                FAQ
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Contact
              </Typography>
            </Stack>
            <Stack spacing={0} direction="column">
              <Typography variant="h6" color="#f0f0f0">
                Download App
              </Typography>
              <Typography variant="subtitle2" color="#c2c2c2">
                Save $3 with App New User Only
              </Typography>

              <Stack
                spacing={2}
                direction="row"
                style={{ paddingBottom: "10px" }}
              >
                <div className="imageWrapper">
                  <img
                    style={{
                      height: "95px",
                      width: "90px",
                      paddingTop: "43px",
                    }}
                    src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gat~3vRFc2DbWM11m1hqiss3GhJVQXL8lVxr76vuYVRbGEuLVuKlRPn4rmbdM-mO1kERnKsqtA~Q58WCyAvdxkqBvLSxGxQxS18aSuTHfXHZn7bCwBTrtgDkm-tbDu2t8xXI6FZeEL9Ur8Vv-j8HJvOvunYdm3Umy2PCCxOB~CiR4AY6OXGiPA8gAdJL54SVvPo0EhRadPxfDVQQeg5ZbMUmxjnTgp~IIRIDepxndrbhbexdtKwXdv-ZJVsClWR1YNuYlegRiPNpU86cozkptvQLYkrhLWlWx5oh-EfbFPPTzjutr0EOAG-THsWAXAl8HO70ZDdT6VSzkQql~omovg__"
                    alt="No content"
                  />
                </div>
                <Stack spacing={-8} direction="column">
                  <div className="imageWrapper">
                    <img
                      style={{ height: "120px", width: "120px" }}
                      src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nkV6WyEXnv0PCUAIN91Py1RUCKWZ-rYqXJlMmXJdNeFEgw0t8g9grKDlVfBgbmb-adyUp6W1MlwOP-nXFM6eL7k760kNkKkwVS0juUgkhkz1mbFUxuwwGvqnSIUILstHsZUEuzjCxg4z5Mazh~e8KsLzrKAZxyLedsjyPVHsxtsJivWQIqQNJQwD5-OKwQMlstRlHSpEPj~RRYO~TacSaY2BAg~Xz2-OiYVfrISEnwQkgHlEDsMCxMVOQNcvqDlDmAdPAo9TBrMdGzbXgD~ZFk55VfRdENPbWOVC88Wtva6uV95NNhTyGBI4FhBnDxy9BZJcYz2Og1hWnPIv-uJtiA__"
                      alt="no content"
                    />
                  </div>
                  <div className="imageWrapper">
                    <img
                      style={{
                        height: "119px",
                        width: "112px",
                        paddingLeft: "5px",
                      }}
                      src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCPclh93C-GyQ8a7wpiSxLwKm7jkZCXecAd6L2E1LZDMelVlwZNNYjPdMPndHg5rLZQijMeYuD~Vuhd9N9ZtvUq~Miuby8IhACXM70ZOcrdKHIZwilcTFlhhP2lyC8dyqFe-~cX2r0Ko4FEwuBhQ1UqCNoVDyNV4F~x0M5Yzv9zPFsRx8jhRPSbtbMiORA~7l92qTZhqhmZka~dHdXVv7j9nhIwyqIfX3upCHoMz8oqb4uE1g3D1kUWV8iFIgwwgjNFe87ikm~Bny89-2fn78Cx0CQ-JWiCq9a~mdHWEtz9RynerxzAAILC1l7~TeGrCxYL5-jdKNTOEzkN4-cwZrw__"
                      alt="no content"
                    />
                  </div>
                </Stack>
              </Stack>

              <Stack
                spacing={3}
                direction="row"
                style={{ paddingBottom: "30px" }}
              >
                <div className="iconWrapper">
                  <FacebookIcon />
                </div>
                <div className="iconWrapper">
                  <InstagramIcon />
                </div>
                <div className="iconWrapper">
                  <TwitterIcon />
                </div>
                <div className="iconWrapper">
                  <LinkedInIcon />
                </div>
              </Stack>
            </Stack>
          </Stack>

          <div style={{ paddingTop: "45px", paddingLeft: "520px" }}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Stack
                spacing={1}
                direction="row"
                sx={{ paddingLeft: "10px", color: "#606060" }}
              >
                <CopyrightIcon />
                <Typography variant="subtitle2" color="#606060">
                  {" "}
                  Copyright Salah 2024. All right reserved(RBK)
                </Typography>
              </Stack>
            </Stack>
          </div>
        </div>
      </Box>
      <Divider />
    </div>
  );
};
export default Footer;
