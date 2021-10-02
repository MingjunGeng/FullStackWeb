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
  
  // header
  const  navItem1 = document.querySelector('.nav-item-1');
  navItem1.textContent = siteContent["nav"]["nav-item-1"];
  const  navItem2 = document.querySelector('.nav-item-2');
  navItem2.textContent = siteContent["nav"]["nav-item-2"];
  const  navItem3 = document.querySelector('.nav-item-3');
  navItem3.textContent = siteContent["nav"]["nav-item-3"];
  const  navItem4 = document.querySelector('.nav-item-4');
  navItem4.textContent = siteContent["nav"]["nav-item-4"];
  const  navItem5 = document.querySelector('.nav-item-5');
  navItem5.textContent = siteContent["nav"]["nav-item-5"];
  const  navItem6 = document.querySelector('.nav-item-6');
  navItem6.textContent = siteContent["nav"]["nav-item-6"];
  
  // section cta
  const  ctaH1 = document.querySelector('.cta-text h1');
  ctaH1.textContent = siteContent["cta"]["h1"];
  const  ctaButton = document.querySelector('.cta-text button');
  ctaButton.textContent = siteContent["cta"]["button"];
  let headerImg = document.getElementById("cta-img");
  headerImg.setAttribute('src', siteContent["cta"]["img-src"]);
  
  // section main-content
  const  featuresH4 = document.querySelector('.features-h4');
  featuresH4.textContent = siteContent["main-content"]["features-h4"];
  const  featuresContent = document.querySelector('.features-content');
  featuresContent.textContent = siteContent["main-content"]["features-content"];
  
  const  aboutH4 = document.querySelector('.about-h4');
  aboutH4.textContent = siteContent["main-content"]["about-h4"];
  const  aboutContent = document.querySelector('.about-content');
  aboutContent.textContent = siteContent["main-content"]["about-content"];
  
  let middleImg = document.getElementById("middle-img");
  middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  
  
  const  servicesH4 = document.querySelector('.services-h4');
  servicesH4.textContent = siteContent["main-content"]["services-h4"];
  const  servicesContent = document.querySelector('.services-content');
  servicesContent.textContent = siteContent["main-content"]["services-content"];
  
  const  productH4 = document.querySelector('.product-h4');
  productH4.textContent = siteContent["main-content"]["product-h4"];
  const  productContent = document.querySelector('.product-content');
  productContent.textContent = siteContent["main-content"]["product-content"];
  
  const  visionH4 = document.querySelector('.vision-h4');
  visionH4.textContent = siteContent["main-content"]["vision-h4"];
  const  visionContent = document.querySelector('.vision-content');
  visionContent.textContent = siteContent["main-content"]["vision-content"];
  
  
  // section contact
  const  contactH4 = document.querySelector('.contact-h4');
  contactH4.textContent = siteContent["contact"]["contact-h4"];
  const  address = document.querySelector('.address');
  address.textContent = siteContent["contact"]["address"];
  const  phone = document.querySelector('.phone');
  phone.textContent = siteContent["contact"]["phone"];
  const  email = document.querySelector('.email');
  email.textContent = siteContent["contact"]["email"];
  
  const  footerP = document.querySelector('footer p');
  footerP.textContent = siteContent["footer"]["copyright"];
  