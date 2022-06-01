function alpinejs() {
    // console.log("👍common js initiated👍");
    return {
        drawer: false,
        toggleDrawer() {
            this.drawer = !this.drawer;
        },
        closeDrawer() {
            this.drawer = false;
        },
        searchForm: false,
        toggleSearchForm() {
            this.searchForm = !this.searchForm;
        },
        closeSearchForm() {
            this.searchForm = false;
        },
    }
}

const menu = document.getElementById('menu');
const left = document.getElementById('left');
const right = document.getElementById('right');

const scroll = menu.offsetWidth / 2;

// console.log(menu.clientWidth, menu.offsetWidth, menu.scrollWidth);

right.addEventListener('click', (event) => {
    menu.scrollLeft += scroll;
});
left.addEventListener('click', (event) => {
    menu.scrollLeft -= scroll;
});