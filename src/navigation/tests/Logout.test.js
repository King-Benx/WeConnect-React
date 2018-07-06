import React from 'react';
import { shallow } from 'enzyme';
import Logout from "../Logout";

describe('These are tests the logout link', () => {
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('renders without crashing', () => {
       shallow(<Logout />)
    });

    it('has links', () =>{
        const wrapper = shallow(<Logout />)
        expect(wrapper.find('Link').length).toBe(1)
    });

    it('has a list', () =>{
        const wrapper = shallow(<Logout />)
        expect(wrapper.find('li').length).toBe(1)
    });

});