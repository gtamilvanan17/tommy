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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/custom/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import * as React from "react";
import Button from "@mui/material/Button";
import { AccessTimeFilled } from "@mui/icons-material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Custom() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid> */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date={
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <span>campaign</span>
                      <Button variant="contained" size="small" sx={{ marginLeft: "auto" }}>
                        Contained
                      </Button>
                    </MDBox>
                  }
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date={
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <span>campaign</span>
                      <Button variant="contained" size="small" sx={{ marginLeft: "auto" }}>
                        Contained
                      </Button>
                    </MDBox>
                  }
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date={
                    <MDBox display="flex" justifyContent="space-between" alignItems="center">
                      <span>campaign</span>
                      <Button variant="contained" size="small" sx={{ marginLeft: "auto" }}>
                        Contained
                      </Button>
                    </MDBox>
                  }
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card sx={{ maxWidth: 345 }}>
                  {/* Card Media with Image */}
                  <CardMedia
                    component="img"
                    alt="campaign image"
                    height="140"
                    image="https://placehold.co/600x400" // Replace with your image URL
                  />
                  {/* Card Content */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Website Views
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Last Campaign Performance
                    </Typography>
                  </CardContent>

                  {/* Card Actions for Date and Button */}
                  <CardActions>
                    <MDBox display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                      {/* AccessTimeFilled Icon and Date */}
                      <AccessTimeFilled sx={{ fontSize: 10, marginRight: 1 }} />
                      <span>Campaign</span>
                    </MDBox>
                    {/* Button to the right */}
                    <Button variant="contained" size="small" sx={{ marginLeft: "auto" }}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card sx={{ maxWidth: 345 }}>
                  {/* Card Media with Image */}
                  <CardMedia
                    component="img"
                    alt="campaign image"
                    height="140"
                    image="https://placehold.co/600x400" // Replace with your image URL
                  />
                  {/* Card Content */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Website Views
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Last Campaign Performance
                    </Typography>
                  </CardContent>

                  {/* Card Actions for Date and Button */}
                  <CardActions>
                    <MDBox display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                      {/* AccessTimeFilled Icon and Date */}
                      <AccessTimeFilled sx={{ fontSize: 10, marginRight: 1 }} />
                      <span>Campaign</span>
                    </MDBox>
                    {/* Button to the right */}
                    <Button variant="contained" size="small" sx={{ marginLeft: "auto" }}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <Card sx={{ maxWidth: 345 }}>
                  {/* Card Media with Image */}
                  <CardMedia
                    component="img"
                    alt="campaign image"
                    height="140"
                    image="https://placehold.co/600x400" // Replace with your image URL
                  />
                  {/* Card Content */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Website Views
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Last Campaign Performance
                    </Typography>
                  </CardContent>

                  {/* Card Actions for Date and Button */}
                  <CardActions>
                    <MDBox display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                      {/* AccessTimeFilled Icon and Date */}
                      <AccessTimeFilled sx={{ fontSize: 10, marginRight: 1 }} />
                      <span>Campaign</span>
                    </MDBox>
                    {/* Button to the right */}
                    <Button variant="contained" size="small" sx={{ marginLeft: "auto" }}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </MDBox>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> */}
          </Grid>
        </MDBox>
        {/* <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox> */}
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Custom;
