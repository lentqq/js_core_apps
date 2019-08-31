const storage = function() {
   
    const appKey = 'kid_HJSCaqDBB';
    const appSecret = '96be0bfeee8d413e9ba60970f01860f4';

    const getData = function(key) {
        return localStorage.getItem(key + appKey);
    };

    const saveData = function(key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function(data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser = function() {
        localStorage.removeItem('userInfo' + appKey);
        localStorage.removeItem('authToken' + appKey);
    };

    return {
        getData,
        saveData,
        deleteUser, 
        appKey, 
        appSecret
    };
}();
