export function Button ({ href, children, className, ...restOfProps }) {
  if (href) {
    return (
      <a
        href={href}
        {...restOfProps}
        className={`border-transparent border-2 inline-flex font-medium text-sm text-blue-600 py-2 px-4 rounded-xl ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      {...restOfProps}
      className={className}
    >
      {children} {/* TODO: contact form */}
    </button>
  )
}
