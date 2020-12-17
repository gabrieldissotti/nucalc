import styled from 'styled-components';
import { pxToRem } from '../functions';
import colors from './colors';


//position
//box
//display
//others

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.primary};
`;

export const Card = styled.div`
  width: ${pxToRem(527)};
  height:  ${pxToRem(597)};
  
  padding: ${pxToRem(32)};
  border-radius: ${pxToRem(8)};
  background-color: ${colors.white};
`;

export const H1 = styled.h1`
  margin-bottom: ${pxToRem(16)};

  font-size: ${pxToRem(24)};
`;

export const Small = styled.small`
  font-size: ${pxToRem(18)};
  color: ${colors.grey};
`;

export const P = styled.p`
  margin-top: ${pxToRem(40)};
  margin-bottom: ${pxToRem(16)};

  font-size: ${pxToRem(20)};
`;

export const Wrap = styled.div`
`;

export const Strong = styled.strong`
  font-size: ${pxToRem(28)};
  color: ${colors.green};
  font-weight: 500;
`;