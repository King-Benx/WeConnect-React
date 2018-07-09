import React from 'react';
import { shallow } from 'enzyme';
import CreateBusiness from "../CreateBusiness";

describe('These are tests for create business form ', () =>{
    const props={
        history:{
           push: (event)=>{},
           replace: (event)=>{}

        }
    }
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }

    let mountedCreateBusiness;
    beforeEach(() =>{
        mountedCreateBusiness = shallow(<CreateBusiness history={{replace: ()=>{}}}/>)
    })

    it('handles input changed', () => {
        mountedCreateBusiness.instance().handleChange(event)
    })

    it('handles input reset', () => {
        mountedCreateBusiness.instance().handleReset(event)
    })

    it('handles form submit', () => {
        mountedCreateBusiness.instance().formSubmit(event)
    })

    it('has a b', () => {
        const bs = mountedCreateBusiness.find('b');
        expect(bs.length).toBe(1);
    })

    it('has a form', () => {
        const forms = mountedCreateBusiness.find('form');
        expect(forms.length).toBe(1);
    })

    it('has a dashboard navigation', () => {
        const navigations = mountedCreateBusiness.find('DashboardNavigation');
        expect(navigations.length).toBe(1);
    })

    it('has a i_s', () => {
        const i_s = mountedCreateBusiness.find('i');
        expect(i_s.length).toBe(2);
    })

    it('has a textarea', () => {
        const textareas = mountedCreateBusiness.find('textarea');
        expect(textareas.length).toBe(1);
    })

    it('has inputs', () => {
        const inputs = mountedCreateBusiness.find('input');
        expect(inputs.length).toBe(3);
    })

    it('has divs', () => {
        const divs = mountedCreateBusiness.find('div');
        expect(divs.length).toBe(11);
    })
});