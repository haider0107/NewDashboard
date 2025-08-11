"use client";

import React, { useEffect, useState } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";
import MyProducts from "@/components/warehouses/myProducts";
import WarehouseShipments from "@/components/warehouses/warehouseShipments";
import MyInventory from "@/components/warehouses/myInventory";

export default function Warehouses() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = [
    { label: "My Products", component: <MyProducts /> },
    { label: "Warehouse Shipments", component: <WarehouseShipments /> },
    { label: "My Inventory", component: <MyInventory /> },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Warehouses tabs
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
