import React from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "ProtectedRoute"; // Import the ProtectedRoute component

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Linkindex from "layouts/linkindex";
import Devops from "layouts/devops";
import MyWebsites from "layouts/mywebsites";
import Accounts from "layouts/accounts";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/signin";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: (
      <ProtectedRoute>
        <Tables />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: (
      <ProtectedRoute>
        <Billing />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: (
      <ProtectedRoute>
        <Notifications />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "My Websites",
    key: "mywebsites",
    icon: <Icon fontSize="small">language</Icon>,
    route: "/mywebsites",
    component: (
      <ProtectedRoute>
        <MyWebsites />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "Link Index",
    key: "linkindex",
    icon: <Icon fontSize="small">category</Icon>,
    route: "/linkindex",
    component: (
      <ProtectedRoute>
        <Linkindex />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "DevOps",
    key: "devops",
    icon: <Icon fontSize="small">wifi</Icon>,
    route: "/devops",
    component: (
      <ProtectedRoute>
        <Devops />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    icon: <Icon fontSize="small">manage_accounts</Icon>,
    route: "/accounts",
    component: (
      <ProtectedRoute>
        <Accounts />
      </ProtectedRoute>
    ),
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "signin",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/signin",
    component: <SignIn />, // No protection needed for Sign In
  },
];

export default routes;
