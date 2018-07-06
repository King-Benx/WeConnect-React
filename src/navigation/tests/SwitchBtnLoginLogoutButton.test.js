import React from 'react';
import { shallow } from 'enzyme';
import SwitchBtnLoginLogoutButton from "../SwitchBtnLoginLogoutButton";

describe('These are tests the logout link', () => {
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('renders without crashing', () => {
       shallow(<SwitchBtnLoginLogoutButton />)
    });

    it('has a ul tag', () =>{
        const wrapper = shallow(<SwitchBtnLoginLogoutButton />)
        expect(wrapper.find('ul').length).toBe(1)
    });

});