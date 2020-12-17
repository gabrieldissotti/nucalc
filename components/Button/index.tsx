import React from 'react';

import { Container } from './styles';

type IProps = {
  isSelected?: boolean;
  handleSelect(itemId: string): void
}

const Button: React.FC<IProps> = ({ children, isSelected, handleSelect }) => {
  return <Container isSelected={isSelected} onClick={handleSelect}>{children}</Container>;
}

export default Button;