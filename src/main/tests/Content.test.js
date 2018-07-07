import React from 'react';
import { shallow } from 'enzyme';
import Content from "../Content";

describe('These are tests for the content', () =>{
   
    it('has divs', () => {
        const wrapper = shallow(<Content/>)
        expect(wrapper.find('div').length).toBe(1)
    });
});