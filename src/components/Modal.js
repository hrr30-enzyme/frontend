import styled from "styled-components";

import React from "react";

import { MAIN_ORANGE } from './StyledComponents'
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
const Modal = styled.div`
  display: ${ props => (props.showModal ? "block" : "none") };
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  width: 24rem;
  border-radius: 0.17rem;
  border-top: .3rem solid ${MAIN_ORANGE}
`;

const InnerDiv = styled.div`
  display: grid;
  padding: 1em;
  grid-template-columns: auto;
  align-items: center;
  grid-row-gap: 1em;
  > modal-title {
    align-self: center;
  }
`

const modal = ({ showModal, handleClose }) => (component) => (
  <Modal
    showModal={ showModal }
    onClick={ handleClose }
  >
    <ModalContent>
      <InnerDiv 
        className="modal-content"
        onClick={ e => e.stopPropagation() }  
      >
        { component }
      </InnerDiv>
    </ModalContent>
  </Modal>
);

export default modal
