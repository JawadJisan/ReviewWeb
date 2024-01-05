import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdLogout,
} from "react-icons/md";
// import { auth, signOut } from "@/app/auth";

const user = { name: "asfd" };

const menuItems = [
  {
    title: "Sections",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "My Listings",
        path: "/dashboard/myListing",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Favourites",
        path: "/dashboard/favourites",
        icon: <MdShoppingBag />,
      },
      {
        title: "Chat",
        path: "/dashboard/chat",
        icon: <MdAttachMoney />,
      },
      {
        title: "Payments",
        path: "/dashboard/payments",
        icon: <MdAttachMoney />,
      },
      {
        title: "Account Details",
        path: "/dashboard/accountDetails",
        icon: <MdAttachMoney />,
      },
    ],
  },
];

const Sidebar = async () => {
  // const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          // await signOut();
        }}
      >
        {/* <Button size="lg" asChild className="button w-full sm:w-fit">
          Log Out
        </Button> */}
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
