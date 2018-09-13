const Mountains = require ('./models/mountains');
const SelectView = require ('./views/select_view');
const MountainView = require ('./views/mountain_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const mountainView = new MountainView();
  mountainView.bindEvents();

  const mountains = new Mountains();
  mountains.bindEvents();
})
