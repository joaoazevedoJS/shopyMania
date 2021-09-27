import styled from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;

  background: var(--gray-0);
  border-radius: 0.5rem;

  padding: 2rem;

  width: 100%;

  flex: 1;

  &:hover {
    box-shadow: 0px 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImage = styled.div`
  position: relative;

  width: 100%;

  margin-bottom: 2rem;

  img {
    width: 100%;
  }
`;

export const ProductDescription = styled.p`
  margin-bottom: 1.5rem;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;

  color: var(--gray-900);
`;

export const ProductPrice = styled.div`
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
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: -0.005em;

    color: var(--red-500);
  }

  div {
    margin-top: 0.25rem;

    span {
      color: var(--gray-700);
    }

    strong {
      color: var(--gray-900);
    }

    span,
    strong {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`;

export const ProductButton = styled.button`
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

  margin-top: 2rem;

  transition: background 0.4s;
  text-transform: uppercase;

  &:hover,
  &:active {
    background: var(--green-600);
  }
`;

export const ProductButtonAdded = styled(ProductButton)`
  background: var(--green-100);

  &,
  svg {
    color: var(--gray-900);
  }

  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
    stroke-width: 2;
  }

  &:hover,
  &:active {
    background: var(--green-100);
  }
`;
