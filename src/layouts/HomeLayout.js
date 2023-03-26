import React from 'react'
import Topbar from '../components/Topbar'

const HomeLayout = ({children}) => {
  return (
    <div className=''>
        <Topbar />
        <div className='pt-10 container mx-auto'>{children}</div>
    </div>
  )
}

export default HomeLayout