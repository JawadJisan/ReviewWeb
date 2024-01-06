export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Write a Review",
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

// dashboard/myListing
export const dashboardHeaderLinks = [
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "My Listing",
    route: "/dashboard/myListing",
  },
  {
    label: "Favourite",
    route: "/dashboard/favourite",
  },
  {
    label: "Account Details",
    route: "/dashboard/accountDetails",
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

export const reviewDefaultValues = {};
