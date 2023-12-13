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
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  input {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    border: none;

    padding: 0 16px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline-color: #646cff;

    transition: all 0.25s ease-in-out;

    &:focus,
    &:hover,
    &:focus-visible {
      outline: 2px auto #646cff;
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray[200]};
    }
  }
`;
