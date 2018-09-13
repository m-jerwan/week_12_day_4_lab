const PubSub = require ('../helpers/pub_sub');
const RequestHelper = require ('../helpers/request_helper');
const Mountains = function(){

}

Mountains.prototype.bindEvents = function() {
    this.getData();      
}

Mountains.prototype.getData = function() {
    const url = 'https://munroapi.herokuapp.com/api/munros';
    const request = new RequestHelper(url);
    request.get()
        .then((data) => {
            PubSub.publish('Mountains:data-ready', data);
        })
        .catch((banana) => {
            console.error(banana)
        });
}

module.exports = Mountains;