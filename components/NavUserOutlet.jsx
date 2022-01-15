import { useSession } from 'next-auth/react'
import { LoadingIcon } from 'components/LoadingIcon'
import { LoginButton } from 'components/LoginButton'
import { NavUserProfile } from './NavUserProfile'

export const NavUserOutlet = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <LoadingIcon />
  if (status === 'unauthenticated') return <LoginButton />

  return (
    <>
      <NavUserProfile user={session.user} />
    </>
  )
}
