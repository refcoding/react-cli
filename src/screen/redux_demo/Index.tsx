import React from 'react';
import { Box, Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from '../../redux/reducers/count';
import { RootState } from '../../redux/store';

export const ReduxDemo = () => {
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: blueGrey[500],
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          dispatch(decremented());
        }}
        sx={{ fontSize: 20 }}
      >
        -
      </Button>
      <Box sx={{ m: 5, fontSize: 30 }}>{count}</Box>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(incremented());
        }}
        sx={{ fontSize: 20 }}
      >
        +
      </Button>
    </Box>
  );
};
