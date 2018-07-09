import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from "../SearchResults";

describe('These are tests for the search form ', () =>{
    const props = {
        match: {
            params: {
            }
        }
    }
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    let mountedSearchResults;
    beforeEach(() => {
        mountedSearchResults = shallow(<SearchResults {...props} />)
    });

    it('renders without crashing', () => {
       shallow(<SearchResults {...props} />)
    });

    // it('handles show reviews', () => {
    //     mountedSearchResults.instance().showReviews(event);
    // })

    it('has a dashboard', () =>{
        const dashboards = mountedSearchResults.find('DashboardNavigation');
        expect(dashboards.length).toBe(1);
    })

    it('has a table', () =>{
        const tables = mountedSearchResults.find('Table');
        expect(tables.length).toBe(1);
    })

    it('has a div', () =>{
        const divs = mountedSearchResults.find('div');
        expect(divs.length).toBe(6);
    })

    it('has a table head', () =>{
        const tableheads = mountedSearchResults.find('thead')
        expect(tableheads.length).toBe(1)
    })

    it('has an h3', () =>{
        const h3s = mountedSearchResults.find('h3')
        expect(h3s.length).toBe(1)
    })

    it('has a b', () =>{
        const bs = mountedSearchResults.find('b')
        expect(bs.length).toBe(1)
    })
});