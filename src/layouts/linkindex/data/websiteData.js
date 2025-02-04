/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { Button } from "@mui/material";
import { Icon } from "@mui/material";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import google from "assets/avatar/google.png";
import slack from "assets/avatar/slack.png";
import microsoft from "assets/avatar/microsoft.png";
import instagram from "assets/avatar/instagram.png";
import netflix from "assets/avatar/netflix.jpeg";
import apple from "assets/avatar/apple.png";
import { Description } from "@mui/icons-material";

export default function data() {
  const Name = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const DESCRIPTION = ({ description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const Service = ({ service }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">{service}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "25%", align: "left" },
      { Header: "service", accessor: "service", width: "1%", align: "left" },
      { Header: "description", accessor: "description", width: "50%", align: "center" },
      { Header: "url", accessor: "button", align: "center" },
    ],

    rows: [
      {
        name: <Name image={google} name="John Michael" email="john@creative-tim.com" />,
        description: <DESCRIPTION description="abc@gmail.com" />,
        service: <Service service="google" />,
        button: (
          <Button
            variant="contained"
            color="primary"
            style={{ color: "#fff" }}
            sx={{ minWidth: "80px", minHeight: "30px", fontSize: "12px" }}
            onClick={() => window.open("https://example.com", "_blank", "noopener,noreferrer")}
          >
            Click Me
          </Button>
        ),
      },
      {
        name: <Name image={google} name="John Michael" email="john@creative-tim.com" />,
        description: <DESCRIPTION description="abc@gmail.com" />,
        service: <Service service="google" />,
        button: (
          <Button
            variant="contained"
            color="primary"
            style={{ color: "#fff" }}
            sx={{ minWidth: "80px", minHeight: "30px", fontSize: "12px" }}
            onClick={() => window.open("https://example.com", "_blank", "noopener,noreferrer")}
          >
            Click Me
          </Button>
        ),
      },
    ],
  };
}
