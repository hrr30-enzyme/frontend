import React from 'react'

import Question from '../components/Question'
import Answers from './Answers'
import GiveAnswer from '../components/GiveAnswer'
import Ask from '../components/Ask'
import Navbar from './Navbar'


const Home = (props) => {

  return (
    <div>
      <Navbar />
      <Question />
      <Answers />
      <GiveAnswer />
      <Ask />
    </div>
  );
};

export default Home