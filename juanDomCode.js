console.log(document);
VM2738:1 #document<!doctype html><html lang=​"en">​<head>​…​</head>​<meta charset=​"utf-8">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​Great Idea! DOM​</title>​<link href=​"https:​/​/​fonts.googleapis.com/​css?family=Bangers|Titillium+Web" rel=​"stylesheet">​<link rel=​"stylesheet" href=​"css/​index.css">​<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]--><script src=​"js/​index.js" async>​</script>​</head>​<body>​<div class=​"container">​<header>​<nav>​<a href=​"#">​</a>​<a href=​"#">​</a>​<a href=​"#">​</a>​<a href=​"#">​</a>​<a href=​"#">​</a>​<a href=​"#">​</a>​</nav>​<img id=​"logo-img" class=​"logo" src=​"img/​logo.png" alt=​"Great Idea! Company logo.">​</header>​<section class=​"cta">​…​</section>​<section class=​"main-content">​…​</section>​<section class=​"contact">​…​</section>​<footer>​…​</footer>​</div>​<!-- container --></body>​</html>​
undefined
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

const newCta = document.querySelector('.cta h1');
undefined
newCta
<h1>​</h1>​
newCta.textContent = 'DOM is Awesome';
"DOM is Awesome"
const newbttn = document.querySelector('.cta button')
undefined
newbttn
<button>​</button>​
newbttn.textContent = 'Get Started';
"Get Started"
const topImg = document.querySelector(#cta-img);
VM3788:1 Uncaught SyntaxError: Invalid or unexpected token
const topImg = document.querySelector('#cta-img');
undefined
topImg.src = 'img/header-img.png';
"img/header-img.png"
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
document.querySelectorAll('.text-content');
NodeList(5) [div.text-content, div.text-content, div.text-content, div.text-content, div.text-content]0: div.text-contentaccessKey: ""align: ""assignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""baseURI: "file:///Users/juanaleman/LambdaSchoolCode/Sprint04/DOM-I/index.html"childElementCount: 2childNodes: NodeList(5) [text, h4, text, p, text]children: HTMLCollection(2) [h4, p]classList: DOMTokenList ["text-content", value: "text-content"]className: "text-content"clientHeight: 69clientLeft: 0clientTop: 0clientWidth: 880contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falsefirstChild: textfirstElementChild: h4hidden: falseid: ""innerHTML: "↵                    <h4>Features</h4>↵                    <p>Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p>↵                "innerText: "Features↵↵Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: plocalName: "div"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: div.text-contentnextSibling: textnodeName: "DIV"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 69offsetLeft: 136offsetParent: bodyoffsetTop: 627offsetWidth: 880onabort: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullonvolumechange: nullonwaiting: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwheel: nullouterHTML: "<div class="text-content">↵                    <h4>Features</h4>↵                    <p>Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p>↵                </div>"outerText: "Features↵↵Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."ownerDocument: documentparentElement: div.top-contentparentNode: div.top-contentpart: DOMTokenList [value: ""]prefix: nullpreviousElementSibling: nullpreviousSibling: textscrollHeight: 72scrollLeft: 0scrollTop: 0scrollWidth: 880shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "DIV"textContent: "↵                    Features↵                    Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.↵                "title: ""translate: true__proto__: HTMLDivElement1: div.text-content2: div.text-contentaccessKey: ""align: ""assignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""baseURI: "file:///Users/juanaleman/LambdaSchoolCode/Sprint04/DOM-I/index.html"childElementCount: 2childNodes: NodeList(5) [text, h4, text, p, text]children: HTMLCollection(2) [h4, p]classList: DOMTokenList ["text-content", value: "text-content"]className: "text-content"clientHeight: 15clientLeft: 0clientTop: 0clientWidth: 20contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falsefirstChild: textfirstElementChild: h4hidden: falseid: ""innerHTML: "↵                    <h4></h4>↵                    <p></p>↵                "innerText: ""inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: plocalName: "div"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: div.text-contentnextSibling: textnodeName: "DIV"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 15offsetLeft: 272offsetParent: bodyoffsetTop: 774offsetWidth: 20onabort: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullonvolumechange: nullonwaiting: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwheel: nullouterHTML: "<div class="text-content">↵                    <h4></h4>↵                    <p></p>↵                </div>"outerText: ""ownerDocument: documentparentElement: div.bottom-contentparentNode: div.bottom-contentpart: DOMTokenList [value: ""]prefix: nullpreviousElementSibling: nullpreviousSibling: textscrollHeight: 15scrollLeft: 0scrollTop: 0scrollWidth: 20shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "DIV"textContent: "↵                    ↵                    ↵                "title: ""translate: true__proto__: HTMLDivElement3: div.text-content4: div.text-contentlength: 5__proto__: NodeList

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
const newAboutSec = document.querySelector('.about-content h4');
undefined
newAboutSec
<h4>​</h4>​
newAboutSec.textContent = 'About';
"About"

const newAboutSec2 = document.querySelector('.about-content p');
undefined
newAboutSec2
<p>​</p>​
newAboutSec2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."