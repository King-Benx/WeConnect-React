import React from 'react';
import { shallow } from 'enzyme';
import Content from "../Content";

describe('These are tests for the content', () =>{
   
    it('has divs', () => {
        const wrapper = shallow(<Content/>)
        expect(wrapper.find('div').length).toBe(1)
    });

    it('has a switch', () => {
        const wrapper = shallow(<Content/>)
        expect(wrapper.find('Switch').length).toBe(1)
    });

    it('has routes', () => {
        const wrapper = shallow(<Content/>)
        expect(wrapper.find('Route').length).toBe(14)
    });
    
});