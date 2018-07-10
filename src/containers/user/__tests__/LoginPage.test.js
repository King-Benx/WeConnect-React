import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from "../LoginPage";
import { BASE_URL } from '../../../custom/constants';
import renderer from 'react-test-renderer';

describe('These are tests for the login form ', () =>{
    const login_route = BASE_URL+'api/v1/auth/login';
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    let mountedLoginPage;

    beforeEach(()=>{  
        mountedLoginPage= shallow(<LoginPage history={{push: ()=>{}}}/>);
    });

    it('handles input changed', () => {
        mountedLoginPage.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedLoginPage.instance().handleReset(event)
    })

    // it('handles form submit', () => {
    //     mountedLoginPage.instance().formSubmit(event)
    // })
    
    it('renders without crashing', () => {
        shallow(<LoginPage />);
        const tree = renderer.create(<LoginPage />).toJSON();
        expect(tree).toMatchSnapshot();
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