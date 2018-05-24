import styled from 'styled-components'

export const MAIN_COLOR = `#16252A`;
export const BORDER_MODAL = `#5F89A4` 
export const SECONDARY_COLOR = `#537F9A`
export const SKY_BLUE = `#C0E4F8`
export const MAIN_FONT = '#C1CBD9'
export const TITLE_FONT = '#A5C4E3'
export const LINK_COLOR = '#3375B0'
export const PURPLE = `#a500ff`
export const GREEN_HOVER = `#00ffa5`
export const GRAY_1 = `#8B8B8B`
export const GRAY_2 = `#363636`
export const GRAY_3 = `#3B3B3B`
export const GRAY_4 = `#1B1B1B`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
  border-bottom: 1px;
`;

export const Button = styled.button`
  background: ${MAIN_COLOR};
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${BORDER_MODAL};
  border-radius: 3px;
`;