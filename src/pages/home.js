import {aboutSections} from '../data.js'
const homePage = () => {
    const intro = document.createElement('intro');
    intro.classList.add('intro');
    const title = document.createElement('h2');
    title.textContent = 'Middle-Eastern food for everyone';
    const p = document.createElement('p');
    p.textContent = "In this restaurant we've taken all of the goodness that is Middle-Eastern food and prepared delicious dishes for you to eat.";
    intro.appendChild(title);
    intro.appendChild(p);

    const main = document.createElement('main');
    main.classList.add('container');

    
    aboutSections.forEach((item) => {
        const section = document.createElement('section');
        section.classList.add('about');
        const text = document.createElement('div');
        text.classList.add('about-text');
        text.textContent = item.text;
        const image = document.createElement('img');
        image.src = `../src/images/${item.image}`;
        image.classList.add('about-image');
        section.appendChild(text);
        section.appendChild(image);
        main.appendChild(section);
    });

    const homePageDiv = document.createElement('div');
    homePageDiv.appendChild(intro);
    homePageDiv.appendChild(main);
    

    return homePageDiv;
}

export default homePage;