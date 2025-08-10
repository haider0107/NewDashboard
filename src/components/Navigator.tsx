import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const menu = [
  { id: "Quick-Setup", icon: <RocketLaunchIcon />, href: "/quick-setup" },
  { id: "Dashboard", icon: <HomeIcon />, href: "/dashboard" },
  { id: "Orders", icon: <ListAltIcon />, href: "/orders" },
  { id: "Shipments", icon: <LocalShippingIcon />, href: "/shipments" },
  { id: "Warehouses", icon: <PublicIcon />, href: "/warehouses" },
  { id: "Analytics", icon: <AnalyticsIcon />, href: "/analytics" },
  { id: "Referral Program", icon: <PeopleIcon />, href: "/referral-program" },
  { id: "Settings", icon: <SettingsIcon />, href: "/settings" },
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

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const pathname = usePathname();

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
      </List>
    </Drawer>
  );
}
