import React from 'react';
import { shallow } from 'enzyme';
import CreateBusiness from "../CreateBusiness";

describe('These are tests for create business form ', () =>{
    const props={
        history:{
            replace:'/owned_businesses'
        },
        match:{
            params:{
            
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

    it('handles input changed', () => {
        const wrapper = shallow(<CreateBusiness />); 
        wrapper.instance().handleChange(event)
    })

    it('handles input reset', () => {
        const wrapper = shallow(<CreateBusiness />); 
        wrapper.instance().handleReset(event)
    })
});