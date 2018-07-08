import React from 'react';
import { shallow } from 'enzyme';
import Businesses from "../Businesses";

describe('These are tests for the businesses page ', () =>{

    it('renders without crashing', () => {
       shallow(<Businesses />)
    });

    it('component did mount', () => {
        const wrapper = shallow(<Businesses />); 
        wrapper.instance().componentDidMount()
    })

});