import * as React from "react";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MessageIcon from "@mui/icons-material/Message";
import { Box } from "@mui/material";

const lightColor = "rgba(255, 255, 255, 0.7)";

// Menu mapping for page titles
const pageToTitle: { [key: string]: string } = {
  "/quick-setup": "Quick-Setup",
  "/dashboard": "Dashboard",
  "/orders": "Orders",
  "/shipments": "Shipments",
  "/warehouses": "Warehouses",
  "/analytics": "Analytics",
  "/referral-program": "Referral Program",
  "/settings": "Settings",
};

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;
  const pathname = usePathname();

  // Get the current page title based on pathname
  const currentTitle =
    Object.entries(pageToTitle).find(([key]) =>
      pathname.startsWith(key)
    )?.[1] || "Shipvista Dashboard";

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Box sx={{ display: { sm: "none", xs: "block" } }}>
              <IconButton color="inherit" onClick={onDrawerToggle} edge="start">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flex: 1 }} /> {/* spacer to push right section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Credit Card Icon */}
              <Tooltip title="Payment Methods">
                <IconButton color="inherit">
                  <CreditCardIcon />
                </IconButton>
              </Tooltip>

              {/* Support Icon */}
              <Tooltip title="Support">
                <IconButton color="inherit">
                  <SupportAgentIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>

              {/* User Amount Display */}
              <Box
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  borderRadius: 1,
                  px: 2,
                  py: 0.5,
                  color: lightColor,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                0 USD / 0 CAD
              </Box>

              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* Left: title */}
            <Typography color="inherit" variant="h5" component="h1">
              {currentTitle}
            </Typography>

            {/* Spacer to push right section */}
            <Box sx={{ flex: 1 }} />

            {/* Right: button + icon */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tooltip title="Send Feedback">
                <IconButton color="inherit">
                  <MessageIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}
