import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import styles from './BasicButtons.module.scss';

export default function BasicButtons({ size = 'midle', onClick, children, type = 'submit' }) {
  return (
    <div className={styles.btn}>
      <Stack spacing={2} direction="row">
        <Button onClick={onClick} variant="contained" type={type} size={size}>
          {children}
        </Button>
      </Stack>
    </div>
  );
}
