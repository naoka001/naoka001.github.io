import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Policy.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー</title>
        <meta name="description" content="Naoka Hosoda, a developer in Japan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faLock} size="6x" />
          <h1>プライバシーポリシー</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <h2>１．はじめに</h2>
            <p>
              Naoka
              Hosoda（以下、「当方」）は、自身が開発・運用するサービス（以下、「本サービス」）に関して、以下のプライバシーポリシーを適用します。
            </p>
            <br />
            <p>
              【本サービス一覧】
              <br />
              &nbsp;&nbsp;・ 『フリマ計算』（iOSアプリ）
            </p>
          </div>
          <div className={styles.item}>
            <h2>２．個人情報の取り扱い</h2>
            <p>
              当方は、本サービスのユーザーからの問い合わせがあった際に、送信元のメールアドレスおよび問い合わせ内容を取得します。
              取得した個人情報は、問い合わせに対する回答のみに利用し、目的以外には一切使用しません。
            </p>
          </div>
          <div className={styles.item}>
            <h2>３．広告</h2>
            <p>
              本サービスでは、広告配信のために、Google社の「Google
              Admob」を利用しています。
              取得する情報、利用目的、第三者への提供等の詳細については、以下のリンクよりご確認ください。
            </p>
            <br />
            <a href="https://policies.google.com/technologies/ads?hl=ja">
              Google Admob
            </a>
          </div>
          <div className={styles.item}>
            <h2>４．免責事項</h2>
            <p>
              本サービスを利用することで生じた損失・不利益に関して、当方は一切その責任を負わないものとします。
            </p>
          </div>
          <div className={styles.item}>
            <h2>５．問い合わせ</h2>
            <p>
              プライバシーポリシーに関するご意見・ご不明点等がありましたら、以下までご連絡ください。
            </p>
            <br />
            <p>naoka001.inquiry[at]gmail.com</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          <small>&copy; 2023 Naoka All Rights Reserved.</small>
        </p>
      </footer>
    </>
  );
}
