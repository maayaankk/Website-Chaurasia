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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1507139722691-cc2c94e3a2b2%3Fixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1600%26h%3D500%26q%3D60&f=1&nofb=1&ipt=fe414b5626116640e192f943fc6b3628318839d056fcafe9e3927d4d2dd814e7&ipo=images";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Chaurasia Paan House
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            We Love What We Do
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            From classic sweet paan to refreshing mint paan we offer a wide variety of paan to suit
            your taste.Our Masala Paan is a must try for those who want to add some excitement and
            heat to their paan experience.
          </MKTypography>
          <MKTypography
            component="a"
            href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Order Now <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
