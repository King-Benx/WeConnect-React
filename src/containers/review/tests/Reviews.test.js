import React from 'react';
import { shallow } from 'enzyme';
import Reviews from "../Reviews";

describe('These are tests for the login form ', () =>{
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

    it('renders without crashing', () => {
       shallow(<Reviews {...props} />)
    });
});