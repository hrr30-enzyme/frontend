
let ORIGIN;

export const HOSTNAME = window && window.location && window.location.hostname;

export const LOCALHOST = `localhost`;

if (HOSTNAME === LOCALHOST) {
  ORIGIN = LOCALHOST;
} else {
  ORIGIN = `https://hrr30-enzyme-backend.herokuapp.com/`;
}

export { ORIGIN }
