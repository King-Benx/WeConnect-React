import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from "../Dashboard";

describe('These are tests for the login form ', () =>{

    
    let mountedDashboard;

    beforeEach(()=>{
        mountedDashboard= shallow(<Dashboard />);
    });

    it('renders without crashing', () => {
        shallow(<Dashboard />);
    });
    
    it('has a redirect', () =>{
        const lists = mountedDashboard.find('Redirect')
        expect(lists.length).toBe(1)
    });

});