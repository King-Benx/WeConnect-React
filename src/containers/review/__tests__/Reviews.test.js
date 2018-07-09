import React from 'react';
import { shallow } from 'enzyme';
import Reviews from "../Reviews";

describe('These are tests for the review form ', () =>{
    let props;
    let mountedReviews;
    beforeEach(() => {
        props={
            match: {
                params: {
                    id:1
                }
            },
            business:{
                id:1,
                location:'location 1',
                description:'business description 1',
                category:'category 1',
                name:'business 1',
                user_id:1
            },
            review:{
                id:1,
                author:'test author',
                review:'test review',
                last_modified: '2018-01-01',
                business_id:'1',
            },
            id:'1',
        };
        mountedReviews = shallow(<Reviews { ...props } />)
    });
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    it('renders without crashing', () => {
       shallow(<Reviews {...props} />)
    });

    it('handles input changed', () => {
        mountedReviews.instance().handleChange(event)
    })

    it('handles form submit', () => {
        mountedReviews.instance().formSubmit(event)
    })

    it('component did mount', () => {
        mountedReviews.instance().componentDidMount()
    })

    it('has a form',() =>{
        const forms = mountedReviews.find('form')
        expect(forms.length).toBe(1)
    });

});