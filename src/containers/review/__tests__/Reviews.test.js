import React from 'react';
import { shallow } from 'enzyme';
import Reviews from "../Reviews";
import renderer from 'react-test-renderer';

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
            id:'1'
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
       const tree = renderer.create(<Reviews {...props} />).toJSON();
       expect(tree).toMatchSnapshot();
    });

    it('handles input changed', () => {
        mountedReviews.instance().handleChange(event)
    })

    // it('handles form submit', () => {
    //     mountedReviews.instance().formSubmit(event)
    // })

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