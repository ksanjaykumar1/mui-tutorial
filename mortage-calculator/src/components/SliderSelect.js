import React from 'react';
import SliderComponent from './common/SliderComponent';
import { Stack } from '@mui/material';

function SliderSelect({ setData, data }) {
  const bank_limit = 10000;
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <SliderComponent
          label='Home Value'
          min={10}
          max={bank_limit}
          defaultValue={data.homeValue}
          step={10}
          onChange={(e, value) =>
            setData({
              ...data,
              homeValue: value,
              downPayment: value * 0.2,
              loanAmount: value * 0.8,
            })
          }
          unit={'$'}
          amount={data.homeValue}
          value={data.homeValue}
        />

        <SliderComponent
          label='Down Payment'
          min={0}
          max={data.homeValue}
          defaultValue={data.downPayment}
          step={10}
          onChange={(e, value) =>
            setData({
              ...data,
              downPayment: value,
              loanAmount: data.homeValue - value,
            })
          }
          unit={'$'}
          amount={data.downPayment}
          value={data.downPayment}
        />
        <SliderComponent
          label='Loan Amount'
          min={10}
          max={data.homeValue}
          defaultValue={data.loanAmount}
          step={10}
          onChange={(e, value) => 
            setData({
              ...data,
              loanAmount: value,
              downPayment: data.homeValue - value,
            })
          }
          unit={'$'}
          amount={data.loanAmount}
          value={data.loanAmount}
        />
        <SliderComponent
          label='Interest Rate'
          min={2}
          max={18}
          defaultValue={data.interestRate}
          step={0.5}
          onChange={(e, value) => setData({ ...data, interestRate: value })}
          unit={'%'}
          amount={data.interestRate}
          value={data.interestRate}
        />
      </Stack>
    </Stack>
  );
}

export default SliderSelect;
