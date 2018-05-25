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
export const REDISH = `#9a6c53`
export const YELLOW = `#9a8f53`
export const DARKPURPLE = `#83539a`
export const WHITE_BLUE = '#E9F3F8'
export const LANDING_BLUE = '#537f9a'

export const Input = styled.input`
  padding: 0.5em;
  margin: 1.5em;
  background: ghostwhite;
  height: 30px;
  font-size: 16px;
  border: solid 2px ${MAIN_COLOR};
  border-radius: 3px;
`;

export const Button = styled.button`
  background: ${WHITE_BLUE};
  color: midnightblue;
  width: 120px;
  justify-self: center;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.5em;
  border: 2px solid ${MAIN_COLOR};
  border-radius: 8px;
  &:hover {
    background: lightcyan;
    color: ${MAIN_COLOR};
    cursor: pointer;
  }
`;