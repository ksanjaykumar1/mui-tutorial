import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

function SliderComponent({
  min,
  max,
  defaultValue,
  step,
  onChange,
  value,
  label,
  amount,
  unit,
}) {
  return (
    <>
      <Stack spacing={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>
          {unit}
          {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label='Default'
        valueLabelDisplay='auto'
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography variant='caption' color='text.secondary'>
          {min}
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          {max}
        </Typography>
      </Stack>
    </>
  );
}

export default SliderComponent;
