const PubSub = require ('../helpers/pub_sub');
const MountainView = require ('./mountain_view');


const SelectView = function(element){
    this.element = element;
}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Mountains:regions-ready', (event)=>{
        this.renderList(event.detail);
        const select = document.querySelector('#select');
        select.addEventListener('change',(event)=>{
            const selectedRegionName = event.target.value;
            this.getRegionMountains(selectedRegionName);
        })    
    })
}

SelectView.prototype.renderList = function(regions){
    const mountainView = new MountainView();
    const select = document.querySelector('#select');
    regions.forEach((region, index) => {
        const option = document.createElement('option');
        option.textContent = region;
        option.value = region;
        select.appendChild(option);
        // mountainView.createHtmlElement('option', select, region)
    });
}

SelectView.prototype.getRegionMountains = function(selectedRegionName){
    console.log(`publishing here :${selectedRegionName}`);
}




module.exports = SelectView;