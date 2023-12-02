const linkMenu = document.querySelectorAll('.link-menu[href^="#"]');
console.log(linkMenu);

linkMenu.forEach(item => {
    item.addEventListener('click', scrollToClick);
    console.log(item);
})

function scrollToClick(event) {
    event.preventDefault();

    const elemento = event.target;
    const id = elemento.getAttribute('href');

    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to,
        behavior: "smooth",
    });
}