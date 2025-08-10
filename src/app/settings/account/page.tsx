"use client";

import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";

export default function AccountPage() {
  const { setThirdAppBar } = useHeader();

  useEffect(() => {
    // Set custom 3rd AppBar with Referral Program tabs
    setThirdAppBar(
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="My Profile" />
          <Tab label="Payments" />
          <Tab label="Offers" />
          <Tab label="Transaction History" />
          <Tab label="Subscription" />
          <Tab label="Airmiles Rewards" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Account Settings</h1>
      <p>Manage your account settings here.</p>
    </div>
  );
}
