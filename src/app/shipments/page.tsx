"use client";

import React, { useEffect, useState } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";
import CreateShipment from "@/components/shipments/createShipment";
import ShipmentsHistory from "@/components/shipments/shipmentsHistory";
import MyPickups from "@/components/shipments/myPickups";
import Fulfillments from "@/components/shipments/fulfillments";
import EndOfDay from "@/components/shipments/endOfDay";
import BatchesHistory from "@/components/shipments/batchesHistory";

export default function Shipments() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = [
    { label: "Create Shipment", component: <CreateShipment /> },
    { label: "Shipments History", component: <ShipmentsHistory /> },
    { label: "My Pickups", component: <MyPickups /> },
    { label: "Fulfillments", component: <Fulfillments /> },
    { label: "End of Day", component: <EndOfDay /> },
    { label: "Batches History", component: <BatchesHistory /> },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Shipments tabs
    setThirdAppBar(
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={tabValue} onChange={handleTabChange} textColor="inherit">
          {tabContents.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar, tabValue]);

  return <div>{tabContents[tabValue]?.component}</div>;
}
