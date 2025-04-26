'use client';
import styles from "./page.module.scss";
import dynamic from 'next/dynamic';

const ContactWithUs = dynamic(() => import('@/components/ContactwithUs/ContactUs'), {
  ssr: false
});

const OurServiceArea = dynamic(() => import('@/components/OurServiceArea/OurService'), {
  ssr: false
});

export default function Home() {
  return (
    <div className={styles.page}>
      <ContactWithUs />
      <OurServiceArea />
    </div>
  );
}
