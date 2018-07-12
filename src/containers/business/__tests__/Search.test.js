import React from 'react';
import { shallow } from 'enzyme';
import Search from "../Search";
import { MemoryRouter } from 'react-router-dom';

describe('These are tests for the search form ', () =>{
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }
    let mountedSearch;
    beforeEach(() => {
        mountedSearch = shallow(<Search />)
    });

    it('renders without crashing', () => {
      mountedSearch
    });

    it('handles change', () => {
        mountedSearch.instance().handleChange(event);
    })

    // it('handles search', () => {
    // let spy = jest.spyOn(mountedSearch, 'formSubmit')
    //     mountedSearch.find('input[name="filter_type"]').simulate('change', {target: {value:'location'}})
    //     mountedSearch.find('input[name="filter_value"]').simulate('change', {target: {value:'location'}})
    //     mountedSearch.find('input[name="search"]').simulate('change', {target: {value:'search'}})
    //     mountedSearch.find('form').simulate('submit', {preventDefault: jest.fn()})
    //     expect(spy).toHaveBeenCalled();
    // })

    it('has an li', () => {
        const lis= mountedSearch.find('li');
        expect(lis.length).toBe(1)
     })

     it('has a form', () => {
        const forms = mountedSearch.find('form');
        expect(forms.length).toBe(1)
     })

     it('has divs', () => {
        const divs= mountedSearch.find('div');
        expect(divs.length).toBe(3)
     })

     it('has a select', () => {
        const selects= mountedSearch.find('select');
        expect(selects.length).toBe(1)
     })

     it('has inputs', () => {
        const inputs= mountedSearch.find('input');
        expect(inputs.length).toBe(2)
     })

     it('has options', () => {
        const options= mountedSearch.find('option');
        expect(options.length).toBe(3)
     })

     it('has a button', () => {
        const buttons= mountedSearch.find('Button');
        expect(buttons.length).toBe(1)
     })
});