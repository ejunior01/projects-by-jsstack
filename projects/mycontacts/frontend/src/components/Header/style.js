import { styled } from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: Column;
  align-items: center;

  margin-top: 74px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 48px;

  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding: 0 16px;

    background-color: #fff;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
