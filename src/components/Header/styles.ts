import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { LayoutContainer } from '../Layout/styles';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;

  z-index: 999;

  width: 100%;

  padding: 1.5rem 0;

  background: var(--gray-0);

  box-shadow: 0px 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
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

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
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
      font-size: 1rem;
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
