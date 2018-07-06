import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from "../LandingPage";

describe('These are tests for the registration form for a user', () =>{
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<LandingPage />)
        const header = <h3 className="panel-title">Registration Form</h3>
        expect(wrapper.contains(header)).toEqual(true);
    });

    it('has a paragraph', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper.find('p').length).toBe(1)
    });

    it('has an image', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper.find('img').length).toBe(1)
    });

    it('renders the form', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper.find('form').length).toBe(1)
    });

    it('renders form input', () => {
        const wrapper = shallow(<LandingPage/>)
        expect(wrapper.find('input').length).toBe(4)
    });

    it('has divs', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper.find('div').length).toBe(15)
    });

    it('has links', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper.find('Link').length).toBe(1)
    });

    it('has buttons', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper.find('Button').length).toBe(2)
    });

    it('has an h1', () => {
        const wrapper = shallow(<LandingPage />)
        expect(wrapper.find('h1').length).toBe(1)
    });
});