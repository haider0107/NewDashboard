"use client";

import { useEffect } from "react";
import { useHeader } from "@/components/context/HeaderContext";
import { AppBar, Tabs, Tab } from "@mui/material";

export default function ReferralProgram() {
  const { setThirdAppBar } = useHeader();

  useEffect(() => {
    // Set custom 3rd AppBar with Referral Program tabs
    setThirdAppBar(
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Dashboard" />
          <Tab label="My Referrals" />
          <Tab label="Earnings" />
          <Tab label="Program Details" />
        </Tabs>
      </AppBar>
    );

    // Reset when leaving page
    return () => setThirdAppBar(null);
  }, [setThirdAppBar]);

  return (
    <div>
      <h1>Referral Program</h1>
      <p>This is the Referral Program page where you can manage your referral rewards and track earnings.</p>
    </div>
  );
}
