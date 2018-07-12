import React from 'react';
import { shallow } from 'enzyme';
import BusinessInfo from "../BusinessInfo";
import renderer from 'react-test-renderer';

describe('These are tests for the businesses info page ', () =>{
    const props = {
        business:{
        }
    }
    let mountedBusinessInfo;
    it('renders without crashing', () => {
       mountedBusinessInfo = shallow(<BusinessInfo {...props} />)
    });

    it('has divs', () => {
        const divs = mountedBusinessInfo.find('div');
        expect(divs.length).toBe(1)
    });

    it('has h4s', () => {
        const h4s = mountedBusinessInfo.find('h4');
        expect(h4s.length).toBe(4)
    });

    it('has b', () => {
        const bs = mountedBusinessInfo.find('b');
        expect(bs.length).toBe(4)
    });

    it('has an underline', () => {
        const us = mountedBusinessInfo.find('u');
        expect(us.length).toBe(1)
    });

    it('has an spans', () => {
        const spans = mountedBusinessInfo.find('span');
        expect(spans.length).toBe(3)
    });

    it('has a paragraph', () => {
        const ps = mountedBusinessInfo.find('p')
        expect(ps.length).toBe(1)
    });

    it('has an image', () => {
        const images = mountedBusinessInfo.find('Image');
        expect(images.length).toBe(1)
    });

});