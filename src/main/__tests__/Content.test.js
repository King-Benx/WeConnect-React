import React from 'react';
import { shallow } from 'enzyme';
import Content from "../Content";

describe('These are tests for the content', () =>{
    let mountedContent;

    beforeEach(()=>{
        mountedContent= shallow(<Content />);
    });

    it('has divs', () => {
        const divs = mountedContent.find('div');
        expect(divs.length).toBe(1)
    });

    it('has a switch', () => {
        const switches = mountedContent.find('Switch');
        expect(switches.length).toBe(1)
    });

    it('has routes', () => {
        const routes = mountedContent.find('Route');
        expect(routes.length).toBe(14)
    });
    
});