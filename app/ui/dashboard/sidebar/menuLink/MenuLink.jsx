"use client"
import React from 'react';
import '@/app/ui/dashboard/sidebar/menuLink/menuLink.module.css';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/sidebar/menuLink/menuLink.module.css';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
}

export default MenuLink;
