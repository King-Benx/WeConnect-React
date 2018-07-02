import {NotificationManager} from 'react-notifications';
class CustomFunctions {
    static createNotifications(code, message) {
        switch (code) {
            case 200:
                return NotificationManager.success(message, 'Success');
            case 404:
            case 500:
                return NotificationManager.error(message);
            case 201:
                return NotificationManager.info(message);
            case 400:
                return NotificationManager.warning(message);
            case 401:
                return NotificationManager.error(message);
            default:
                return NotificationManager.error(message);
        }
    }
    
    static storeToken(token, timeout){
        // Store a token and clear it after it expires
        localStorage.clear()
        var minutes = timeout; 
        var now = new Date().getTime();
        const stored_data = localStorage.getItem('data');
        var setupTime = stored_data?JSON.parse(stored_data).setupTime:null;
        if (setupTime == null) {
            localStorage.clear();
            localStorage.setItem('data',JSON.stringify({'setupTime':now,'token':token}))
        } else {
            if(now-setupTime > minutes*60*1000) {
                localStorage.clear();
            }
        }
    }

    static checkAuthentication(){
        const stored_data = localStorage.getItem('data')
        if (stored_data){
            const stored_token = JSON.parse(stored_data).token;
            return stored_token && stored_token.length > 10;
        }else{
            return false;
        } 
    }
}
export default CustomFunctions;