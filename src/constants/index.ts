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
    route: "/dashboard/accountDetails",
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
  {
    label: "Users",
    route: "/dashboard/user",
  },
];

// Dashboard Role Based links
export const roleBasedLinks: any = {
  user: [
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
  ],
  admin: [
    {
      label: "Users",
      route: "/dashboard/users",
    },
    {
      label: "All Blogs",
      route: "/dashboard/allBlogs",
    },
    {
      label: "All Reviews",
      route: "/dashboard/allReviews",
    },
    {
      label: "Account Details",
      route: "/dashboard/accountDetails",
    },
  ],
  moderator: [
    {
      label: "Pending",
      route: "/dashboard/pending",
    },
    {
      label: "Reviews",
      route: "/dashboard/allReviews",
    },
    {
      label: "Listing Product",
      route: "/dashboard/listingProduct",
    },
    {
      label: "Account Details",
      route: "/dashboard/accountDetails",
    },
  ],
  editor: [
    {
      label: "Edit Review",
      route: "/dashboard/editReview",
    },
    {
      label: "Edit Blog",
      route: "/dashboard/editBlog",
    },
    {
      label: "Account Details",
      route: "/dashboard/accountDetails",
    },
  ],
};

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
