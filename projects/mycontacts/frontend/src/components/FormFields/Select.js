import { styled } from 'styled-components';

export default styled.select`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border: 2px solid ${({ theme }) => theme.color.white};
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  outline: none;
  transition: border-color 0.25s ease-in;
  font-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.color.blue[500]};
  }
`;
