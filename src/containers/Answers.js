import React from 'react'
import styled from 'styled-components'
import Answer from '../components/Answer'

const Answers = (props) => {
  let answers = props.answers

  console.log('answers   ---------------   ', props)
  return (
    answers.length > 0 &&
      <Layout>
        { answers.map(answer => <Answer answer={answer} {...props}/>) }
      </Layout>
  )
};

export default Answers

const Layout = styled.div`
  grid-column: 2 / 4;
`