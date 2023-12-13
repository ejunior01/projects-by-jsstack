import { styled } from 'styled-components';

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.color.blue[700]};
      font-weight: 600;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
`;
