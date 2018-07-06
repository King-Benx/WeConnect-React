import React from 'react';
import { shallow } from 'enzyme';
import Reviews from "../Reviews";

describe('These are tests for the login form ', () =>{
    const props = {
        match: {
            params: {
            }
        }
    }
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('renders without crashing', () => {
       shallow(<Reviews {...props} />)
    });

    it('has div', () => {
        const wrapper = shallow(<Reviews {...props} />)
        expect(wrapper.find('div').length).toBe(3)
    });

    it('has a blockquote', () => {
        const wrapper = shallow(<Reviews {...props} />)
        expect(wrapper.find('blockquote').length).toBe(1)
    });

    it('has small size paragraphs', () => {
        const wrapper = shallow(<Reviews {...props} />)
        expect(wrapper.find('small').length).toBe(1)
    });

    it('has an hr', () => {
        const wrapper = shallow(<Reviews {...props} />)
        expect(wrapper.find('hr').length).toBe(1)
    });

    it('has an image', () => {
        const wrapper = shallow(<Reviews {...props} />)
        expect(wrapper.find('Image').length).toBe(1)
    });

});