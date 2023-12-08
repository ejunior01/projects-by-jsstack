import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.color.gray[900]};
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.blue[700]};
    font-weight: 600;

    border: 2px solid ${({ theme }) => theme.color.blue[700]};
    border-radius: 4px;

    padding: 8px 16px;

    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.color.blue[700]};
      background-color: ${({ theme }) => theme.color.white};
    }
  }
`;
