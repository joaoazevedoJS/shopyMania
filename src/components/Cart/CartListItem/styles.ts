import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;

  thead th {
    color: var(--gray-700);
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid var(--gray-300);
  }

  img {
    height: 100px;
  }

  strong {
    display: block;

    color: var(--gray-900);
  }

  span {
    display: block;

    margin-top: 0.5rem;
    font-size: 1.125rem;

    font-weight: bold;

    color: var(--gray-700);
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid var(--gray-300);
      border-radius: 0.25rem;

      color: var(--gray-600);

      padding: 0.375rem;
      width: 3.125rem;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: var(--green-400);
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: var(--green-600);
      }
    }

    &:disabled {
      svg {
        color: var(--green-500);
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 800px) {
    tbody td,
    thead th {
      padding: 0.25rem;
      font-size: 0.875rem;
    }

    td:nth-child(2) {
      strong {
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 700px) {
    img {
      height: 4.375rem;
    }

    th:first-child,
    td:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    th:nth-child(4),
    td:nth-child(4) {
      display: none;
    }

    img {
      height: 3.125rem;
    }

    div {
      input {
        padding: 0.125rem;
        width: 2.1875rem;
      }
    }
  }
`;
