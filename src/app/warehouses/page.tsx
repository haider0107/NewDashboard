"use client";

import { useEffect } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";

export default function Warehouses() {
  const { setThirdAppBar } = useHeader();

  useEffect(() => {
    // Set custom 3rd AppBar with Warehouses tabs
    setThirdAppBar(
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="My Products" />
          <Tab label="Warehouse Shipments" />
          <Tab label="My Inventory" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Warehouses</h1>
      <p>This is the Warehouses page where you can manage your warehouse locations and inventory.</p>
    </div>
  );
}
