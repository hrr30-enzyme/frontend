import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const Usertag = (props) => {
  return (
    <Div>
      <div>Username</div>
      <div>User description</div>
    </Div>
  )
}

export default Usertag