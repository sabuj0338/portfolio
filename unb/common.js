function alpinejs() {
    // console.log("👍common js initiated👍");
    return {
        isDrawerOpen: true,
        openDrawer() {
            this.isDrawerOpen = true;
            this.$nextTick(() => {
                this.$refs.drawerPanel.focus()
            })
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
        // isSettingsPanelOpen: true,
        // openSettingsPanel() {
        //   this.isSettingsPanelOpen = true
        //   this.$nextTick(() => {
        //     this.$refs.settingsPanel.focus()
        //   })
        // },
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