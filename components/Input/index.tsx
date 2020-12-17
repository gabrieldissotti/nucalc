import React, { useCallback, useMemo, useState } from 'react';

import { Container } from './styles';

type IProps = {
  onChange(value: number): void
}

const Input: React.FC<IProps> = ({ onChange }) => {
  const [value, setValue] = useState('R$ ');
  const getJustNumbers = useMemo(() => /^\D+/g, [])

  const sanitize = (typedValue: string) => Number(typedValue.replace(getJustNumbers, ''))
  
  const format = (sanitizedValue: number) => 'R$ '.concat(sanitizedValue.toString());

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;

    const sanitizedValue = sanitize(newValue);

    onChange(sanitizedValue);

    const formattedValue = format(sanitizedValue)

    setValue(formattedValue)
  }, [sanitize, format])

  return <Container onChange={handleChange} value={value} />;
}

export default Input;