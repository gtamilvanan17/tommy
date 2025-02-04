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

export default function data() {
  const Author = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Username = ({ username }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">{username}</MDTypography>
    </MDBox>
  );

  const EMAIL = ({ email }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">{email}</MDTypography>
    </MDBox>
  );

  const Service = ({ service }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography variant="caption">{service}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "author", accessor: "author", width: "15%", align: "left" },
      { Header: "email", accessor: "email", width: "25%", align: "center" },
      { Header: "username", accessor: "username", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "service", accessor: "service", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
      { Header: "Manage", accessor: "button", align: "center" },
    ],

    rows: [
      {
        author: <Author image={google} name="John Michael" email="john@creative-tim.com" />,
        email: <EMAIL email="abc@gmail.com" />,
        username: <Username username="@tommy" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        service: <Service service="google" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
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
        author: <Author image={microsoft} name="Alexa Liras" email="alexa@creative-tim.com" />,
        email: <EMAIL email="abc@gmail.com" />,
        username: <Username username="@tommy" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        service: <Service service="google" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
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
        author: <Author image={slack} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        email: <EMAIL email="abc@gmail.com" />,
        username: <Username username="@tommy" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        service: <Service service="google" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
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
        author: <Author image={instagram} name="Michael Levi" email="michael@creative-tim.com" />,
        email: <EMAIL email="abc@gmail.com" />,
        username: <Username username="@tommy" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        service: <Service service="google" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
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
        author: <Author image={netflix} name="Richard Gran" email="richard@creative-tim.com" />,
        email: <EMAIL email="abc@gmail.com" />,
        username: <Username username="@tommy" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        service: <Service service="google" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
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
        author: <Author image={apple} name="Miriam Eric" email="miriam@creative-tim.com" />,
        email: <EMAIL email="abc@gmail.com" />,
        username: <Username username="@tommy" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        service: <Service service="google" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
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
        author: <Author image={google} name="Tommy" email="miriam@creative-tim.com" />,
        email: <EMAIL email="abc@gmail.com" />,
        username: <Username username="@tommy" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        service: <Service service="google" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
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
