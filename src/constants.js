
let ORIGIN;
let PRODUCTION;

export const HOSTNAME = window && window.location && window.location.hostname;

export const LOCALHOST = `localhost`;

if (HOSTNAME === LOCALHOST) {
  ORIGIN = `http://localhost:3000`;
  PRODUCTION = false;
} else {
  ORIGIN = `http://hrr30-enzyme-backend.herokuapp.com`;
  PRODUCTION = true;
}

export { ORIGIN, PRODUCTION }
