import React from 'react';
import { shallow } from 'enzyme';
import UnknownPage from "../UnknownPage";

describe('These are tests the unknown page', () => {
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('renders without crashing', () => {
       shallow(<UnknownPage />)
    });

    it('has a header', () => {
        const wrapper = shallow(<UnknownPage />)
        expect(wrapper.find('h1').length).toBe(1)
    });

    it('has ems', () => {
        const wrapper = shallow(<UnknownPage />)
        expect(wrapper.find('em').length).toBe(1)
    });

    it('has divs', () =>{
        const wrapper = shallow(<UnknownPage />)
        expect(wrapper.find('div').length).toBe(3)
    });

    it('has links', () =>{
        const wrapper = shallow(<UnknownPage />)
        expect(wrapper.find('Link').length).toBe(1)
    });

    it('has an h4', () =>{
        const wrapper = shallow(<UnknownPage />)
        expect(wrapper.find('h4').length).toBe(1)
    });

});