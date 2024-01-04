import Sidebar from "../../../components/shared/dashboard/sidebar/sidebar";
import styles from "../../../components/shared/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
