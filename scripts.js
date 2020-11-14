// variables that select links
const homeLink = document.querySelector('.home-link');
const aboutLink = document.querySelector('.about-link');
const portfolioLink = document.querySelector('.portfolio-link');
const contactLink = document.querySelector('.contact-link');
const homeLink2 = document.querySelector('.home-link2');
const aboutLink2 = document.querySelector('.about-link2');
const portfolioLink2 = document.querySelector('.portfolio-link2');
const contactLink2 = document.querySelector('.contact-link2');
const homeLink3 = document.querySelector('.home-link3');
const aboutLink3 = document.querySelector('.about-link3');
const portfolioLink3 = document.querySelector('.portfolio-link3');
const contactLink3 = document.querySelector('.contact-link3');
const homeLink4 = document.querySelector('.home-link4');
const aboutLink4 = document.querySelector('.about-link4');
const portfolioLink4 = document.querySelector('.portfolio-link4');
const contactLink4 = document.querySelector('.contact-link4');
const home = document.querySelector('.home-page');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
// event listeners
homeLink.addEventListener('click', switchToHome)
aboutLink.addEventListener('click', switchToAbout)
portfolioLink.addEventListener('click', switchToPortfolio)
contactLink.addEventListener('click', switchToContact)
homeLink2.addEventListener('click', switchToHome)
aboutLink2.addEventListener('click', switchToAbout)
portfolioLink2.addEventListener('click', switchToPortfolio)
contactLink2.addEventListener('click', switchToContact)
homeLink3.addEventListener('click', switchToHome)
aboutLink3.addEventListener('click', switchToAbout)
portfolioLink3.addEventListener('click', switchToPortfolio)
contactLink3.addEventListener('click', switchToContact)
homeLink4.addEventListener('click', switchToHome)
aboutLink4.addEventListener('click', switchToAbout)
portfolioLink4.addEventListener('click', switchToPortfolio)
contactLink4.addEventListener('click', switchToContact)
// functions to switch pages
function switchToHome() {
  portfolio.classList.add('hidden');
  contact.classList.add('hidden');
  about.classList.add('hidden');
  home.classList.remove('hidden');
}

function switchToAbout() {
  portfolio.classList.add('hidden');
  home.classList.add('hidden');
  contact.classList.add('hidden');
  about.classList.remove('hidden');
}

function switchToPortfolio() {
  contact.classList.add('hidden');
  about.classList.add('hidden');
  home.classList.add('hidden');
  portfolio.classList.remove('hidden');
}

function switchToContact() {
  portfolio.classList.add('hidden');
  about.classList.add('hidden');
  home.classList.add('hidden');
  contact.classList.remove('hidden');
}
