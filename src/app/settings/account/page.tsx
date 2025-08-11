"use client";

import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyProfile from "@/components/settings/account/myProfile";
import Payments from "@/components/settings/account/payments";
import Offers from "@/components/settings/account/offers";
import TransactionHistory from "@/components/settings/account/transactionHistory";
import Subscription from "@/components/settings/account/subscription";
import AirmilesRewards from "@/components/settings/account/airmilesRewards";

export default function AccountPage() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = [
    { label: "My Profile", component: <MyProfile /> },
    { label: "Payments", component: <Payments /> },
    { label: "Offers", component: <Offers /> },
    { label: "Transaction History", component: <TransactionHistory /> },
    { label: "Subscription", component: <Subscription /> },
    { label: "Airmiles Rewards", component: <AirmilesRewards /> },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Account tabs
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
