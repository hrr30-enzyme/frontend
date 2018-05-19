
let ORIGIN;
if (process.env.NODE_ENV === 'production') {
  ORIGIN `https://hrr30-enzyme-backend.herokuapp.com/`;
} else {
  ORIGIN = `http://127.0.0.1:8080`;
}

export { ORIGIN }
