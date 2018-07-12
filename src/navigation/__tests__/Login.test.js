import React from 'react';
import { shallow } from 'enzyme';
import Login from "../Login";

describe('These are tests the login link', () => {
    let mountedLoginLink;

    beforeEach(()=>{
        mountedLoginLink= shallow(<Login />);
    });

    it('renders without crashing', () => {
        mountedLoginLink = shallow(<Login/>)
    });

    it('has links', () =>{
        const links = mountedLoginLink.find('Link')
        expect(links.length).toBe(1)
    });

    it('has a list', () =>{
        const lists = mountedLoginLink.find('li')
        expect(lists.length).toBe(1)
    });

});