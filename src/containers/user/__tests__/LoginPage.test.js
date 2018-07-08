import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from "../LoginPage";

describe('These are tests for the login form ', () =>{
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('handles input changed', () => {
        const wrapper = shallow(<LoginPage />); 
        wrapper.instance().handleChange(event)
    })

    it('handles input reset', () => {
        const wrapper = shallow(<LoginPage />); 
        wrapper.instance().handleReset(event)
    })
    
    it('renders without crashing', () => {
        const wrapper = shallow(<LoginPage />)
        const header = <h3 className="panel-title">Login</h3>
        expect(wrapper.contains(header)).toEqual(true);
    });

    it('has an em', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper.find('em').length).toBe(1)
    });

    it('has a heading', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper.find('h1').length).toBe(1)
    });

    it('renders the form', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper.find('form').length).toBe(1)
    });

    it('renders form input', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper.find('input').length).toBe(2)
    });

    it('has divs', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper.find('div').length).toBe(9)
    });

    it('has links', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper.find('Link').length).toBe(1)
    });

    it('has buttons', () => {
        const wrapper = shallow(<LoginPage />)
        expect(wrapper.find('Button').length).toBe(2)
    });
});