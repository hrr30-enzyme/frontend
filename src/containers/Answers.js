import React from 'react'
import styled from 'styled-components'

import Answer from '../components/Answer'

const Layout = styled.div`
  grid-column: 2;
`

const Answers = ({ answers }) => {
  console.log('answers', answers)
  return (
    answers.length > 0 &&
      <Layout>
        { answers.map(answer => <Answer answer={answer} />) }
      </Layout>
  )
};

export default Answers