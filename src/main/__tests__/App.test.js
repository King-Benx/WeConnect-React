import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', function(){
    
    it('renders without crashing', () => {
        let mountedApp = shallow(<App />);
       });

    it('renders a NavBar', ()=>{
        let mountedApp = shallow(<App/>);
        const locators = mountedApp.find('NavBar');
        expect(locators.length).toBe(1);
    });

    it('renders a Content', ()=>{
        let mountedApp = shallow(<App/>);
        const locators = mountedApp.find('Content');
        expect(locators.length).toBe(1);
    });

    it('renders a NotificationContainer', ()=>{
        let mountedApp = shallow(<App/>);
        const locators = mountedApp.find('NotificationContainer');
        expect(locators.length).toBe(1);
    });
    
    it('renders a Footer', ()=>{
        let mountedApp = shallow(<App/>);
        const locators = mountedApp.find('Footer');
        expect(locators.length).toBe(1);
    });

    it('has a div', ()=>{
        let mountedApp = shallow(<App/>);
        const locators = mountedApp.find('div');
        expect(locators.length).toBe(1);
    });

});

