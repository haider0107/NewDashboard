"use client";

import { useHeader } from "@/components/context/HeaderContext";
import SetupCarriers from "@/components/settings/integration/SetupCarriers";
import SetupStores from "@/components/settings/integration/SetupStores";
import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function IntegrationPage() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = [
    { label: "Setup Stores", component: <SetupStores /> },
    { label: "Setup Carriers", component: <SetupCarriers /> },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Referral Program tabs
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
