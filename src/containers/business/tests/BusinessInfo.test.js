import React from 'react';
import { shallow } from 'enzyme';
import BusinessInfo from "../BusinessInfo";

describe('These are tests for the businesses info page ', () =>{
    const props = {
        business:{
        }
    }

    it('renders without crashing', () => {
       shallow(<BusinessInfo {...props} />)
    });

    it('has divs', () => {
        const wrapper = shallow(<BusinessInfo {...props}/>)
        expect(wrapper.find('div').length).toBe(1)
    });

    it('has h4s', () => {
        const wrapper = shallow(<BusinessInfo {...props}/>)
        expect(wrapper.find('h4').length).toBe(4)
    });

    it('has b', () => {
        const wrapper = shallow(<BusinessInfo {...props}/>)
        expect(wrapper.find('b').length).toBe(4)
    });

    it('has an underline', () => {
        const wrapper = shallow(<BusinessInfo {...props}/>)
        expect(wrapper.find('u').length).toBe(1)
    });

    it('has an spans', () => {
        const wrapper = shallow(<BusinessInfo {...props}/>)
        expect(wrapper.find('span').length).toBe(3)
    });

    it('has a paragraph', () => {
        const wrapper = shallow(<BusinessInfo {...props}/>)
        expect(wrapper.find('p').length).toBe(1)
    });

    it('has an image', () => {
        const wrapper = shallow(<BusinessInfo {...props}/>)
        expect(wrapper.find('Image').length).toBe(1)
    });

});