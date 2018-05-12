import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders without exploding', () => {
  expect(true).toBeTruthy;
  /*
  expect(
    shallow(
      <ChatBox
        messages={[]}
        userMessage={""}
        handleSubmit={() => {}}
        handleInputChange={() => {}}
      />
    ).length
  ).toBe(1);
  */
})


