import styled, { css } from 'styled-components';

interface IWishlistButtonContainer {
  isActive: boolean;
}

export const WishlistButtonContainer = styled.button<IWishlistButtonContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;

  ${({ isActive }) =>
    isActive
      ? css`
          background: var(--red-500);
        `
      : css`
          background: var(--gray-200);
        `}

  border-radius: 50%;
  border: 0;

  padding: 0.5rem;

  transition: background 0.4s;

  svg {
    font-size: 1.5rem;
    stroke-width: 2;

    transition: color 0.4s, fill 0.4s;

    ${({ isActive }) =>
      isActive
        ? css`
            color: var(--gray-0);
            fill: var(--gray-0);
          `
        : css`
            color: var(--gray-900);
          `}
  }

  &:hover,
  &:active {
    ${({ isActive }) =>
      isActive
        ? css`
            background: var(--red-600);

            svg {
              color: var(--gray-0);
              fill: var(--gray-0);
            }
          `
        : css`
            background: var(--pink-100);

            svg {
              color: var(--red-500);
            }
          `}
  }
`;
