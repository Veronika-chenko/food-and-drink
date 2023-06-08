import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px 30px;
  max-width: 200px;
  height: 48px;

  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 41px;

  transition: var(--transition-color), var(--transition-bg),
    var(--transition-border-color);
`;

export const LightButton = styled(Button)`
  color: var(--accent);
  border: 1px solid var(--accent);

  &:hover {
    color: var(--white);
    background-color: var(--accent);
  }
`;

export const FullButton = styled(Button)`
  color: var(--white);
  background-color: var(--accent);

  &:hover {
    color: var(--accent);
    border: 1px solid var(--accent);
    background-color: var(--white);
  }
`;
