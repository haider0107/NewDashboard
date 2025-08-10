"use client";

import { useEffect } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";

export default function Orders() {
  const { setThirdAppBar } = useHeader();

  useEffect(() => {
    // Set custom 3rd AppBar with Orders tabs
    setThirdAppBar(
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Awaiting Payment" />
          <Tab label="On Hold" />
          <Tab label="Awaiting Shipment" />
          <Tab label="Shipped" />
          <Tab label="Canceled" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Orders</h1>
      <p>
        This is the Orders page where you can manage and track all your orders.
      </p>
    </div>
  );
}
