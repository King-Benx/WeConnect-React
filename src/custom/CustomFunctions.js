import {
    NotificationManager
} from 'react-notifications';
class CustomFunctions {
    static createNotifications(code, message) {
        // Generate notifications based off status codes
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

    static storeToken(token) {
        // Store a token and clear it after it expires
        localStorage.clear();
        localStorage.setItem('token', token)
    }

    static checkAuthentication() {
        // check whether token exists
        const stored_token = localStorage.getItem('token')
        if (stored_token) {
            return stored_token && stored_token.length > 10;
        } else {
            return false;
        }
    }

    static getToken() {
        // return token
        return localStorage.getItem('token')
    }

    static deleteToken() {
        // delete token from local storage
        localStorage.clear()
        localStorage.removeItem('token')
        return true
    }
}

export default CustomFunctions;