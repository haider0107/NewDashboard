"use client";

import { useEffect } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";

export default function Shipments() {
  const { setThirdAppBar } = useHeader();

  useEffect(() => {
    // Set custom 3rd AppBar with Shipments tabs
    setThirdAppBar(
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Create Shipment" />
          <Tab label="Shipments History" />
          <Tab label="My Pickups" />
          <Tab label="Fulfillments" />
          <Tab label="End of Day" />
          <Tab label="Batches History" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Shipments</h1>
      <p>This is the Shipments page where you can view and manage all your shipment details.</p>
    </div>
  );
}
