import React from 'react';
import { shallow } from 'enzyme';
import SwitchBtnLoginLogoutButton from "../SwitchBtnLoginLogoutButton";

describe('These are tests the logout link', () => {
    let mountedSwitch;

    beforeEach(()=>{
        mountedSwitch = shallow(<SwitchBtnLoginLogoutButton />);
    });

    it('renders without crashing', () => {
        shallow(<SwitchBtnLoginLogoutButton />)
    });

    it('has a ul tag', () =>{
        const uls = mountedSwitch.find('ul');
        expect(uls.length).toBe(1)
    });

    it('has a Login', () =>{
        const login = mountedSwitch.find('Login');
        expect(login.length).toBe(1)
    });

});