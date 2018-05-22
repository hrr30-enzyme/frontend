import React from "react";

import modal from "./Modal";
import { Input, Button } from "./StyledComponents";

const handleClick = (e, cb, credentials) => {
  e.preventDefault();
  cb(credentials);
};

const handleChange = (cb, inputType, input) => {
  cb(inputType, input);
};

const Signin = ({
  signin,
  closeModal,
  username,
  password,
  showModal,
  addText,
  error,
  message
}) => {
  const enterInput = e =>
    e.key === "Enter" && handleClick(e, signin, { username, password });
  return modal({
    showModal,
    handleClose: () => closeModal("signin")
  })([
    <div className="modal-title">LOGIN</div>,
    <div className="error">{error ? error : message}</div>,
    <Input
      value={username}
      onChange={e => handleChange(addText, "username", e.target.value)}
      placeholder="Username"
      type="text"
      required
      onKeyPress={enterInput}
    />,
    <Input
      value={password}
      onChange={e => handleChange(addText, "password", e.target.value)}
      placeholder="Password"
      type="password"
      required
      onKeyPress={enterInput}
    />,
    <Button onClick={e => handleClick(e, signin, { username, password })}>
      Submit
    </Button>
  ]);
};

export default Signin;
