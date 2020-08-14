import {menu} from '../data.js';

const menuPage = () => {
    const menuDiv = document.createElement('div');
    const intro = document.createElement('intro');
    intro.classList.add('intro', 'intro-menu');
    const title = document.createElement('h2');
    title.textContent = 'Our Menu';
    intro.appendChild(title);

    const main = document.createElement('main');
    main.classList.add('container');

    menu.forEach((section) => {
        const menuSection = document.createElement('section');
        menuSection.classList.add('menu-section');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('menu-section-title');
        const title = document.createElement('h3');
        title.textContent = section.sectionName;
        titleDiv.appendChild(title);
        menuSection.appendChild(titleDiv);
        
        section.items.forEach((dish) => {
            const itemDiv = document.createElement('menu-item');
            itemDiv.classList.add('menu-item');
            const itemText = document.createElement('div');
            itemText.classList.add('menu-item-description');
            const itemTitle = document.createElement('h4');
            itemTitle.textContent = dish.dishName;
            const itemDesc = document.createElement('p');
            itemDesc.textContent = dish.dishDescription ? dish.dishDescription : '';
            itemText.appendChild(itemTitle);
            itemText.appendChild(itemDesc);
            const itemPrice = document.createElement('div');
            itemPrice.classList.add('menu-item-price');
            itemPrice.textContent = dish.price;

            itemDiv.appendChild(itemText);
            itemDiv.appendChild(itemPrice);

            menuSection.appendChild(itemDiv)
        });
        main.appendChild(menuSection);
    });

    menuDiv.appendChild(intro);
    menuDiv.appendChild(main);

    return menuDiv;
}

export default menuPage;