const arrowOptions = {
  top: '-rotate-90',
  bottom: 'rotate-90',
  left: 'rotate-180',
  default: ''
}

export const ArrowIcon = ({ direction, className }) => {
  const arrowPointerDirection = arrowOptions[direction] || arrowOptions.default
  return (
    <svg
      className={`${arrowPointerDirection} ${className} self-center overflow-visible text-inherit`}
      width='3'
      height='6'
      viewBox='0 0 3 6'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M0 0L3 3L0 6'></path>
    </svg>
  )
}
