
let ORIGIN;
let PRODUCTION;

export const HOSTNAME = window && window.location && window.location.hostname;

export const LOCALHOST = `localhost`;

if (HOSTNAME === LOCALHOST) {
  ORIGIN = `http://localhost:8080`;
  PRODUCTION = false;
} else {
  ORIGIN = `https://hrr30-enzyme-backend.herokuapp.com`;
  PRODUCTION = true;
}

export { ORIGIN, PRODUCTION }
