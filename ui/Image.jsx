import { useState } from 'react'
import NextImage from 'next/image'

const Image = ({ className, ...restOfProps }) => {
  const [isLoading, toggleLoading] = useState(true)

  const blurDown = isLoading
    ? 'grayscale blur-md'
    : 'grayscale-0 blur-none'

  return (
    <NextImage
      {...restOfProps}
      loading='lazy'
      className={`transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none ${blurDown} ${className}`}
      onLoadingComplete={() => toggleLoading(false)}
    />
  )
}

export default Image
