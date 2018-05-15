import React, {Component} from 'react'
import styled  from 'styled-components'
import moment from 'moment'
import Navbar from '../components/Navbar'

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


class UserPage extends Component {

  componentDidMount(){
    this.props.getQuestions({})
  }
  
  render (){
    return (
      <Layout>
        <div className="nav">
          <Navbar {...this.props}/>
        </div>
        <div>
          Username: {this.props.authentication.userInfo.username}
          <br/>
          Email: {this.props.authentication.userInfo.email}
          <br/>
          Joined: {moment(this.props.authentication.userInfo.createdAt).format('MMM Do YYYY')}
          <br/>
          
        </div>
        
      </Layout>

    )
  }
}

export default UserPage;
