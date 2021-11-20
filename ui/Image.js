import { useState } from "react";
import NextImage from "next/image"
import styles from '../styles/Home.module.css'

const Image = (props) => {
  const [isLoading, toggleLoading] = useState(true);
  return (
    <NextImage
      {...props}
      className={isLoading ? styles.imgLoading : styles.imgLoaded}
      onLoadingComplete={() => toggleLoading(false)} 
    />
  )
}

export default Image