'use strict';

// Wait until all the stylesheets and images have loaded before showing the icons.
// This prevents a Flash of Unstyled Content (FOUC) and makes the animation less jerky,
// since it's not loading images at the same time as animating
window.onload = () => {
  let iconList = document.getElementById('iconList');
  iconList.classList.remove('hidden');

  // Some really cool animations are:
  // flip, swing, jackInTheBox, rotateIn, tada, zoomIn, bounceInUp, flipInX,  flipInY, pulse
  iconList.classList.add('animated', 'zoomIn');

  // Add a click event handler to each of the icons
  let icons = iconList.getElementsByTagName('a');
  for (let icon of icons) {
    icon.addEventListener('click', onTileClick);
  }
};


/**
 * If the "alt" key is pressed when a tile is clicked, then navigate to the "data-alt-href",
  if any, instead of the "href"
 */
function onTileClick(event) {
  if (event.altKey) {
    let icon = event.currentTarget;
    let url = icon.getAttribute('data-alt-href') || icon.getAttribute('href');

    if (url) {
      event.preventDefault();

      if (event.ctrlKey) {
        // Open the link in a new tab
        window.open(url);
      }
      else {
        // Open the link in the current tab
        window.location = url;
      }
    }
  }
}
