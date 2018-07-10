import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from "../LandingPage";
import renderer from 'react-test-renderer';

describe('These are tests for the registration form for a user', () =>{
    
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
    });


    it('handles input changed', () => {
        mountedLandingPage.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedLandingPage.instance().handleReset(event)
    })

    // it('handles form submit', () => {
    //     mountedLandingPage.instance().formSubmit(event)
    // })

    it('renders without crashing', () => {
        shallow(<LandingPage />)
        const tree = renderer.create(<LandingPage />).toJSON();
        expect(tree).toMatchSnapshot();
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