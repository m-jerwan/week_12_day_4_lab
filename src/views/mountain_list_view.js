const PubSub = require ('../helpers/pub_sub');
const MountainView = require('./mountain_view');
const MountainListView = function(){

}
MountainListView.prototype.bindEvents = function(){
    PubSub.subscribe('Mountains:data-ready', (event) => {
        this.render(event.detail);
    });
}

MountainListView.prototype.render = function(allMountainData){
    const masterContainer = document.querySelector('#master-container');
    allMountainData.forEach(mountain => {
        const mountainView = new MountainView(mountain, masterContainer);
        mountainView.render();
    });
    
}

module.exports = MountainListView;