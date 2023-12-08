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
    color: #222;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary.Dark};
    font-weight: 600;

    border: 2px solid ${({ theme }) => theme.color.primary.Dark};
    border-radius: 4px;

    padding: 8px 16px;

    transition: all 0.2s ease-in;

    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.color.primary.Dark};
    }
  }
`;
