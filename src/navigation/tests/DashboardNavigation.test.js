import React from 'react';
import { shallow } from 'enzyme';
import DashboardNavigation from "../DashboardNavigation";

describe('These are tests for the dashboard Navigation', () => {

    it('renders without crashing', () => {
       shallow(<DashboardNavigation />)
    });

});