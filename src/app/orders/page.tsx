"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";
import AwaitingPayment from "@/components/orders/awaitingPayment";
import OnHold from "@/components/orders/onHold";
import AwaitingShipment from "@/components/orders/awaitingShipment";
import Shipped from "@/components/orders/shipped";
import Canceled from "@/components/orders/canceled";

export default function Orders() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = useMemo(() => [
    { label: "Awaiting Payment", component: <AwaitingPayment /> },
    { label: "On Hold", component: <OnHold /> },
    { label: "Awaiting Shipment", component: <AwaitingShipment /> },
    { label: "Shipped", component: <Shipped /> },
    { label: "Canceled", component: <Canceled /> },
  ], []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Orders tabs
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
