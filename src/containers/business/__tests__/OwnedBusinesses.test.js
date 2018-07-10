import React from 'react';
import { shallow } from 'enzyme';
import OwnedBusinesses from "../OwnedBusinesses";
import renderer from 'react-test-renderer';

describe('These are tests for the businesses info page ', () =>{
    const props = {
             business_info:{
                //  id:1,
                //  name:'business 1',
                //  location:'location 1',
                //  description:'business description',
                //  category:'business category'
             }
    }
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    let mountedOwnedBusiness;
    beforeEach(() => {
        mountedOwnedBusiness = shallow(<OwnedBusinesses {...props}/>)
    })

    it('renders without crashing', () => {
       shallow(<OwnedBusinesses {...props} />)
       const tree = renderer.create(<OwnedBusinesses {...props} />).toJSON();
       expect(tree).toMatchSnapshot();  
    });

    it('handles input changed', () => {
        mountedOwnedBusiness.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedOwnedBusiness.instance().handleReset(event)
    })

    // it('handles delete', () => {
    //     mountedOwnedBusiness.instance().deleteBusiness(event)
    // })

    // it('handles submit', () => {
    //     mountedOwnedBusiness.instance().handleSubmit(event)
    // })

    it('has a dashboard', () => {
        const dashboards = mountedOwnedBusiness.find('DashboardNavigation')
       expect(dashboards.length).toBe(1)
    })

    it('has a div', () => {
        const divs = mountedOwnedBusiness.find('div')
       expect(divs.length).toBe(12)
    })

    it('has a table', () => {
        const tables = mountedOwnedBusiness.find('Table')
       expect(tables.length).toBe(1)
    })

    it('has an h3', () => {
        const h3s = mountedOwnedBusiness.find('h3')
       expect(h3s.length).toBe(1)
    })

    it('has a b', () => {
        const bs = mountedOwnedBusiness.find('b')
       expect(bs.length).toBe(1)
    })
    
    it('has a table head', () => {
        const theads = mountedOwnedBusiness.find('thead')
       expect(theads.length).toBe(1)
    })

    it('has a table body', () => {
        const tbodys = mountedOwnedBusiness.find('tbody')
       expect(tbodys.length).toBe(1)
    })

    it('has a Modal', () => {
        const modals = mountedOwnedBusiness.find('Modal')
       expect(modals.length).toBe(1)
    })

    it('has a form', () => {
        const forms = mountedOwnedBusiness.find('form')
       expect(forms.length).toBe(1)
    })

    
});