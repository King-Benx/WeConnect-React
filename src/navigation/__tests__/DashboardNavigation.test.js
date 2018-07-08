import React from 'react';
import { shallow } from 'enzyme';
import DashboardNavigation from "../DashboardNavigation";

describe('These are tests for the dashboard Navigation', () => {
    let mountedDashboardNavigation;

    beforeEach(()=>{
        mountedDashboardNavigation= shallow(<DashboardNavigation />);
    });

    it('renders without crashing', () => {
       shallow(<DashboardNavigation />)
    });

    it('has a redirect', () =>{
        const lists = mountedDashboardNavigation.find('Redirect')
        expect(lists.length).toBe(1)
    });
    
});