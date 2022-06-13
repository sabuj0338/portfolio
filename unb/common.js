function alpinejs() {
    // console.log("👍common js initiated👍");
    return {
        isDrawerOpen: false,
        openDrawer() {
            this.isDrawerOpen = true;
            this.$nextTick(() => {
                this.$refs.drawerPanel.focus()
            });
        },
        closeDrawer() {
            this.isDrawerOpen = false;
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
const back2Top = document.querySelector('#back2Top');

const scroll = menu.offsetWidth / 2;

// console.log(menu.clientWidth, menu.offsetWidth, menu.scrollWidth);

right.addEventListener('click', (event) => {
    menu.scrollLeft += scroll;
});
left.addEventListener('click', (event) => {
    menu.scrollLeft -= scroll;
});

back2Top.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top:0, left:0, behavior: 'smooth'});
});

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      back2Top.style.display = "block";
    } else {
      back2Top.style.display = "none";
    }
};
// carousel slider of photos

const carousel = (function () {
    const carouselItem = document.getElementsByName("carousel");
    function next() {
        const carousel = document.querySelector('input[type=radio][name=carousel]:checked');
        const id = parseInt(carousel.value.split("-")[1]);
        carousel.checked = false;
        document.getElementById("carousel-item-"+id).style.display = 'none';

        if(id < (carouselItem.length - 1)) {
            document.getElementById("carousel-"+(id+1)).checked = true;
            document.getElementById("carousel-item-"+(id+1)).style.display = 'block';
        } else {
            document.getElementById("carousel-0").checked = true;
            document.getElementById("carousel-item-0").style.display = 'block';
        }
    }

    function prev() {
        const carousel = document.querySelector('input[type=radio][name=carousel]:checked');
        const id = parseInt(carousel.value.split("-")[1]);
        carousel.checked = false;
        document.getElementById("carousel-item-"+id).style.display = 'none';

        if(id <= 0) {
            document.getElementById("carousel-" + (carouselItem.length - 1)).checked = true;
            document.getElementById("carousel-item-"+ (carouselItem.length - 1)).style.display = 'block';
        } else {
            document.getElementById("carousel-" + (id - 1)).checked = true;
            document.getElementById("carousel-item-" + (id - 1)).style.display = 'block';
        }
    }

    return {
        length: carouselItem.length,
        next: next,
        prev: prev
    }
    
})();
setInterval(carousel.next, 5000);