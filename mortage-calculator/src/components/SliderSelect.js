import React from 'react';
import SliderComponent from './common/SliderComponent';
import { Stack } from '@mui/material';

function SliderSelect() {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <SliderComponent
          label='Home Value'
          min={10}
          max={250}
          defaultValue={40}
          step={10}
          onChange={(e, value) => console.log(value)}
          unit={'$'}
          amount={3000}
        />

        <SliderComponent
          label='Down Payment'
          min={10}
          max={150}
          defaultValue={40}
          step={10}
          onChange={(e, value) => console.log(value)}
          unit={'$'}
          amount={500}
        />
        <SliderComponent
          label='Loan Amount'
          min={10}
          max={1250}
          defaultValue={40}
          step={10}
          onChange={(e, value) => console.log(value)}
          unit={'$'}
          amount={700}
        />
      </Stack>
    </Stack>
  );
}

export default SliderSelect;
