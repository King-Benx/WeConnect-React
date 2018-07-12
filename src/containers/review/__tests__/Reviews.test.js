import React from 'react';
import { shallow } from 'enzyme';
import Reviews from "../Reviews";
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import mockAxios from 'axios';

describe('These are tests for the review form ', () =>{
    const props = {
        match: {
            params: {
                id:1
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
    let wrapper,component;
    wrapper = shallow(<MemoryRouter><Reviews {...props}/></MemoryRouter>);
    component = wrapper.find(Reviews).dive();

    let mountedReviews;
    beforeEach(() => {
        mountedReviews = shallow(<Reviews {...props}/>)
    })
    
    it('renders without crashing', () => {
       shallow(<Reviews {...props} />)
       mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data:{
            "reviews": {
              "business_reviews": [
                {
                  "author": "admin",
                  "created_by": "admin",
                  "date_created": "Tue, 10 Jul 2018 12:33:45 GMT",
                  "last_modified": "Tue, 10 Jul 2018 12:33:45 GMT",
                  "review": "Review 1"
                }
              ]
            }
          }

        }))
    });

    it('handles input changed', () => {
        mountedReviews.instance().handleChange(event)
    })

    it('handles form submit', () => {
        mountedReviews.instance().formSubmit(event)
        let spy = jest.spyOn(component.instance(), 'formSubmit')
        component.find('textarea[name="review"]').simulate('change', {target: {value:'review 1'}})
        component.find('form').simulate('submit', {preventDefault: jest.fn()})
        expect(spy).toHaveBeenCalled();
    })

    it('component did mount', () => {
        mountedReviews.instance().componentDidMount()
    })

    it('has a form',() =>{
        const forms = mountedReviews.find('form')
        expect(forms.length).toBe(1)
    });

    it('has a dashboard',() =>{
        const dashboards = mountedReviews.find('DashboardNavigation')
        expect(dashboards.length).toBe(1)
    });

    it('has business info',() =>{
        const business_info = mountedReviews.find('BusinessInfo')
        expect(business_info.length).toBe(1)
    });

    it('has buttons',() =>{
        const buttons = mountedReviews.find('Button')
        expect(buttons.length).toBe(1)
    });

    it('has a textarea',() =>{
        const textareas = mountedReviews.find('textarea')
        expect(textareas.length).toBe(1)
    });

    it('has divs',() =>{
        const divs = mountedReviews.find('div')
        expect(divs.length).toBe(10)
    });

    it('has a legend',() =>{
        const legends = mountedReviews.find('legend')
        expect(legends.length).toBe(1)
    });

});