
let ORIGIN;

export const HOSTNAME = window && window.location && window.location.hostname;

export const LOCALHOST = `localhost`;

if (HOSTNAME === LOCALHOST) {
  ORIGIN = `localhost:3000`;
} else {
  ORIGIN = `https://hrr30-enzyme-backend.herokuapp.com`;
}

export { ORIGIN }
