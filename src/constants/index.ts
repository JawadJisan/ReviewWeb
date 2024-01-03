export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Write A Review",
    route: "/review/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
  {
    label: "Blogs",
    route: "/blogs",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
