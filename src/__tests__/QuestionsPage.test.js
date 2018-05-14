import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import configureMockStore from 'redux-mock-store'
import QuestionsPage from '../containers/QuestionsPage'

configure({adapter: new Adapter()})

const mockStore = configureMockStore()

test('# QuestionsPage container', () => {
    const store = mockStore()
    const wrapper = shallow(<QuestionsPage store={store}/>)
    expect(wrapper).toMatchSnapshot()
})