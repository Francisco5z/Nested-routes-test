import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body, html, #root {
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Ubuntu'
  }

  .header-template {
    h1 {
      width: 90%;
      text-align: end;
      font-size: 25pt;
      margin: 0 auto 5px auto;
    }
  }
  .main-el-template {
    width: 88%;
    margin: 10px auto 0 auto;
  }
`;
