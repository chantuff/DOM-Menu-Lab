// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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

    
});



