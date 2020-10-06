/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/



// variabels
const image = document.querySelector('img');
const body = document.querySelector('body');
let startWalking = setInterval(catWalk, 50);
// the first position of the cat is 0
image.style.transform = 'translateX(0px)';

function catWalk() {
  // everytime the function excutes it will move the image 10px to the right
  image.style.transform += 'translateX(10px)';
  // getting the length of the cat photo to add to the whole pixels to make sure that the cat will stay on the page
  const catWidth = image.width;
  // getting the full width of the page to keep the cat moving inside it
  let fullWidth = document.body.clientWidth;
  // the currnet position on X of the cat
  let currentPosition = image.getBoundingClientRect().x;
  //getting the half of the whole width to make the cat dances when it reaches the middle of the page
  let middleOfPage = Math.floor((fullWidth - catWidth) / 2);
  // because we don't know exactly the width of the whole page, i made the condition in range of 10 pix + the middle of the page, in this way the condition will be
  // true only once every loop ..... (ps: i know there must be a better way but i spend already 2 days and couldn't find another solution,
  // i saw cats running and trying to kill me in my dreams :xD
  //i was super happy cause i could make it work   )
  // if there is a way to make this codition more specific and dynamic , i can't wait until i hear it.
  if (
    currentPosition == middleOfPage ||
    currentPosition + 1 == middleOfPage ||
    currentPosition + 2 == middleOfPage ||
    currentPosition + 3 == middleOfPage ||
    currentPosition + 4 == middleOfPage ||
    currentPosition + 5 == middleOfPage ||
    currentPosition + 6 == middleOfPage ||
    currentPosition + 7 == middleOfPage ||
    currentPosition + 8 == middleOfPage ||
    currentPosition + 9 == middleOfPage
  ) {
    // changing the image from walking cat to a dancing cat
    image.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
    // clearing the interval so the cat will not move anymore
    clearInterval(startWalking);
    // calling the function walkAgain which will excute the same old interval so the cat will move again but after 5 sec.
    setTimeout(walkAgain, 5000);

    function walkAgain() {
      startWalking = setInterval(catWalk, 50);
      image.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    }
  }

  // checking if the current position of the cat + the cat lenght is greater than the body, then reset the translateX to 0, so its start from the begining
  if (currentPosition + catWidth >= fullWidth) {
    image.style.transform = 'translateX(0px)';
  }
}
