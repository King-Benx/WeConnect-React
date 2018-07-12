import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from "../LandingPage";
import mockAxios from 'axios';
import { MemoryRouter } from 'react-router-dom';

describe('These are tests for the registration form for a user', () =>{
    let wrapper,component;
    wrapper = shallow(<MemoryRouter><LandingPage/></MemoryRouter>);
    component = wrapper.find(LandingPage).dive();

    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    let mountedLandingPage;

    beforeEach(() => {
        mountedLandingPage= shallow(<LandingPage/>);
        mockAxios.post.mockImplementationOnce(() => Promise.resolve({
            data:{
                    "message": "Successfully created user user you can login"
                }
       }))
    });
   

    it('handles input changed', () => {
        mountedLandingPage.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedLandingPage.instance().handleReset(event)
    })

    it('handles form submit', () => {
        let spy = jest.spyOn(component.instance(), 'formSubmit')
        component.find('input[name="username"]').simulate('change', {target: {value:'johndoe'}})
        component.find('input[name="email"]').simulate('change', {target: {value:'johndoe@mail.com'}})
        component.find('input[name="password"]').simulate('change', {target: {value:'password'}})
        component.find('input[name="confirm_password"]').simulate('change', {target: {value:'password'}})
        component.find('form').simulate('submit', {preventDefault: jest.fn()})
        expect(spy).toHaveBeenCalled();
    })

    it('renders without crashing', () => {
        mountedLandingPage
    });

    it('has a paragraph', () => {
        const paragraphs = mountedLandingPage.find('p')
        expect(paragraphs.length).toBe(1)
    });

    it('has a i', () => {
        const i_s = mountedLandingPage.find('i')
        expect(i_s.length).toBe(2)
    });

    it('has an image', () => {
        const images = mountedLandingPage.find('Image')
        expect(images.length).toBe(1)
    });

    it('renders the form', () => {
        const forms = mountedLandingPage.find('form')
        expect(forms.length).toBe(1)
    });

    it('renders form input', () => {
        const inputs = mountedLandingPage.find('input')
        expect(inputs.length).toBe(4)
    });

    it('has divs', () => {
        const divs = mountedLandingPage.find('div')
        expect(divs.length).toBe(15)
    });

    it('has links', () => {
        const links = mountedLandingPage.find('Link')
        expect(links.length).toBe(1)
    });

    it('has buttons', () => {
        const buttons = mountedLandingPage.find('Button')
        expect(buttons.length).toBe(2)
    });

    it('has an h1', () => {
        const his = mountedLandingPage.find('h1')
        expect(his.length).toBe(1)
    });
});