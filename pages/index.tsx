import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const apps = [
  {
    name: "フリマ計算",
    catchCopy: "フリマの利益＆販売価格をシンプルに計算",
    image: "/images/flea-market-calc-app.png",
    appStoreUrl: "https://apps.apple.com/jp/app/1663617623",
  },
  {
    name: "フリマ定型文",
    catchCopy: "フリマでよく使う定型文を、ワンタップですぐコピー",
    image: "/images/flea-market-template-app.png",
    appStoreUrl: "#",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Naoka&apos;s Gallery</title>
        <meta name="description" content="Naoka Hosoda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Naokaの作品</h1>

        <div className={styles.appGrid}>
          {apps.map((app) => (
            <div key={app.name} className={styles.appCard}>
              <Image
                src={app.image}
                alt={`${app.name} スクリーンショット`}
                width={280}
                height={607}
                className={styles.appImage}
              />
              <div className={styles.appInfo}>
                <h2 className={styles.appName}>{app.name}</h2>
                <p className={styles.appCatch}>{app.catchCopy}</p>
                <a href={app.appStoreUrl} className={styles.appStoreButton}>
                  <svg
                    className={styles.appStoreLogo}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.78 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  App Storeでダウンロード
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.footer}>
          <Link href="/privacy-policy" className={styles.footerLink}>
            プライバシーポリシー
          </Link>
          <p>
            <small>&copy; 2026 Naoka Hosoda All Rights Reserved.</small>
          </p>
        </footer>
      </main>
    </>
  );
}
