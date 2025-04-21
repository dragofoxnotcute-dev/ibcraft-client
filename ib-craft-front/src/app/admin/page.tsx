import AdminMain from "../components/adminDashboardComponents/adminMain";
import AdminSideNav from "../components/adminDashboardComponents/adminSideNav";
import styles from "../components/adminDashboardComponents/adminSideNav.module.css";

export default function AdminDeshboard() {
    return <>
        <AdminSideNav/>
        <section className={styles.home}>
            <AdminMain/>
        </section>
    </>
}