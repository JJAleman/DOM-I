// NAV BAR A TAGS
const navAs = document.querySelectorAll('a');
undefined
navAs
NodeList(6) [a, a, a, a, a, a]0: a1: a2: a3: a4: a5: alength: 6__proto__: NodeList
Array.from(navAs);
(6) [a, a, a, a, a, a]
navAs
NodeList(6) [a, a, a, a, a, a]0: a1: a2: a3: a4: a5: alength: 6__proto__: NodeList
console.log(navAs);
VM3011:1 NodeList(6) [a, a, a, a, a, a]
undefined
navAs.textContent = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
(6) ["Services", "Product", "Vision", "Features", "About", "Contact"]0: "Services"1: "Product"2: "Vision"3: "Features"4: "About"5: "Contact"length: 6__proto__: Array(0)
console.log(navAs);
VM3163:1 NodeList(6) [a, a, a, a, a, a, textContent: Array(6)]
undefined
navAs[0].textContent = 'Service';
"Service"
navAs[1].textContent = 'Product';
"Product"
navAs[2].textContent = 'Vision';
"Vision"
navAs[3].textContent = 'Features';
"Features"
navAs[4].textContent = 'Aboout';
"Aboout"
navAs[5].textContent = 'Contact';
"Contact"

// TOP SECTION HEADER
const newCta = document.querySelector('.cta h1');
undefined
newCta
<h1>​</h1>​
newCta.textContent = 'DOM is Awesome';
"DOM is Awesome"

// TOP SECTION BUTTON
const newbttn = document.querySelector('.cta button')
undefined
newbttn
<button>​</button>​
newbttn.textContent = 'Get Started';
"Get Started"

// TOP SECTION IMG
const topImg = document.querySelector(#cta-img);
VM3788:1 Uncaught SyntaxError: Invalid or unexpected token
const topImg = document.querySelector('#cta-img');
undefined
topImg.src = 'img/header-img.png';
"img/header-img.png"

// MIDDLE SECTION 'FEATURES
const newMainCont = document.querySelector('.text-content h4');
undefined
newMainCont
<h4>​</h4>​
newMainCont.textContent = 'Features';
"Features"

const newFeatCont = document.querySelector('.text-content p');
undefined
newFeatCont
<p>​</p>​
newFeatCont.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// PULLED OUT DIV TO NAME IT A DIFFERENT CLASS
const pullDiv = document.querySelectorAll('.text-content');
undefined
pullDiv
NodeList(5) [div.text-content, div.text-content, div.text-content, div.text-content, div.text-content]0: div.text-content1: div.text-content2: div.text-content3: div.text-content4: div.text-contentlength: 5__proto__: NodeList
pullDiv[1].className = 'about-content';
"about-content"
const aboutSec = pullDiv[1];
undefined
aboutSec
<div class=​"about-content">​…​</div>​


// ABOUT SECTION H4
const newAboutSec = document.querySelector('.about-content h4');
undefined
newAboutSec
<h4>​</h4>​
newAboutSec.textContent = 'About';
"About"

// ABOUT SECTION P
const newAboutSec2 = document.querySelector('.about-content p');
undefined
newAboutSec2
<p>​</p>​
newAboutSec2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// MIDDLE IMAGE
const midImg = document.querySelector('.middle-img');
undefined
midImg
<img class=​"middle-img" id=​"middle-img" src(unknown) alt=​"Image of code snippets across the screen">​
midImg.src = 'img/mid-page-accent.jpg';
"img/mid-page-accent.jpg"

// RENAMED 3RD TEXT-CONTENT CLASS
pullDiv
NodeList(5) [div.text-content, div.about-content, div.text-content, div.text-content, div.text-content]0: div.text-content1: div.about-content2: div.text-content3: div.text-content4: div.text-contentlength: 5__proto__: NodeList
pullDiv[2].className = 'services-content';
"services-content"

const newServices = pullDiv[2];
undefined
newServices
<div class=​"services-content">​…​</div>​

// ADDED SERVICES H4

const newServicesH4 = document.querySelector('.services-content h4');
undefined
newServicesH4.textContent = 'Services';
"Services"

// ADDED SERVICE PARAGRAPH
const newServicesP = document.querySelector('.services-content p');
undefined
newServicesP
<p>​</p>​
newServicesP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// PRODUCT SECTION
pullDiv[3].className = 'product-content';
"product-content"

const newProduct = pullDiv[3];
undefined
newProduct
<div class=​"product-content">​…​</div>​

const newProdH4 = document.querySelector('.product-content h4');
undefined

newProdH4.textContent = 'Product';
"Product"

const newProdP = document.querySelector('.product-content p';
VM5746:1 Uncaught SyntaxError: missing ) after argument list
const newProductP = document.querySelector('.product-content p');
undefined

newProductP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// VISION SECTION
pullDiv[4]
<div class=​"text-content">​…​</div>​
pullDiv[4].className = 'vision-content';
"vision-content"
pullDiv[4]
<div class=​"vision-content">​…​</div>​
const newVision = pullDiv[4];
undefined

const newVis4 = document.querySelector('.vision-content h4');
undefined
newVis4.textContent = 'Vision';

const VisP = document.querySelector('.vision-content p');
undefined

VisP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

