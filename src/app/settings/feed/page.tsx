"use client";

import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import BulkOrdersFeed from "@/components/settings/feed/bulkOrdersFeed";
import BulkAffiliateUserFeed from "@/components/settings/feed/bulkAffiliateUserFeed";

export default function FeedPage() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = [
    { label: "Bulk Orders Feed", component: <BulkOrdersFeed /> },
    { label: "Bulk Affiliate User Feed", component: <BulkAffiliateUserFeed /> },
  ];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Feed tabs
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
