const MountainView = function(mountainData, container) {
    this.mountainData = mountainData;
    this.container = container;
}

MountainView.prototype.render = function(){
    const mountainContainer = document.createElement('div');
    mountainContainer.classList.add('individualMountainContainer');

    const mountainNameELement = this.createHtmlElement('h3', this.container, this.mountainData.name);

    const mountainDetailsUl = document.createElement('ul');
    this.container.appendChild(mountainDetailsUl);

    let content = `Height: ${this.mountainData.height}`
    const mountainHeightElement = this.createHtmlElement('li',mountainDetailsUl, content);
    
    content = `Name meaning: ${this.mountainData.meaning}`
    const mountainNameMeaningElement = this.createHtmlElement('li',mountainDetailsUl, content);
    
    this.container.appendChild(mountainContainer);
}

MountainView.prototype.createHtmlElement = function(tag, container, content){
    const tempElement = document.createElement(tag);
    tempElement.textContent = content;
    container.appendChild(tempElement);
}

module.exports = MountainView;