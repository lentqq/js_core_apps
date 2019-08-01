const storage = function() {
   
    const appKey = 'kid_ry3lhiazB';
    const appSecret = '3e01f0a250374a8fb5c122782f1dfd45';

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