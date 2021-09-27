import styled from 'styled-components';

export const WishlistHeaderList = styled.div`
  display: none;

  position: absolute;
  right: -1.5rem;

  padding-top: 2.25rem;

  ul {
    max-height: 55vh;
    overflow: auto;

    max-width: 17.5rem;
    width: 100%;

    padding: 1rem;

    background: var(--gray-0);
    border-radius: 0.25rem;

    li + li {
      margin-top: 2rem;
    }
  }
`;

export const WishlistHeaderContainer = styled.div`
  position: relative;

  margin-left: 1.5rem;

  svg {
    cursor: pointer;
    transition: opacity 0.2s;

    color: var(--gray-700);
    fill: var(--gray-700);

    &:hover {
      opacity: 0.7;
    }
  }

  &:hover {
    ${WishlistHeaderList} {
      display: flex;
    }
  }
`;
