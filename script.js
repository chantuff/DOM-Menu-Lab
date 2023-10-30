// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";
// Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
// Add a class of flex-ctrto mainEl.
mainEl.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu">element in a variable named topMenuEl
const topMenuEl = document.querySelector("#top-menu");
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Set the height topMenuElelement to be 100%
topMenuEl.style.height = '100%';
// Add a class of flex-aroundto topMenuEl
topMenuEl.classList.add('flex-around');

// iterate over the entire menuLinks array and for each "link" object
menuLinks.forEach(link => {
// Create an <a>element.
  let linkElement = document.createElement('a');
  // add an href attribute with its value set to the href property of the "link" object
  linkElement.setAttribute('href', link.href);
  // Set the new element's content to the value of the text property of the "link" object.
  linkElement.textContent = link.text;
  // append the new element to the topMenul element
  topMenuEl.appendChild(linkElement);

  // task 4.0

// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl
const subMenuEl = document.querySelector("#sub-menu");
// Set the height subMenuElelement to be 100%
subMenuEl.style.height = '100%';
// Set the background color of subMenuElto the value stored in the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// Add the class of flex-aroundto the subMenuElelement
subMenuEl.classList.add('flex-around');
// Set the CSS position property of subMenuElto the value of absolute
subMenuEl.style.position = 'absolute';
// Set the CSS topproperty of subMenuElto the value of 0
subMenuEl.style.top = '0';

// task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks
const topMenuLinks = topMenuEl.querySelectorAll("a");
// Declare a global showingSubMenuvariable and initialize it to false
var showingSubMenu = false;
// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  } 
  console.log(event.target.textContent)
  // task 5.3
  // Next in the event listener, if the clicked <a>link has a class of active:
  // Remove the activeclass from the clicked <a>element.
  // Set the showingSubMenuto false.
  // Set the CSS topproperty of subMenuElto 0.
  // returnto exit the handler.
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    var showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  // // task 5.4
  // Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not
topMenuLinks.forEach(function(link) {
  link.classList.remove('active');
})
// task 5.5
// Next, the event listener should add a class name of activeto the <a>element that was clicked.
event.target.classList.add('active');
var linkObject = menuLinks.find(function(link) {
  return link.text === event.target.textContent;
})
//task 5.6
// Set showingSubMenu to true if the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.
showingSubMenu = linkObject && linkObject.subLinks ? true : false;

// task 5.8 
// Code the buildSubMenufunction so that it:

// Clears the contents of subMenuEl.
// Iterates over the subLinksarray passed as an argument; and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.
function buildSubMenu (subMenuEl, subLinksArray) {
  subMenuEl.innerHTML='';
  subLinksArray.forEach(function(link) {
    var subMenuLink = document.createElement('a');
    subMenuLink.setAttribute('href', link.href);
    subMenuLink.textContent = link.text;
    subMenuEl .appendChild(subMenuLink);
  })
}
// task 5.7
// Next in the event listener...

// If showingSubMenu is true:

// Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
// Set the CSS topproperty of subMenuElto 100%.
// Otherwise (showingSubMenuis false):

if (showingSubMenu) {
  buildSubMenu(subMenuEl, linkObject.subLinks);
  subMenuEl.style.top = '100%';
} else {
subMenuEl.style.top = '0';
}

})
})

// Issues with task 5.6