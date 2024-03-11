import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldMui({ label, handleChange, ...props }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        id="demo-helper-text-aligned-no-helper"
        onChange={handleChange}
        autoComplete="off"
        fullWidth
        label={label}
        {...props}
      />
    </Box>
  );
}
