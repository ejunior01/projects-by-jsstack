import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  margin-top: 32px;

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

export const ListContainer = styled.div`
  header {
    margin-bottom: 16px;

    button {
      display: flex;
      align-items: center;
      transition: opacity 0.25s ease-in;

      span {
        font-weight: 700;
        color: ${({ theme }) => theme.color.blue['700']};
        margin-right: 8px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  & + & {
    margin-top: 16px;
  }

  & .info span {
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.color.gray[200]};
  }

  & .contact-name {
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    span {
      font-weight: bold;
    }
    small {
      padding: 4px;
      background-color: ${({ theme }) => theme.color.blue[100]};
      border-radius: 4px;
      margin-left: 8px;
      color: ${({ theme }) => theme.color.blue[700]};
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  & .actions {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  & .actions a,
  & .actions button {
    width: 23px;
    height: 23px;
  }
`;
