import createNavItem from './nav-item.js';

function navbar(){
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    const logo = document.createElement('h3');
    logo.textContent = 'Ahlan';
    logoDiv.appendChild(logo);

    const navItems = document.createElement('div');
    navItems.classList.add('nav-items');
    ['Home', 'Menu', 'Contact'].forEach((item) => {
        let navItem = createNavItem(item);
        console.log('appending menuitem');
        navItems.appendChild(navItem);
    });

    nav.appendChild(logoDiv);
    nav.appendChild(navItems);
    return nav;
}

export default navbar;