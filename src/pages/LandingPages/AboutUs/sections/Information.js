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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="event"
                    title="Entregas Programadas"
                    description="Para Servicios Nápoles es un placer atenderte, tanto que agendamos todos nuestros eventos para evitar contratiempos"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Pagos con tranferencias o depositos en oxxo"
                    description="Con gusto te damos el numero de cuenta o tarjeta para depositar"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="savings"
                    title="Sin costos extra a colonias aledañas"
                    description="Nuestro servicio es competente, economico, para que tengas menos gastos"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Renta por dias o semanas"
                    description="Para sentirte comodo sin prisas hay un plan para mas dias de lo normal aplicando un 5 % de descuento despues de 4 dias en adelante"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rXWYlXCrZrA3NkTcSMzcWJ6QDBjUBzTsHgPLWpun1-utpdeGnV5_KVXyMywAfHJR6ovJcMn-FUjOK62eT_zX7ScjBo4A=s2560"
              // https://drive.google.com/file/d/1c_gutU0HyCr49smiOiq5QG0xr-p-aCgJ/view?usp=share_link
              title="Sillas nuevas"
              description="Manteleria solo blanca por el momento"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
