export function Button ({ href, children, className, ...restOfProps }) {
  if (href) {
    return (
      <a
        href={href}
        {...restOfProps}
        className={`border-blue-600 border-2 inline-flex font-medium text-sm text-blue-600 py-2 px-4 rounded-xl ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      {...restOfProps}
      className={`bg-blue-600 border-2 border-transparent font-medium text-sm text-white py-2 px-4 rounded-xl ${className}`}
    >
      {children} {/* TODO: contact form */}
    </button>
  )
}
