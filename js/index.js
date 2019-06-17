const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navi = document.querySelectorAll('header nav a');


navi[0].textContent = siteContent["nav"]["nav-item-1"];
navi[1].textContent = siteContent["nav"]["nav-item-2"]
navi[2].textContent = siteContent["nav"]["nav-item-3"];
navi[3].textContent = siteContent["nav"]["nav-item-4"];
navi[4].textContent = siteContent["nav"]["nav-item-5"];
navi[5].textContent = siteContent["nav"]["nav-item-6"];

let cta = document.querySelectorAll('.cta .cta-text h1');
cta[0].textContent = siteContent["cta"]["h1"];

const button = document.querySelectorAll("button");
 button[0].textContent = siteContent["cta"]["button"];
console.log(button);


let codeSnip = document.getElementById("cta-img");
codeSnip.setAttribute('src', siteContent["cta"]["img-src"]);

let topC = document.querySelectorAll('.top-content .text-content p');
topC[0].textContent = siteContent["main-content"]['features-content'];
topC[1].textContent = siteContent["main-content"]['about-content'];

let topCT = document.querySelectorAll('.top-content .text-content h4');
topCT[0].textContent = siteContent["main-content"]['features-h4'];
topCT[1].textContent = siteContent["main-content"]['about-h4'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomC = document.querySelectorAll('.bottom-content .text-content h4');
bottomC[0].textContent = siteContent["main-content"]['services-h4'];
bottomC[1].textContent = siteContent["main-content"]['product-h4'];
bottomC[2].textContent = siteContent["main-content"]['vision-h4'];

let bottomCT = document.querySelectorAll('.bottom-content .text-content p');
bottomCT[0].textContent = siteContent["main-content"]['services-content'];
bottomCT[1].textContent = siteContent["main-content"]['product-content'];
bottomCT[2].textContent = siteContent["main-content"]['vision-content'];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];



