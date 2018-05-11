import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

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
        <Navbar />
      </div>
    </Layout>
  )
}

export default Landing;

