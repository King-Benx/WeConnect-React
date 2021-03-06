import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from "../ResetPassword";
import { MemoryRouter } from 'react-router-dom';
import mockAxios from 'axios';

describe('These are tests for the login form ', () =>{
    let wrapper,component;
    wrapper = shallow(<MemoryRouter><ResetPassword /></MemoryRouter>);
    component = wrapper.find(ResetPassword).dive();
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
        mockAxios.post.mockImplementationOnce(() => Promise.resolve({
            data:{
                "message": "Password has been set to new_pass"
              }
        }))
    });

    it('handles input changed', () => {
        mountedResetPassword.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedResetPassword.instance().handleReset(event)
    })

    it('handles submit form', () => {
        let spy = jest.spyOn(component.instance(), 'formSubmit')
        component.find('input[name="password"]').simulate('change', {target: {value:'change_password'}})
        component.find('input[name="confirm_password"]').simulate('change', {target: {value:'change_password'}})
        component.find('form').simulate('submit', {preventDefault: jest.fn()})
        expect(spy).toHaveBeenCalled();

    })


    it('renders without crashing', () => {
        shallow(<ResetPassword  />)
    });


    it('renders the form', () => {
        const forms = mountedResetPassword.find('form')
        expect(forms.length).toBe(1)
    });

    it('renders form input', () => {
        const inputs = mountedResetPassword.find('input')
        expect(inputs.length).toBe(2)
    });

    it('has divs', () => {
        const divs = mountedResetPassword.find('div')
        expect(divs.length).toBe(11)
    });

    it('has buttons', () => {
        const buttons = mountedResetPassword.find('Button')
        expect(buttons.length).toBe(2)
    });

    it('has a legend', () => {
        const legends = mountedResetPassword.find('legend')
        expect(legends.length).toBe(1)
    });

    it('has an image', () => {
        const images = mountedResetPassword.find('Image')
        expect(images.length).toBe(1)
    });

    it('has an em', () => {
        const ems = mountedResetPassword.find('em')
        expect(ems.length).toBe(1)
    });

    it('has i tags', () => {
        const i_s = mountedResetPassword.find('i')
        expect(i_s.length).toBe(2)
    });
});