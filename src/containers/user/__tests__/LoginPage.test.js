import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from "../LoginPage";
import { MemoryRouter } from 'react-router-dom';
import mockAxios from 'axios';

describe('These are tests for the login form ', () =>{
    let wrapper,component;
    wrapper = shallow(<MemoryRouter><LoginPage history={{push: ()=>{}}} /></MemoryRouter>);
    component = wrapper.find(LoginPage).dive();
    
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    let mountedLoginPage;

    beforeEach(()=>{  
        
        mountedLoginPage= shallow(<LoginPage />);
        mockAxios.post.mockImplementationOnce(() => Promise.resolve({
            data:{
                "message": {
                  "email": "admin@mail.com",
                  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNTMxMjk0MTU2fQ.KPKs-etSIUiQn5otg3F00fozjJT6hOvo1XFl6hSqVeo",
                  "user_status": "Successfully Logged in",
                  "username": "admin"
                }
            }
        }))
    });

    it('handles input changed', () => {
        mountedLoginPage.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedLoginPage.instance().handleReset(event)
    })

    it('handles form submit', () => {
        let spy = jest.spyOn(component.instance(), 'formSubmit')
        component.find('input[name="email"]').simulate('change', {target: {value:'johndoe@mail.com'}})
        component.find('input[name="password"]').simulate('change', {target: {value:'password'}})
        component.find('form').simulate('submit', {preventDefault: jest.fn()})
        expect(spy).toHaveBeenCalled();
    })
    
    it('renders without crashing', () => {
        mountedLoginPage
    });

    it('has an h3', ()=>{
        const h3s = mountedLoginPage.find('h3')
        expect(h3s.length).toBe(1)
    })

    it('has an em', () => {
        const ems = mountedLoginPage.find('em')
        expect(ems.length).toBe(1)
    });

    it('has ah h1', () => {
        const his = mountedLoginPage.find('h1')
        expect(his.length).toBe(1)
    });

    it('renders the form', () => {
        const forms = mountedLoginPage.find('form')
        expect(forms.length).toBe(1)
    });

    it('renders form input', () => {
        const inputs = mountedLoginPage.find('input')
        expect(inputs.length).toBe(2)
    });

    it('has divs', () => {
        const divs = mountedLoginPage.find('div')
        expect(divs.length).toBe(9)
    });

    it('has links', () => {
        const links = mountedLoginPage.find('Link')
        expect(links.length).toBe(1)
    });

    it('has buttons', () => {
        const buttons = mountedLoginPage.find('Button')
        expect(buttons.length).toBe(2)
    });
});