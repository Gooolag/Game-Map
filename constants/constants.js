const screens = {
    home: "Friends",
    search: "Maps",
    profile: "Profile"
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
        icon: require("../assets/icons/home.png")
    },
    {
        id: 1,
        label: screens.search,
        icon: require("../assets/icons/search.png")
    },
    {
        id: 2,
        label: screens.profile,
        icon: require("../assets/icons/profile.png")
    }
];

export default { bottom_tabs, screens }