import styled from 'styled-components';

import { getRandomColor } from '../../../../utils/getRandomColor';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 20px;
`;

export const UserLogo = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${getRandomColor()};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30pt;
    color: #fff;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

export const Username = styled.p`
  margin-top: 10px;
`;