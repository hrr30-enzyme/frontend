import styled from "styled-components";
import React from "react";
import * as styles from '../components/StyledComponents'
import { MAIN_COLOR } from './StyledComponents'
/*
 *
 * Use modal function to create a modal
 * Showmodal is curried.
 * 
 *  pass in a boolean of whether it is showed first
 * then pass in any jsx or an array to be rendered in
 * the modal
 * 
 */
const Container = styled.div`
  display: ${ props => props.showModal ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1.5rem 1.5rem;
  width: 35rem;
  border-radius: 0.5rem;
  border: .3rem solid ${styles.MAIN_COLOR};
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 0.5em;
  margin: 1em;
  padding: 0.5em;

  .modal-title {
    justify-self: center;
    font-size: 28px;
    font-weight: bold;
    color: #0a0d54;
  }

  .error {
    color: red;
    font-size: 150%;
    justify-self: center;
  }
`

const modal = ({ showModal, handleClose }) => (component) => (
  <Container
    showModal={ showModal }
    onClick={ handleClose }
  >
    <Content>
      <Inner 
        className="modal-content"
        onClick={ e => e.stopPropagation() }  
      >
        { component }
      </Inner>
    </Content>
  </Container>
);

export default modal
