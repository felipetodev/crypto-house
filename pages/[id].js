import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { mock } from "../data"
import styles from '../styles/Home.module.css'

const HouseInformation = ({ data }) => {
  const [signContract, setSignContract] = useState({})

  const fetchBuyOrder = async () => {
    const sendData = await fetch("/api/coinbase", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })
    
    const response = await sendData.json()
    setSignContract(response)
    // TODO: use an iframe
    window.open(response.hosted_url, "self")
  }

  return (
    <>
      <main className={styles.main}>
        <Link href="/">
          <a>
            <span style={{ color: "#0070f3" }}>&larr; Volver al inicio</span>
          </a>
        </Link>
        <h2>{data.name}</h2>
        <Image src={`/${data.id}.jpeg`} alt={data.id} width={500} height={500} />
        <p style={{ fontWeight: "bold" }}>{data.description}</p>
        <button className={styles.buyButton} onClick={fetchBuyOrder}>Comprar ${data.local_price.amount}</button>
      </main>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const getSelectedHome = mock?.find(el => el.id === params.id)
  return {
    props: {
      data: getSelectedHome
    },
  }
}

export default HouseInformation