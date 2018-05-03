import React from 'react'

import Authenticate from '../components/Authenticate'


const Navbar = (props) => {
  return (
    <div>
      <h1>Catalyst</h1>
      <Authenticate />
    </div>
  );
};

export default Navbar;