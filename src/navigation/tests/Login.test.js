import React from 'react';
import { shallow } from 'enzyme';
import Login from "../Login";

describe('These are tests the login link', () => {
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('renders without crashing', () => {
       shallow(<Login />)
    });

    it('has links', () =>{
        const wrapper = shallow(<Login />)
        expect(wrapper.find('Link').length).toBe(1)
    });

    it('has a list', () =>{
        const wrapper = shallow(<Login />)
        expect(wrapper.find('li').length).toBe(1)
    });

});