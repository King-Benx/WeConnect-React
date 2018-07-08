import React from 'react';
import { shallow } from 'enzyme';
import Reviews from "../Reviews";

describe('These are tests for the review form ', () =>{
    const props = {
        match: {
            params: {
            }
        },
        review:{
        }
    }
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
        const wrapper = shallow(<Reviews {...props} />); 
        wrapper.instance().handleChange(event)
    })

    it('handles form submit', () => {
        const wrapper = shallow(<Reviews {...props} />); 
        wrapper.instance().formSubmit(event)
    })

    it('component did mount', () => {
        const wrapper = shallow(<Reviews {...props}/>); 
        wrapper.instance().componentDidMount()
    })

});