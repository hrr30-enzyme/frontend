import React, { Component } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"

class HomePage extends Component {

  componentWillMount() {
    this.props.queryPosts({
      PostTypeId: 1
    })
  }

  render() {
    console.log('HomePage: --------  ', this.props)
    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default HomePage

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
  > .question {
    background-color: orange;
    grid-column: 1/2;
  }
`
