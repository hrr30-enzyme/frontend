import { CLOSE_MODAL, OPEN_MODAL } from './types'

export const closeModal = (modal) => {
  return {
    type: CLOSE_MODAL,
    payload: {
      modal
    }
  }
}

export const openModal = (modal, message) => {
  return {
    type: OPEN_MODAL,
    payload: {
      modal,
      message
    }
  }
}