import React from 'react';
import { shallow } from 'enzyme';
import Businesses from "../Businesses";
import renderer from 'react-test-renderer';
import axios from '../../../../__mocks__/axios'

describe('These are tests for the businesses page ', () =>{

    let mountedBusinesses;
    beforeEach(() => {
        mountedBusinesses = shallow(<Businesses />)
    });

    it('renders without crashing', () => {
       shallow(<Businesses />)
       const tree = renderer.create(<Businesses />).toJSON();
       expect(tree).toMatchSnapshot();
    });

    it('component did mount', () => {
       mountedBusinesses.instance().componentDidMount()
    })

    // it('calls axios.get in #componentDidMount', () => {
    //     return mountedBusinesses.instance().componentDidMount().then(()=>{
    //         expect(axios.get).toHaveBeenCalled()
    //     })
    // })

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
        expect(divs.length).toBe(11)
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