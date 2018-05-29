import React from "react"
import styled from "styled-components"

const GiveAnswer = props => {
  return (
    <Div>
      <textarea
        value={props.textInput.answerBody}
        onChange={e => props.addText("answerBody", e.target.value, e)}
      />
      <button
        onClick={() =>
          props.authentication.signedIn
            ? props.postAnswer({
                UserId: props.authentication.userInfo.id,
                body: props.textInput.answerBody,
                PostTypeId: 2,
                PostId: props.match.params.id
              })
            : props.openModal('signin', "Please sign in before answering a question!")
        }
      >
        Submit
      </button>
    </Div>
  )
}

export default GiveAnswer

const Div = styled.div`
  grid-column: 2 / 4;
  display: grid;
  grid-template-rows: 10em auto;
  grid-template-columns: auto;
  margin-bottom: 5em;
`
