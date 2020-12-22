import styled, { css } from 'styled-components';
import { pxToRem } from '../../functions';
import colors from '../../styles/colors';

type IProps = {
  isSelected?: boolean;
  onClick(): void;
}

export const Container = styled.button<IProps>`
  
  padding: ${pxToRem(8)} ${pxToRem(16)};
  margin-right: ${pxToRem(16)};
  margin-bottom: ${pxToRem(16)};
  
  font-size: ${pxToRem(18)};
  border-radius: ${pxToRem(8)};
  background-color: ${colors.whiteDark1};
  border: ${pxToRem(1)} solid ${colors.greyLight};
  color: ${colors.greyDark};
  cursor: pointer;
  transition: all 0.3s;

  ${props => props.isSelected && css`
    border-color: ${colors.primary};
    color: ${colors.primary};
    background-color: ${colors.white};
  `}
  @media(max-width: ${pxToRem(1024)}) {
    margin-right: ${pxToRem(8)};
    margin-bottom: ${pxToRem(14)};

    font-size: ${pxToRem(14)};
  }
`;