/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg-coworking.jpeg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Do you love Paan?
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              Contact Us &amp; Order your paan now!
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Welcome to our paan shop, where we offer a wide variety of mouth-watering paan that
              will tantalize your taste buds and leave you craving for more!
            </MKTypography>
            <MKButton
              variant="gradient"
              color="success"
              size="large"
              component="a"
              href="/pages/landing-pages/contact-us"
              sx={{ mb: 2 }}
            >
              Contact Us
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              We are available on these platforms
            </MKTypography>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <MKBox
                    component="a"
                    href="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    // opacity={0.5}
                    component="a"
                    href="https://upload.wikimedia.org/wikipedia/commons/9/92/Zomato.svg"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/92/Zomato.svg"
                      width="50%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <MKBox
                    opacity={0.5}
                    component="a"
                    href="https://upload.wikimedia.org/wikipedia/commons/c/c4/Dunzo_Logo.svg"
                    target="_blank"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Dunzo_Logo.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
