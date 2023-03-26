import React from 'react'

const Topbar = () => {
  return (
    <div className='w-full static p-4 bg'>
        <nav className='container mx-auto max-w-5xl flex justify-between'>
            <div className=''>
                <a href='/'>Logo</a>
            </div>
            <div className='flex gap-2'>
                <a href='/login'>Login</a>
                <a href='/sign-up'>Sign Up</a>
            </div>
        </nav>
    </div>
  )
}

export default Topbar