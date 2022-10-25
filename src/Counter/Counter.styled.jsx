import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;

  span {
    font-size: 60px;
  }
`;

export const CounterControls = styled.div`
  button {
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
    margin-right: 5px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    transition: box-shadow 250ms linear;
  }
`;