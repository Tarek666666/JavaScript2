/**
 
 ** Exercise 3: The logo hijack **
 
 No homepage is safe from the logo bandit!Everytime he sees a Google Logo he replaces it with a logo from HackYourfuture instead: https: //www.hackyourfuture.dk/static/logo-dark.svg.

 In this exercise you 're expected to write a JavaScript function that can be executed in the console of the [Google website](https://www.google.com).

 
 1. Find out how to select the element that contains the Google logo, and store it in a variable.
 2. Modify the source and sourceset of the logo so that it 's replaced by the HackYourFuture logo instead.

 */

function hijackGoogleLogo() {
  // your code goes in here
  // finding the logo image
  let CurrentLogo = document.getElementById('hplogo');
  // finding the parent of the image
  let logoContainer = CurrentLogo.parentElement;
  // creating the image element to be the new logo
  let newLogo = document.createElement('img');
  newLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  // removing the current logo
  logoContainer.removeChild(CurrentLogo);
  //appending the new logo
  logoContainer.appendChild(newLogo);
}

hijackGoogleLogo();
