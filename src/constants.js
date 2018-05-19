
let ORIGIN;

export const HOSTNAME = window && window.location && window.location.hostname;

const LOCALHOST = `http://127.0.0.1:8080`;

if (HOSTNAME === LOCALHOST) {
  ORIGIN = LOCALHOST;
} else {
  ORIGIN = `https://hrr30-enzyme-backend.herokuapp.com/`;
}

export { ORIGIN }
