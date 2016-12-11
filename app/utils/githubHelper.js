var axios = require('axios');

var ID = "CLIENT_ID";
var SECRET_ID = "SECRET_ID";
var param = "?client_id" + ID + "&client_secret=" + SECRET_ID;

function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
    getPlayersInfo: function(players){

        return axios.all(players.map(function(username){
            return getUserInfo(username);
        }))
        .then(function(info){
            return info.map(function(userInfo){
                return userInfo.data;
            })
        })
        .catch(function(err){
            console.warn('Error in getPlayersInfo', err);
        });
    }
};

module.exports = helpers;
