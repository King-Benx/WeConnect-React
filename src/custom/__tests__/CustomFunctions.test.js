import CustomFunctions from "../CustomFunctions";
import { NotificationManager } from 'react-notifications';

describe('These are tests for Custom Functions ', () =>{
    let storedToken;
    beforeEach(() => {
        try {
            storedToken = localStorage.setItem('token','abcdefghijklasdasfdsfasdsdafs');
        } catch (error) {
            return null
        }
        
    })

    afterEach(()=>{
        try {
            localStorage.clear();
            localStorage.removeItem('token');
        } catch (error) {
            return null
        }
        
    })

    it('has stored a token',() => {
        expect(CustomFunctions.storeToken('abcdefghijklasdasfdsfasdsdafs')).toEqual(storedToken);
    })

    it('can get a token',() => {
        expect(CustomFunctions.getToken()).toEqual('abcdefghijklasdasfdsfasdsdafs');
    })

    it('can delete token',()=>{
        expect(CustomFunctions.deleteToken()).toEqual(true);
    })

    it('can can authenticate',()=>{
        expect(CustomFunctions.checkAuthentication()).toEqual(true);
    })

    // Testing the Notifications 
    it('handles a 200 response',()=>{
        expect(CustomFunctions.createNotifications(200,'success')).toEqual(NotificationManager.success(message, 'Success'));
    })

    it('handles a 404 response',()=>{
        expect(CustomFunctions.createNotifications(404,'unknown')).toEqual(NotificationManager.error('unknown'));
    })

    it('handles a 500 response',()=>{
        expect(CustomFunctions.createNotifications(500,'internal server error')).toEqual(NotificationManager.error('internal server error'));
    })

    it('handles a 201 response',()=>{
        expect(CustomFunctions.createNotifications(201,'created')).toEqual(NotificationManager.info('created'));
    })

    it('handles a 400 response',()=>{
        expect(CustomFunctions.createNotifications(400,'bad request')).toEqual(NotificationManager.warning('bad request'));
    })

    it('handles a 401 response',()=>{
        expect(CustomFunctions.createNotifications(401,'unauthorized')).toEqual(NotificationManager.error('unauthorized'));
    })

    it('handles any response',()=>{
        expect(CustomFunctions.createNotifications(301,'moved permanently')).toEqual(NotificationManager.error('moved permanently'));
    })
   
})