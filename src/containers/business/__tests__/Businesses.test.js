import React from 'react';
import { shallow } from 'enzyme';
import Businesses from "../Businesses";

describe('These are tests for the businesses page ', () =>{

    let mountedBusinesses;
    beforeEach(() => {
        mountedBusinesses = shallow(<Businesses />)
    });

    it('renders without crashing', () => {
       shallow(<Businesses />)
    });

    it('component did mount', () => {
       mountedBusinesses.instance().componentDidMount()
    })

    it('has a dashboard', () => {
        const dashboards = mountedBusinesses.find('DashboardNavigation');
        expect(dashboards.length).toBe(1)
     })

     it('has a table', () => {
        const tables = mountedBusinesses.find('Table');
        expect(tables.length).toBe(1)
     })

     it('has divs', () => {
        const divs = mountedBusinesses.find('div');
        expect(divs.length).toBe(7)
     })

     it('has h3', () => {
        const h3s = mountedBusinesses.find('h3');
        expect(h3s.length).toBe(1)
     })

     it('has b', () => {
        const bs = mountedBusinesses.find('b');
        expect(bs.length).toBe(1)
     })

});