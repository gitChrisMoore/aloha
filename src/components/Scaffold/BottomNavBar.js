import { useState } from 'react';
import { Link } from 'react-router-dom'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';

import { Paper } from '@mui/material';

export function BottomNavBar() {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Scan" to="/scan"  component={Link} icon={<QrCodeScannerIcon />} />
        <BottomNavigationAction label="Balance" to="/balance"  component={Link} icon={<AccountBalanceIcon />} />
        <BottomNavigationAction label="Profile" to="/profile"  component={Link} icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
