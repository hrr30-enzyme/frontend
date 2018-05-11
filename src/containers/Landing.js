import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

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
        <LogIn
        userName={props.textInput.userName}
        password={props.textInput.password}
        openModal={props.openModal}
        closeModal={props.closeModal}
        signin={props.signin}
        showModal={props.showModal}
        addText={props.addText}
      />
      <SignUp
        userName={props.textInput.userName}
        password={props.textInput.password}
        email={props.textInput.email}
        openModal={props.openModal}
        closeModal={props.closeModal}
        signup={props.signup}
        showModal={props.showModal}
        addText={props.addText}
      />
      </div>
    </Layout>
  )
}

export default Landing;

