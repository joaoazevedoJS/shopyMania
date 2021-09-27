import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { LayoutContainer } from '../Layout/styles';

export const HeaderContainer = styled.header`
  width: 100%;

  padding: 1.5rem 0;

  background: var(--gray-0);
`;

export const HeaderContent = styled(LayoutContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    transition: opacity 0.2s;
    color: var(--gray-700);

    &:hover {
      opacity: 0.7;
    }
  }

  a:first-child {
    font-size: 1.5rem;

    font-weight: bold;
    text-decoration: none;
  }
`;

export const HeaderCart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 0.625rem;

    strong {
      display: block;
      color: var(--gray-600);
    }

    span {
      font-size: 0.75rem;
      color: var(--gray-700);
    }

    @media (max-width: 400px) {
      strong {
        display: none;
      }
    }
  }
`;
