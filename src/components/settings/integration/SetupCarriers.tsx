import { Box, Typography, Button, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export default function SetupCarriers() {
  const [tabValue, setTabValue] = useState(0);
  
  const handleConnectCarrier = () => {
    // Handle connect carrier account logic
    console.log("Connect carrier account clicked");
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Dummy data for ShipVista Account tab (6 columns)
  const shipVistaData = [
    {
      id: 1,
      canada: "Toronto Hub",
      column2: "Express",
      column3: "Ground",
      active: true,
      column5: "Standard",
      column6: "Premium"
    },
    {
      id: 2,
      canada: "Vancouver Hub",
      column2: "Priority",
      column3: "Air",
      active: false,
      column5: "Economy",
      column6: "Express"
    },
    {
      id: 3,
      canada: "Montreal Hub",
      column2: "Standard",
      column3: "Ground",
      active: true,
      column5: "Fast",
      column6: "Regular"
    }
  ];

  // Dummy data for Your Account tab (5 columns)
  const yourAccountData = [
    {
      id: 1,
      column1: "Service 1",
      carrier: "FedEx",
      account: "ACC001",
      active: true,
      column5: "International"
    },
    {
      id: 2,
      column1: "Service 2",
      carrier: "UPS",
      account: "ACC002",
      active: false,
      column5: "Domestic"
    },
    {
      id: 3,
      column1: "Service 3",
      carrier: "DHL",
      account: "ACC003",
      active: true,
      column5: "Express"
    },
    {
      id: 4,
      column1: "Service 4",
      carrier: "Canada Post",
      account: "ACC004",
      active: true,
      column5: "Standard"
    }
  ];

  return (
    <Box >
      {/* Header Section */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "flex-start",
          mb: 3
        }}
      >
        {/* Left: Heading and Subtitle */}
        <Box>
          <Typography variant="h5" component="h1" sx={{ mb: 1, fontWeight: 600 }}>
            Setup Carriers
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Configure your shipping carriers to enable delivery options
          </Typography>
        </Box>

        {/* Right: Connect Button */}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleConnectCarrier}
          sx={{ 
            minWidth: "200px",
            height: "fit-content"
          }}
        >
          Connect Carrier Account
        </Button>
      </Box>

      {/* Content Area */}
      <Box>
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="carrier tabs">
            <Tab label="ShipVista Account" />
            <Tab label="Your Account" />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        {tabValue === 0 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              ShipVista Account
            </Typography>
            <TableContainer component={Paper} elevation={1}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'grey.50' }}>
                    <TableCell sx={{ fontWeight: 600 }}>Canada</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Service Type</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Method</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Active</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Speed</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shipVistaData.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>{row.canada}</TableCell>
                      <TableCell>{row.column2}</TableCell>
                      <TableCell>{row.column3}</TableCell>
                      <TableCell>
                        <Chip 
                          label={row.active ? 'Active' : 'Inactive'} 
                          color={row.active ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{row.column5}</TableCell>
                      <TableCell>{row.column6}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Your Account
            </Typography>
            <TableContainer component={Paper} elevation={1}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'grey.50' }}>
                    <TableCell sx={{ fontWeight: 600 }}>Service</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Carrier</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Account</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Active</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {yourAccountData.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>{row.column1}</TableCell>
                      <TableCell>{row.carrier}</TableCell>
                      <TableCell>{row.account}</TableCell>
                      <TableCell>
                        <Chip 
                          label={row.active ? 'Active' : 'Inactive'} 
                          color={row.active ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{row.column5}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
}
