import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', function(){

    let mountedApp;
    beforeEach(()=>{
        mountedApp = shallow(<App />);
    });
    
    it('renders without crashing', () => {
        let mountedApp = shallow(<App />);
       });

    it('renders a NavBar', ()=>{
        const locators = mountedApp.find('NavBar');
        expect(locators.length).toBe(1);
    });

    it('renders a Content', ()=>{
        const locators = mountedApp.find('Content');
        expect(locators.length).toBe(1);
    });

    it('renders a NotificationContainer', ()=>{
        const locators = mountedApp.find('NotificationContainer');
        expect(locators.length).toBe(1);
    });
    
    it('renders a Footer', ()=>{
        const locators = mountedApp.find('Footer');
        expect(locators.length).toBe(1);
    });

    it('has a div', ()=>{
        const locators = mountedApp.find('div');
        expect(locators.length).toBe(1);
    });

});

