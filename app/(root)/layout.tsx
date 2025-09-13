import NavbarHome from '@/components/navbar/NavbarHome'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <NavbarHome />
      {children}
    </>
  )
}

export default RootLayout