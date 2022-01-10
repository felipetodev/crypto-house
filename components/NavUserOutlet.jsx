import { useSession, signOut } from 'next-auth/react'
import { LoadingIcon } from 'components/LoadingIcon'
import { LoginButton } from 'components/LoginButton'

export const NavUserOutlet = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <LoadingIcon />
  if (status === 'unauthenticated') return <LoginButton />

  return (
    <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
