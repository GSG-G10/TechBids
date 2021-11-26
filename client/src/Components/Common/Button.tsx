import React from 'react';
import Stack from '@mui/material/Stack';
import MuiButton from '@mui/material/Button';

import { LoadingButton } from '@mui/lab';

interface Prop {
  loading: boolean;
  handelClick: any;
  text : string;
  width : number;
}

const Button : React.FC<Prop> = ({
  loading, handelClick, text, width,
}) => (
  <Stack spacing={2} direction="row">
    {loading ? (
      <LoadingButton
        disabled
        loading
        loadingPosition="start"
        variant="outlined"
      >
        {text}
      </LoadingButton>
    ) : <MuiButton sx={{ width: `${width}%` }} variant="contained" onClick={handelClick}>{text}</MuiButton>}

  </Stack>
);

export default Button;
