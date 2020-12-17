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


  @media(max-width: ${pxToRem(1024)}) {
    align-items: flex-end;
  }
`;

export const Card = styled.div`
  width: ${pxToRem(527)};
  min-height:  ${pxToRem(597)};
  
  padding: ${pxToRem(32)};
  border-radius: ${pxToRem(8)};
  background-color: ${colors.white};

  @media(max-width: ${pxToRem(1024)}) {
    min-height:  98%;
    width: 100%;
    
    border-radius: ${pxToRem(8)} ${pxToRem(8)} ${pxToRem(0)} ${pxToRem(0)};
  }
`;

export const H1 = styled.h1`
  margin-bottom: ${pxToRem(16)};

  font-size: ${pxToRem(24)};

  @media(max-width: ${pxToRem(1024)}) {
    margin-bottom: ${pxToRem(8)};
    
    font-size: ${pxToRem(20)};
  }
`;

export const Small = styled.small`
  font-size: ${pxToRem(18)};
  color: ${colors.grey};

  a { 
    color: ${colors.blue};
    text-decoration: underline;
  }

  @media(max-width: ${pxToRem(1024)}) {
    font-size: ${pxToRem(14)};
  }
`;

export const P = styled.p`
  margin-top: ${pxToRem(40)};
  margin-bottom: ${pxToRem(16)};

  font-size: ${pxToRem(20)};


  @media(max-width: ${pxToRem(1024)}) {
    font-size: ${pxToRem(16)};
  }
`;

export const Wrap = styled.div``;

export const Strong = styled.strong`
  font-size: ${pxToRem(28)};
  color: ${colors.green};
  font-weight: 500;

  @media(max-width: ${pxToRem(1024)}) {
    font-size: ${pxToRem(24)};
  }
`;