"use client";

import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressBook from "@/components/settings/shipping/addressBook";
import BoxLibrary from "@/components/settings/shipping/boxLibrary";

export default function ShippingPage() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = [
    { label: "Address Book", component: <AddressBook /> },
    { label: "Box Library", component: <BoxLibrary /> },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Shipping tabs
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
