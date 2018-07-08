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

    let mountedResetPassword;

    beforeEach(()=>{
        mountedResetPassword = shallow(<ResetPassword/>);
    });

    it('handles input changed', () => {
        mountedResetPassword.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedResetPassword.instance().handleReset(event)
    })

    it('handles submit form', () => {
        mountedResetPassword.instance().formSubmit(event)
    })


    it('renders without crashing', () => {
        shallow(<ResetPassword  />)
    });

    it('has a redirect', () => {
        const redirects = mountedResetPassword.find('Redirect')
        expect(redirects.length).toBe(1)
    });

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