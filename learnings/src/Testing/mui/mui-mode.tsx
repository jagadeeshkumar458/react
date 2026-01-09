import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

function MuiMode() {
  const theme = useTheme();
  return (
    <div>
      <Typography variant="h6">Current Theme Mode: {theme.palette.mode}</Typography>
    </div>
  )
}

export default MuiMode