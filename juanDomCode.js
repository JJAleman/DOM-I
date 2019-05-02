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