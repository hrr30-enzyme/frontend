import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  
  > .logIn {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  > .container {
    padding: 16px;
    background: #f1f1f1";
  }
`
const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
`

const LogIn = (props) => {
  const { addText, textInput, signIn } = props
  const handleClick = function(e){

    e.preventDefault();
    const username = textInput.userName;
    const password = textInput.password;

    signIn({username, password})
  }

  return (
    <Layout>
        <form>
            <div class="container">
                <label for= "uname"><b>Username</b></label>
                <input value={textInput.username} type="text" placeholder="Enter Username" name="uname" onChange={(e) => addText('userName', e.target.value)} required/>

                <label for="psw"><b>Password</b></label>
                <input value={textInput.password} type="password" placeholder="Enter Password" name="psw" required onChange={(e) => addText('password', e.target.value)}/>

                <Button><button type="submit" onClick={(e) => handleClick(e)}>Login</button></Button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>

            <div class="container">
             <Button><button type="button" class="cancelbtn">Cancel</button></Button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </Layout>
  )
}

export default LogIn
