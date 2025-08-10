import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const menu = [
  { id: "Quick-Setup", icon: <RocketLaunchIcon />, href: "/quick-setup" },
  { id: "Dashboard", icon: <HomeIcon />, href: "/dashboard" },
  { id: "Orders", icon: <ListAltIcon />, href: "/orders" },
  { id: "Shipments", icon: <LocalShippingIcon />, href: "/shipments" },
  { id: "Warehouses", icon: <PublicIcon />, href: "/warehouses" },
  { id: "Analytics", icon: <AnalyticsIcon />, href: "/analytics" },
  { id: "Referral Program", icon: <PeopleIcon />, href: "/referral-program" },
];

const settingsMenu = [
  { id: "Account", icon: <AccountBoxIcon />, href: "/settings/account" },
  {
    id: "Integration",
    icon: <IntegrationInstructionsIcon />,
    href: "/settings/integration",
  },
  { id: "Shipping", icon: <LocalShippingIcon />, href: "/settings/shipping" },
  { id: "Feed", icon: <RssFeedIcon />, href: "/settings/feed" },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

interface NavigatorProps extends DrawerProps {
  onLinkClick?: () => void;
}

export default function Navigator(props: NavigatorProps) {
  const { onLinkClick, ...other } = props;
  const pathname = usePathname();
  const [openSettings, setOpenSettings] = React.useState(false);

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  const isSettingsActive = pathname.startsWith("/settings");

  const handleMenuClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Shipvista
        </ListItem>
        {menu.map(({ id, icon, href }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={id}
              href={href}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleMenuClick}
            >
              <ListItemButton
                sx={{
                  ...item,
                  ...itemCategory,
                  ...(isActive && {
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                    color: "#4fc3f7",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.12)",
                    },
                  }),
                }}
                selected={isActive}
              >
                <ListItemIcon sx={{ color: isActive ? "#4fc3f7" : "inherit" }}>
                  {icon}
                </ListItemIcon>
                <ListItemText>{id}</ListItemText>
              </ListItemButton>
            </Link>
          );
        })}

        {/* Settings Parent Item */}
        <ListItemButton
          onClick={handleSettingsClick}
          sx={{
            ...item,
            ...itemCategory,
            ...(isSettingsActive && {
              bgcolor: "rgba(255, 255, 255, 0.08)",
              color: "#4fc3f7",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.12)",
              },
            }),
          }}
          selected={isSettingsActive}
        >
          <ListItemIcon
            sx={{ color: isSettingsActive ? "#4fc3f7" : "inherit" }}
          >
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
          {openSettings ? (
            <ExpandLessIcon sx={{ color: "inherit" }} />
          ) : (
            <ExpandMoreIcon sx={{ color: "inherit" }} />
          )}
        </ListItemButton>

        {/* Settings Subsections */}
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding id="settings-submenu">
            {settingsMenu.map(({ id, icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={id}
                  href={href}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={handleMenuClick}
                >
                  <ListItemButton
                    sx={{
                      ...item,
                      pl: 6, // Increased left padding for nesting
                      py: 1,
                      ...(isActive && {
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                        color: "#4fc3f7",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.12)",
                        },
                      }),
                    }}
                    selected={isActive}
                  >
                    <ListItemIcon
                      sx={{ color: isActive ? "#4fc3f7" : "inherit" }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={id} />
                  </ListItemButton>
                </Link>
              );
            })}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
