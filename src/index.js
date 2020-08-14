import navbar from './navbar.js';
import footer from './footer.js';
import homePage from './pages/home';
import menuPage from './pages/menu';
import contactPage from './pages/contact';


const content = document.getElementById('content');
const nav = navbar();
const foot = footer();
const homePageDiv = homePage();
const menuPageDiv = menuPage();
const contactPageDiv = contactPage();

content.appendChild(nav);
content.appendChild(homePageDiv);
content.appendChild(foot);

const homeNav = document.getElementById('home');
const menuNav = document.getElementById('menu');
const contactNav = document.getElementById('contact');


homeNav.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(nav);
    content.appendChild(homePageDiv);
    content.appendChild(foot);
});
menuNav.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(nav);
    content.appendChild(menuPageDiv);
    content.appendChild(foot);
})
contactNav.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(nav);
    content.appendChild(contactPageDiv);
    content.appendChild(foot);
})
