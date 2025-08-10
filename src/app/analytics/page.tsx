"use client";

import { useEffect } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";

export default function Analytics() {
  const { setThirdAppBar } = useHeader();

  useEffect(() => {
    // Set custom 3rd AppBar with Analytics tabs
    setThirdAppBar(
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Overview" />
          <Tab label="Operation" />
          <Tab label="Sales Trend" />
          <Tab label="Customer Overview" />
          <Tab label="Product Highlights" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Analytics</h1>
      <p>This is the Analytics page where you can view reports and insights about your shipping performance.</p>
    </div>
  );
}
