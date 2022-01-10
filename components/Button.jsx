import Link from 'next/link'

export function Button ({ href, children, className, ...restOfProps }) {
  if (href) {
    return (
      <Link href={href}>
        <a
          {...restOfProps}
          className={`border-transparent border-2 inline-flex font-medium text-sm text-blue-600 py-2 px-4 rounded-xl ${className}`}
        >
          {children}
        </a>
      </Link>
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
