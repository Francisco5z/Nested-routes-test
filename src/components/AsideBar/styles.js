import styled from 'styled-components';

export const HamburgerMenu = styled.div`
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 30px;
  height: 24px;
  width: 30px;
  cursor: pointer;
  transition: 400ms;

  .one, .two, .three {
    width: 100%;
    background-color: #000;
    height: 3px;
    margin-top: 6px;
    transition: 250ms;
  }

  ${props => props.active && "left: -30px;"}
`;

export const Aside = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 3;
  width: 250px;
  height: 100%;
  box-shadow: 10px 10px 60px #aaa;
  margin-left: ${props => props.active ? "0" : "-1000px"};
  transition: margin-left 500ms;
  background-color: #fff;
`;
