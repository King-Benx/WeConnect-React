import React from 'react';
import { shallow } from 'enzyme';
import SwitchBtnLoginLogoutButton from "../SwitchBtnLoginLogoutButton";
import renderer from 'react-test-renderer';

describe('These are tests the logout link', () => {
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }
    
    let mountedSwitch;

    beforeEach(()=>{
        mountedSwitch = shallow(<SwitchBtnLoginLogoutButton />);
    });

    it('renders without crashing', () => {
        shallow(<SwitchBtnLoginLogoutButton />)
        const tree = renderer.create(<SwitchBtnLoginLogoutButton />).toJSON();
        expect(tree).toMatchSnapshot();
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