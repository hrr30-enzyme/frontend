import styled from 'styled-components'

export const MAIN_ORANGE = `#FFA500`;
export const BORDER_ORANGE = `#F19100` 

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
  border-bottom: 1px;
`;

export const Button = styled.button`
  background: ${MAIN_ORANGE};
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${BORDER_ORANGE};
  border-radius: 3px;
`;