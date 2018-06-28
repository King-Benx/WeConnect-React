function checkAuthentication(){
    const stored_token = localStorage.getItem('token');
    return stored_token && stored_token.length > 10;
}
export default checkAuthentication;