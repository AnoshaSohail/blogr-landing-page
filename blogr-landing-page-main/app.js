// Get all the list items
const navList = document.querySelectorAll('.navlist');
/* const mediaQueryLarge = '(max-width: 860px)'; */
/* if(window.matchMedia(mediaQueryLarge).matches){ */
function hideAllMenus() {
    navList.forEach(item => {
        const menu = item.querySelector('.click__menu');
        item.classList.remove('click');
        if (menu) {
            menu.style.display = 'none';
        }
    });
}
// Add a click event listener to each list item
navList.forEach(list => {
    list.addEventListener('click', (e) => {
        e.stopPropagation();
        // Toggle the "click" class for the clicked list item
        list.classList.toggle('click');
        const menu = list.querySelector('.click__menu'); 
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        // Remove the "click" class from other list items
        navList.forEach(item => {
            if (item !== list) {//if statement to check if the current "item" being iterated is not the same as the "list" (the clicked list item)
                item.classList.remove('click');
                const menu = item.querySelector('.click__menu');
                if (menu) {
                    menu.style.display = 'none';
                }
            }
        });
    });
});
//Add a click event listener to the document body to hide menus when clicking anywhere outside the list items or menus
document.body.addEventListener('click', () => {
    hideAllMenus();
});