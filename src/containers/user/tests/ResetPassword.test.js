import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from "../ResetPassword";

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

    it('handles input changed', () => {
        const wrapper = shallow(<ResetPassword />); 
        wrapper.instance().handleChange(event)
    })

    it('handles input reset', () => {
        const wrapper = shallow(<ResetPassword />); 
        wrapper.instance().handleReset(event)
    })

    it('handles submit form', () => {
        const wrapper = shallow(<ResetPassword />); 
        wrapper.instance().formSubmit(event)
    })


    it('renders without crashing', () => {
        shallow(<ResetPassword  />)
    });

    // it('has an image', () => {
    //     const wrapper = shallow(<ResetPassword />)
    //     expect(wrapper.find('Image').length).toBe(1)
    // });

    // it('renders the form', () => {
    //     const wrapper = shallow(<ResetPassword />)
    //     expect(wrapper.find('form').length).toBe(1)
    // });

    // it('renders form input', () => {
    //     const wrapper = shallow(<ResetPassword/>)
    //     expect(wrapper.find('input').length).toBe(2)
    // });

    // it('has divs', () => {
    //     const wrapper = shallow(<ResetPassword />)
    //     expect(wrapper.find('div').length).toBe(6)
    // });

    // it('has buttons', () => {
    //     const wrapper = shallow(<ResetPassword />)
    //     expect(wrapper.find('Link').length).toBe(2)
    // });

    // it('has buttons', () => {
    //     const wrapper = shallow(<LoginPage />)
    //     expect(wrapper.find('Button').length).toBe(2)
    // });
});