"use client";

import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";

export default function ShippingPage() {
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
          <Tab label="Address Book" />
          <Tab label="Box Library" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Shipping Settings</h1>
      <p>Manage your shipping preferences here.</p>
    </div>
  );
}
