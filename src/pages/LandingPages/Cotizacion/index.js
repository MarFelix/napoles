/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import MKAvatar from "components/MKAvatar";

// Routes
import footerRoutes from "footer.routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import bgImage from "assets/images/city-profile.jpg";
import image from "assets/images/silla.png";
import mesa from "assets/images/mesa.png";
import mantel from "assets/images/mantel2.png";

// Presentation page components
import CardProduct from "pages/Presentation/components/CardProduct";

import MuiPhoneNumber from "material-ui-phone-number";

function Cotizacion() {
  return (
    <>
      <DefaultNavbar routes={[]} transparent light />
      <Grid container spacing={1} m={0} alignItems="center">
        <MKBox
          minHeight="6rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
          mt={-15}
          mb={-15}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
            m={0}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Cotización
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Cotización en proceso , todas las cotizaciones se pasan a revisión todo esto es para
                dar un mejor servicio por favor selecciona la cantidad de sillas, mesas y manteles
                fecha y direccion a donde se va enviar.
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={2}>
                    <CardProduct image={image} name="Silla Cannes" count={10} type={1} />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <MKInput type="number" label="¿Cuantas Sillas necesitas?" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <CardProduct image={mesa} name="Mesa LIFETIME" count={10} type={2} />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <MKInput type="number" label="¿Cuantas Mesas necesitas?" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <CardProduct image={mantel} name="Mantel Blanco" count={10} type={3} />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <MKInput type="number" label="¿Cuantos Manteles?" fullWidth />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <MKInput
                      type="text"
                      required
                      label="Escribe tu nombre con al menos un apellido"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <MuiPhoneNumber defaultCountry="it" regions={"europe"} variant="outlined" />
                  </Grid>

                  {/* <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid> */}

                  <Grid item xs={12}>
                    <MKInput label="Dirección" multiline fullWidth rows={6} />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Cotizacion;
