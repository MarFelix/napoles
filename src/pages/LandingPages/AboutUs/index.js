/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

Customizado Por Carlos Mar 2023
*/

// @mui material components
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKImageList from "components/MKImageList";

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";

// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
// import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/headerBg.png";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

function AboutUs() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Sillas y mesas Nápoles
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Alquilamos Sillas , Mesas y Manteles, El servicio en nuestra empresa es primero.
            </MKTypography>
            <MKButton
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
              component={Link}
              to="/cotizacion"
            >
              Cotización
            </MKButton>
            <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
              <Slide direction="down" in={show} timeout={500}>
                <MKBox
                  position="relative"
                  width="500px"
                  display="flex"
                  flexDirection="column"
                  borderRadius="xl"
                  bgColor="white"
                  shadow="xl"
                >
                  <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                    <MKTypography variant="h5">Your modal title</MKTypography>
                    <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                  <MKBox p={2}>
                    <MKTypography variant="body2" color="secondary" fontWeight="regular">
                      Society has put up so many boundaries, so many limitations on what&apos;s
                      right and wrong that it&apos;s almost impossible to get a pure thought out.
                      <br />
                      <br />
                      It&apos;s like a little kid, a little boy, looking at colors, and no one told
                      him him what colors are good, before somebody tells you you shouldn&apos;t
                      like because that&apos;s for girls, or you&apos;d instantly become a gay
                      two-year-old.
                    </MKTypography>
                  </MKBox>
                  <Divider sx={{ my: 0 }} />
                  <MKBox display="flex" justifyContent="space-between" p={1.5}>
                    <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                      close
                    </MKButton>
                    <MKButton variant="gradient" color="info">
                      save changes
                    </MKButton>
                  </MKBox>
                </MKBox>
              </Slide>
            </Modal>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Síguenos
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100066741323747"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                target="_blank"
                href="https://goo.gl/maps/8ux4VkJ1Xuv13F8F9"
                mr={3}
              >
                <i className="fas fa-map" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <MKImageList />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
