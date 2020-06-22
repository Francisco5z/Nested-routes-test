import styled from 'styled-components';

export const Container = styled.div`
  main .register-box {
    margin-top: 30px;
    
    div {
      margin-top: 10px;
      width: 300px;
      display: flex;
      flex-direction: row;

      p {
        font-size: 18px;
        font-weight: normal;
      }

      button {
        width: 60px;
        height: 30px;
        margin-left: 5px;
        background-color: #fff;
        border: 1px solid #aaa;
        cursor: pointer;
        
        :hover {
          background-color: #F0F0F5;
        }
      }
      
      input {
        font-size: 16px;
        border: 1px solid #aaa;
        padding-left: 5px;
      }
    }
  }
`;
