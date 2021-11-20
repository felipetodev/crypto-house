import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { mock } from "../data"

export default function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          House of Crypto
        </h1>

        <div className={styles.grid}>
          {mock && mock.map(item => (
            <Link href={`/${item.id}`} key={item.id}>
              <a className={styles.card}>
                <h2>{item.name} &rarr;</h2>
                <Image src={`/${item.id}.jpeg`} alt={item.id} width={250} height={200} />
                <div>
                  <p className={styles.from}>Desde</p>
                  <span>USD {item.local_price.amount}</span>
                </div>
                <p>{item.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
  )
}
