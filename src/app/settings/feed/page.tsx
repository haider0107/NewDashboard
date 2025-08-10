"use client";

import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";

export default function FeedPage() {
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
          <Tab label="Bulk Orders Feed " />
          <Tab label="Bulk Affiliate User Feed" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Feed Settings</h1>
      <p>Configure your feed settings here.</p>
    </div>
  );
}
