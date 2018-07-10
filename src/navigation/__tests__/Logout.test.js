import React from 'react';
import { shallow } from 'enzyme';
import Logout from "../Logout";
import renderer from 'react-test-renderer';

describe('These are tests the logout link', () => {
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    let mountedLogoutLink;

    beforeEach(()=>{
        mountedLogoutLink= shallow(<Logout />);
    });

    it('renders without crashing', () => {
        mountedLogoutLink =  shallow(<Logout />);
        const tree = renderer.create(<Logout />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has links', () =>{
        const links = mountedLogoutLink.find('Link')
        expect(links.length).toBe(1)
    });

    it('has a list', () =>{
        const lists = mountedLogoutLink.find('li')
        expect(lists.length).toBe(1)
    });

});