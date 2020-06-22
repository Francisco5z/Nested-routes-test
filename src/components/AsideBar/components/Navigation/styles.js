import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  a + a {
    margin-top: 20px;
  }

  a {
    width: 95%;
    height: 50px;
    
    margin: 0 auto;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    padding-left: 15px;

    border-radius: 60px;
    border: 1px solid #aaa;
    
    text-decoration: none;
    color: #000;

    :hover {
      /* border: 1px solid #1144aa; */
      background: #1144ff;
      color: #fff;
    }

    img {
      width: 30px;
      height: 30px;
      
      margin-right: 20px;
    }
  }
`;
