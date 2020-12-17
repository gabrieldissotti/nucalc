import React, { useCallback, useMemo, useState } from 'react';

import { Container } from './styles';

const Input: React.FC = () => {
  const [value, setValue] = useState('');
  const getJustNumbers = useMemo(() => /^\D+/g, [])

  const sanitize = (value: string) => value.replace(getJustNumbers, '')
  const format = (value: string) => 'R$ ' + value;

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;

    const sanitizedValue = sanitize(newValue);

    console.log(sanitizedValue)

    const formattedValue = format(sanitizedValue)

    setValue(formattedValue)
  }, [sanitize, format])

  return <Container onChange={handleChange} value={value} />;
}

export default Input;