import React from 'react';
import { shallow } from 'enzyme';
import ReviewInfo from "../ReviewInfo";
import renderer from 'react-test-renderer';

describe('These are tests for the login form ', () =>{
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

    let mountedReviewInfo;

    beforeEach(()=>{
        mountedReviewInfo = shallow(<ReviewInfo {...props}/>);
    });

    it('renders without crashing', () => {
       shallow(<ReviewInfo {...props} />)
       const tree = renderer.create(<ReviewInfo {...props} />).toJSON();
       expect(tree).toMatchSnapshot();
    });

    it('has div', () => {
        const divs = mountedReviewInfo.find('div')
        expect(divs.length).toBe(3)
    });

    it('has a blockquote', () => {
        const blockquotes = mountedReviewInfo.find('blockquote')
        expect(blockquotes.length).toBe(1)
    });

    it('has small size paragraphs', () => {
        const smalls = mountedReviewInfo.find('small')
        expect(smalls.length).toBe(1)
    });

    it('has an hr', () => {
        const hrs = mountedReviewInfo.find('hr')
        expect(hrs.length).toBe(1)
    });

    it('has an br', () => {
        const brs = mountedReviewInfo.find('br')
        expect(brs.length).toBe(1)
    });

    it('has an h4', () => {
        const h4s = mountedReviewInfo.find('h4')
        expect(h4s.length).toBe(1)
    });

    it('has an image', () => {
        const images = mountedReviewInfo.find('Image')
        expect(images.length).toBe(1)
    });

});