import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/Navbar';
import styles from '@/app/ui/dashboard/dashboard.module.css';
import Footer from '../ui/dashboard/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        { children }
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
