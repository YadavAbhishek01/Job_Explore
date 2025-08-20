import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import Footer from '../componets/Footer/Footer'

const MainLayout = ({children}) => {
  return (
  <>
   <Navbar/>
      <main className='pt-20'>
        {children}
      </main>
        {/* You can add a footer here if needed */}
        <Footer/>
  
  </>
     
  )
}

export default MainLayout
