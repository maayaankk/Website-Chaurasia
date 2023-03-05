import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/beautiful-detailed-macro-leaf.jpg";
import bgBack from "assets/images/bg3.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                color="success"
                title={
                  <>
                    Authentic paan,
                    <br />
                    made to order
                  </>
                }
                description="Craving our authentic paan but can't make it to our shop? We've got you covered. Order now for delivery."
              />
              <RotatingCardBack
                image={bgBack}
                color="success"
                title="Details"
                description="Enjoy our freshly made paan without leaving your house. Order now and we'll deliver it to you."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contact-us",
                  label: "Order Now",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="info"
                  color="success"
                  title="What is Paan?"
                  description="Paan is a traditional Indian mouth-freshener that is made by wrapping betel leaves around various fillings, such as chopped areca nuts, tobacco, lime paste, and various spices. It is a popular after-meal treat in many parts of India and is believed to have medicinal properties that aid digestion and freshen the breath."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="verified_user"
                  color="success"
                  title="Health benefits of Paan"
                  description="Paan is believed to have several health benefits, including:
                  Aiding digestion: The various ingredients in paan, such as lime paste and fennel seeds, are believed to aid in digestion.
                  Freshening the breath: Paan is often used as a mouth freshener because of its pleasant taste and aroma."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="mannequin"
                  color="success"
                  title="Paan etiquette"
                  description="There are certain rules and etiquette associated with eating paan. For example, it is considered rude to spit out the remnants of the paan in public, and it is important to dispose of the paan wrapper properly. It is also customary to offer paan to guests as a gesture of hospitality."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="local_florist"
                  color="success"
                  title="Paan culture in India"
                  description="Paan has a rich cultural significance in India and is often associated with important occasions and rituals. It is a common sight to see paan vendors on the streets of Indian cities, and many families have their own favorite paan shops that they frequent regularly."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
