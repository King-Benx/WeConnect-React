import React from 'react';
import { shallow } from 'enzyme';
import ReviewInfo from "../ReviewInfo";

describe('These are tests for the login form ', () =>{
    const props = {
        match: {
            params: {
            }
        },
        review:{
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
       shallow(<ReviewInfo {...props} />)
    });

    it('has div', () => {
        const wrapper = shallow(<ReviewInfo {...props} />)
        expect(wrapper.find('div').length).toBe(3)
    });

    it('has a blockquote', () => {
        const wrapper = shallow(<ReviewInfo {...props} />)
        expect(wrapper.find('blockquote').length).toBe(1)
    });

    it('has small size paragraphs', () => {
        const wrapper = shallow(<ReviewInfo {...props} />)
        expect(wrapper.find('small').length).toBe(1)
    });

    it('has an hr', () => {
        const wrapper = shallow(<ReviewInfo {...props} />)
        expect(wrapper.find('hr').length).toBe(1)
    });

    it('has an image', () => {
        const wrapper = shallow(<ReviewInfo {...props} />)
        expect(wrapper.find('Image').length).toBe(1)
    });

});