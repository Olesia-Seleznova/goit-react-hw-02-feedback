import styled from 'styled-components';

// export const App = styled.div`
//   padding-top: 20px;
//   padding-bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 40px;
//   color: #010101;
//   background-color: #d1d1d1;
// `;

export const Title = styled.h1`
  font-size: 35px;
`;

export const Buttons = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 5px 7px;
  color: brown;
  font-size: 20px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px gray;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    background-color: #ccc;
    color: #000;
  }
`;

export const StatMarckup = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const StatItem = styled.li`
  font-size: 20px;
  color: grey;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
