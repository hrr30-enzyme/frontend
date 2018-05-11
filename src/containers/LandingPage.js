import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import AskQuestion from '../components/AskQuestion'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  
  > .nav {
    background-color: red;
    grid-column: 1/3;
  }
`

const Landing = props => {

  return (
    <Layout>
      <div className="nav">
        <Navbar {...props}/>
      </div>
      <div className="ask">
        <AskQuestion {...props}/>
      </div>
    </Layout>
  )
}

export default Landing;

