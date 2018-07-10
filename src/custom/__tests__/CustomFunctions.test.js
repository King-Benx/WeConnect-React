import CustomFunctions from "../CustomFunctions";
import { shallow } from 'enzyme'

describe('These are tests for Custom Functions ', () =>{
    let storedToken;
    beforeEach(() => {
        try {
            storedToken = localStorage.setItem('token','abc');
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
        expect(CustomFunctions.storeToken('abc')).toEqual(storedToken);
    })

    it('can get a token',() => {
        expect(CustomFunctions.getToken()).toEqual('abc');
    })

    it('can delete token',()=>{
        expect(CustomFunctions.deleteToken()).toEqual(true);
    })

    // it('can can authenticate',()=>{
    //     expect(CustomFunctions.checkAuthentication()).toEqual(false);
    // })
   
})