import React from 'react';
import { shallow } from 'enzyme';
import Login from "../Login";
import renderer from 'react-test-renderer';

describe('These are tests the login link', () => {
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }
    let mountedLoginLink;

    beforeEach(()=>{
        mountedLoginLink= shallow(<Login />);
    });

    it('renders without crashing', () => {
        mountedLoginLink =  shallow(<Login />)
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
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