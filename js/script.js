(function() {
'use strict';


window.onload = () => {
  // Show the slot 1 tiles and links by default
  showSlot(1);

  // Wait until all the stylesheets and images have loaded before showing the tiles.
  // This prevents a Flash of Unstyled Content (FOUC) and makes the animation less jerky,
  // since it's not loading images at the same time as animating
  showTiles();

  // Whenever a number key is pressed, show the corresponding slot
  window.addEventListener('keypress', showSlotForKey);
};


/**
 * Animates the tiles onto the screen
 */
function showTiles() {
  let tileList = document.getElementById('tileList');
  tileList.classList.remove('hidden');

  // Some really cool animations are:
  // flip, swing, jackInTheBox, rotateIn, tada, zoomIn, bounceInUp, flipInX,  flipInY, pulse
  tileList.classList.add('animated', 'zoomIn');
}


/**
 * Toggles HTML attributes to the corresponding slot.  For example, if slot === 1,
 * then attributes like data-href-1 and data-src-1 will be activated.  If slot === 2,
 * then attributes like data-href-2 and data-src-2 will be activated.
 */
function showSlot(slot) {
  setAttribute('href', slot);
  setAttribute('src', slot);
}


/**
 * Sets the specified attribute to the corresponding "data-xxx-##" attribute for all elements
 */
function setAttribute(attribute, slot) {
  let elements = document.querySelectorAll(`[data-${attribute}-${slot}]`);

  for (let element of elements) {
    let slotValue = element.getAttribute(`data-${attribute}-${slot}`);
    element.setAttribute(attribute, slotValue);
  }
}


/**
 * Whenever a number key is pressed, show the corresponding slot
 */
function showSlotForKey(event) {
  if (/\d/.test(event.key)) {
    // It's a number key, so show the corresponding slot
    showSlot(event.key);
  }
}
}());
