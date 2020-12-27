import React from 'react';

type IProps = {
  isSelected?: boolean;
  handleSelect(): void
}

const Button: React.FC<IProps> = ({ children, isSelected, handleSelect }) => {
  return (
    <button
      className={`${isSelected && 'isSelected'}`}
      onClick={() => handleSelect()}
    >{children}</button>
  );
}

export default Button;