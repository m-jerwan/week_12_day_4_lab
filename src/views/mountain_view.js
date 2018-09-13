const MountainView = function(mountainData, container) {
    this.mountainData = mountainData;
    this.container = container;
}

MountainView.prototype.render = function(){
    const mountainContainer = document.createElement('div');
    mountainContainer.classList.add('individualMountainContainer');

    const mountainNameELement = this.createMountainHeading(this.mountainData.name);
    this.container.appendChild(mountainNameELement);

    // const mountainDetailsList = document.createList();
    // container.appendChild(mountainDetailsList);

    this.container.appendChild(mountainContainer);
}




MountainView.prototype.createMountainHeading = function(mountainName){
    const title = document.createElement('h3');
    title.textContent = mountainName;  
    return title;
}


module.exports = MountainView;