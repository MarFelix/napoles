// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logoNapoles.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Sllas y Mesas Nápoles",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=100066741323747",
    },
  ],
  menus: [
    {
      name: "Nosotros",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        // { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        // { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        // { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        // { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "Ayuda y soporte",
      items: [
        { name: "Contáctanos", href: "https://www.creative-tim.com/contact-us" },
        // { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        // { name: "custom development", href: "https://services.creative-tim.com/" },
        // { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "Legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "Aviso de Privacidad", href: "https://www.creative-tim.com/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Sillas y Mesas Nápoles create by{" "}
      <MKTypography
        component="a"
        href="https://www.linkedin.com/in/carlos-adrian-mar29052021"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Carlos Mar
      </MKTypography>
      .
    </MKTypography>
  ),
};
