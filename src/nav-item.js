const createNavItem = (text) => {
    let navItem = document.createElement('button');
    navItem.classList.add('nav-item');
    navItem.textContent = text;
    navItem.id = text.toLowerCase();
    return navItem;
}
export default createNavItem;