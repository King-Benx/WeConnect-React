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
    
    it('has divs', () => {
        const divs = mountedDashboard.find('div');
        expect(divs.length).toBe(2)
    });

    it('has a dashboard Navigation', () => {
        const dashboardNavigations = mountedDashboard.find('DashboardNavigation');
        expect(dashboardNavigations.length).toBe(1);
    });

    it('has an image', () => {
        const images = mountedDashboard.find('Image');
        expect(images.length).toBe(1)
    });
});