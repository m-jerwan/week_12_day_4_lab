const MountainView = function(mountainData, container) {
    this.mountainData = mountainData;
    this.container = container;
}

MountainView.prototype.render = function(){
    const mountainContainer = document.createElement('div');
    mountainContainer.classList.add('individualMountainContainer');

    const mountainNameELement = this.createMountainHeading(this.mountainData.name);
    this.container.appendChild(mountainNameELement);

    const mountainDetailsUl = document.createElement('ul');
    this.container.appendChild(mountainDetailsUl);

    const mountainDetailsList = this.createList(this.mountainData.height, this.mountainData.meaning, mountainDetailsUl);
    // container.appendChild(mountainDetailsList);

    this.container.appendChild(mountainContainer);
}




MountainView.prototype.createMountainHeading = function(mountainName){
    const title = document.createElement('h3');
    title.textContent = mountainName;  
    return title;
}

MountainView.prototype.createList = function(mountainHeight, mountainNameMeaning, mountainDetailsUl){
    const mountainHeightElement = document.createElement('li');
    mountainHeightElement.textContent = `Height: ${mountainHeight}m`;
    mountainDetailsUl.appendChild(mountainHeightElement);

    const mountainNameMeaningElement = document.createElement('li');
    mountainNameMeaningElement.textContent = `Name meaning: ${mountainNameMeaning}`;
    mountainDetailsUl.appendChild(mountainNameMeaningElement);
}


module.exports = MountainView;