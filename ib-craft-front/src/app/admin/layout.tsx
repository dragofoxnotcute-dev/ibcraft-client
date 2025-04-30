import AdminSideNav from '@components/adminDashboardComponents/adminSideNav';
import styles from '@components/adminDashboardComponents/adminSideNav.module.css'
import React from 'react';


export default function AdminLayout({ children } : Readonly<{children: React.ReactNode;}>)  {
    return (
        <>
            <AdminSideNav/>
            <section className={styles.home}>
                {children}
            </section>
        </>
    )
}