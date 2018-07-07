import React from 'react';
import { shallow } from 'enzyme';
import App from './main/App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('has divs', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find('div').length).toBe(1)
});