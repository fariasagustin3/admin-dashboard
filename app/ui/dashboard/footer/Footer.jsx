import React from 'react';
import styles from '@/app/ui/dashboard/footer/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ADMIN DASHBOARD.</div>
      <div className={styles.text}>All rights reserved.</div>
    </div>
  );
}

export default Footer;
