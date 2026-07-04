import type { ReactNode } from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
