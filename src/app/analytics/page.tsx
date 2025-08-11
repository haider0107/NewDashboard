"use client";

import { useEffect, useState, useMemo } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";
import Overview from "@/components/analytics/overview";
import Operation from "@/components/analytics/operation";
import SalesTrend from "@/components/analytics/salesTrend";
import CustomerOverview from "@/components/analytics/customerOverview";
import ProductHighlights from "@/components/analytics/productHighlights";

export default function Analytics() {
  const { setThirdAppBar } = useHeader();
  const [tabValue, setTabValue] = useState(0);

  const tabContents = useMemo(() => [
    { label: "Overview", component: <Overview /> },
    { label: "Operation", component: <Operation /> },
    { label: "Sales Trend", component: <SalesTrend /> },
    { label: "Customer Overview", component: <CustomerOverview /> },
    { label: "Product Highlights", component: <ProductHighlights /> },
  ], []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Set custom 3rd AppBar with Analytics tabs
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
