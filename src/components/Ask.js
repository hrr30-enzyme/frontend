import React from 'react'

const Ask = (props) => {

  return (
    <div>
      <div>Ask your own...</div>
      <textarea placeholder="Enter question title..." />
      <textarea placeholder="Enter question body here..." />
      <button>Submit</button>
    </div>
  );
};

export default Ask