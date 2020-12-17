import styled, { css } from 'styled-components';
import { pxToRem } from '../../functions';
import colors from '../../styles/colors';

export const Container = styled.input`
  width: 100%;
  padding: ${pxToRem(8)} ${pxToRem(16)};

  font-size: ${pxToRem(24)};
  background: ${colors.whiteDark1};
  border-radius: ${pxToRem(8)};


  @media(max-width: ${pxToRem(1024)}) {
    font-size: ${pxToRem(20)};
  }
`;