import { styled } from 'styled-components';

export default styled.button`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: bold;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue[700]};

  transition: background-color 0.25s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue[500]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.blue[900]};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.color.gray[200]};
    cursor: default;
  }
`;
