import { useMemo, useState } from 'react'
import NextImage from 'next/image'

const Image = ({ className, priority, ...restOfProps }) => {
  const [isLoading, toggleLoading] = useState(true)

  const blurDown = isLoading
    ? 'grayscale blur-md'
    : 'grayscale-0 blur-none'

  const isPriority = useMemo(() => {
    return priority
      ? { priority }
      : { loading: 'lazy' }
  }, [priority])

  return (
    <NextImage
      {...restOfProps}
      {...isPriority}
      className={`transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none ${blurDown} ${className}`}
      onLoadingComplete={() => toggleLoading(false)}
    />
  )
}

export default Image
