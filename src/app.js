const Mountains = require ('./models/mountains');
const SelectView = require ('./views/select_view');
const MountainListView = require ('./views/mountain_list_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const mountainListView = new MountainListView();
  mountainListView.bindEvents();

  

  const mountains = new Mountains();
  mountains.bindEvents();
})
