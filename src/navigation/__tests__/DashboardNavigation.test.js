import React from 'react';
import { shallow } from 'enzyme';
import DashboardNavigation from "../DashboardNavigation";
import renderer from 'react-test-renderer';

describe('These are tests for the dashboard Navigation', () => {
    let mountedDashboardNavigation;

    beforeEach(()=>{
        mountedDashboardNavigation= shallow(<DashboardNavigation />);
    });

    it('renders without crashing', () => {
        shallow(<DashboardNavigation />);
        const tree = renderer.create(<DashboardNavigation />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has a redirect', () =>{
        const lists = mountedDashboardNavigation.find('Redirect')
        expect(lists.length).toBe(1)
    });
    
});