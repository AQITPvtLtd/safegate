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
    path: "/who-are-we/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 5,
    title: "Health Packages",
    submenu: [
      {
        id: 51,
        title: "Complete Health Checkup",
        path: "/health-packages/complete-health-checkup",
        newTab: false,
      },
      {
        id: 52,
        title: "Diabetic Profile",
        path: "/health-packages/diabetic-profile",
        newTab: false,
      },
      {
        id: 53,
        title: "Arthritis Profile",
        path: "/health-packages/arthritis-profile",
        newTab: false,
      },
      {
        id: 54,
        title: "Cardiac Profile",
        path: "/health-packages/cardiac-profile",
        newTab: false,
      },
    ],
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
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
