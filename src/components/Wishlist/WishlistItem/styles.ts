import styled from 'styled-components';

export const WishlistItemContainer = styled.li`
  width: 15.5rem;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      margin-right: 0.5rem;
    }
  }
`;

export const WishlistItemInfo = styled.div`
  p {
    margin-bottom: 1rem;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;

    color: var(--gray-900);
  }
`;

export const WishlistItemPrice = styled.div`
  display: flex;
  flex-direction: column;

  s {
    display: block;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: -0.005em;

    color: var(--gray-600);

    margin-bottom: 0.25rem;
  }

  > strong {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.005em;

    color: var(--red-500);
  }
`;

export const WishlistItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: var(--green-400);
  color: var(--gray-0);

  border: 0;
  border-radius: 0.3125rem;

  padding: 0.75rem 1rem;

  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.005em;

  margin-top: 1.25rem;

  transition: background 0.4s;
  text-transform: uppercase;

  &:hover,
  &:active {
    background: var(--green-600);
  }
`;

export const WishlistItemButtonAdded = styled(WishlistItemButton)`
  background: var(--green-100);

  &,
  svg {
    color: var(--gray-900);
  }

  svg {
    fill: transparent;
    margin-right: 1rem;
    font-size: 1.5rem;
    stroke-width: 2;
  }

  &:hover,
  &:active {
    background: var(--green-100);
  }
`;
