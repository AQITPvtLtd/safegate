const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Gallery",
        path: "/gallery",
        newTab: false,
      },
      {
        id: 62,
        title: "Blogs",
        path: "/blogs",
        newTab: false,
      },
    ],
  },
];
export default menuData;
