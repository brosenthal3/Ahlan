function footer(){
    let footer = document.createElement('footer');
    let p = document.createElement('p');
    p.textContent = 'Made by Ben Rosenthal for The Odin Project. All rights reserved.';
    footer.appendChild(p);
    return footer;
}
export default footer;