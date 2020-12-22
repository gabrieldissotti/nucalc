import React, { useCallback, useMemo, useState } from 'react';
import currency from 'currency.js';

import { Container } from './styles';

type IProps = {
  onChange(value: number): void
}

const Input: React.FC<IProps> = ({ onChange }) => {
  const [value, setValue] = useState('R$ ');

  const sanitize = useCallback((typedValue: string) => Number(String(typedValue.replace(/^\D+/g, '').replaceAll(',', '')).replaceAll('.','')), [])

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;

    const sanitizedValue = sanitize(newValue);

    if (currency(sanitizedValue).value > currency(999999999999999)) return;

    onChange(currency(sanitizedValue).divide(100).value);

    let value;

    if (sanitizedValue <= 9) {
      value = '00' + String(sanitizedValue)
    } else if (sanitizedValue <= 99) {
      value = '0' + String(sanitizedValue)
    } else {
      value = String(sanitizedValue)
    }

    const formattedValue = 'R$ '+ value.substr(0,value.length-2) +'.' + value.substr(value.length-2)

    setValue(currency(formattedValue).format({ symbol: 'R$ ', separator: '.', decimal: ',' }))
  }, [sanitize])

  return <Container onChange={handleChange} value={value} type='tel' />;
}

export default Input;