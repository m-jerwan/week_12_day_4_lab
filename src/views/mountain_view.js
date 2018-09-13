const PubSub = require ('../helpers/pub_sub');

const MountainView = function(){

}
MountainView.prototype.bindEvents = function(){
    PubSub.subscribe('Mountains:data-ready', (event) => {
    });
}

MountainView.prototype.render = function(){

}

module.exports = MountainView;