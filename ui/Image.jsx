import { useState } from 'react'
import NextImage from 'next/image'

const Image = ({ className, ...restOfProps }) => {
  const [isLoading, toggleLoading] = useState(true)

  const styles = isLoading
    ? 'grayscale blur-lg'
    : 'grayscale-0 blur-none'

  return (
    <NextImage
      {...restOfProps}
      loading='lazy'
      className={`filter transition-all duration-500 ${styles} ${className}`}
      onLoadingComplete={() => toggleLoading(false)}
    />
  )
}

export default Image
