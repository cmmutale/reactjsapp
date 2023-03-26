import React from 'react'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'

const MeetTeam = () => {
  return (
    <div>
        <Topbar />
        <div className='text-center text-h1 py-10'>Our team</div>
        <div className='flex flex-wrap container mx-auto space-x-4 max-w-4xl justify-center py-10'>
            <div className='text-center py-2'>
                <h1 className='text-h2 text-gray-500'>Samuel Greedharry</h1>
                <div><span>CEO</span></div>
            </div>
            <div className='text-center py-2'>
                <h1 className='text-h2 text-gray-500'>Chilufya Mutale</h1>
                <div><span>CTO</span></div>
            </div>
            <div className='text-center py-2'>
                <h1 className='text-h2 text-gray-500'>Dika Smarty</h1>
                <div><span>CFO</span></div>
            </div>
            <div className='text-center py-2'>
                <h1 className='text-h2 text-gray-500'>Tatenda Chimbindi</h1>
                <div><span>DevOps</span></div>
            </div>
            <div className='text-center py-2'>
                <h1 className='text-h2 text-gray-500'>Tafadzwa Perera</h1>
                <div><span>Backend Engineer</span></div>
            </div>
            <div className='text-center py-2'>
                <h1 className='text-h2 text-gray-500'>Shahan Tay</h1>
                <div><span>UI/UX</span></div>
            </div>
            <div className='text-center py-2'>
                <h1 className='text-h2 text-gray-500'>Zacharia Tay</h1>
                <div><span>Backend Engineer</span></div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default MeetTeam