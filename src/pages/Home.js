import React from 'react'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import wisoDashboard from '../images/wiso-dashboard.png';
import wisoTodo from '../images/wiso-todo.png';
import wisoCourse from '../images/wiso-courses.png';
import wisoCalendar from '../images/wiso-calendar.png';

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className='background--wavy w-full text-white py-24'>
        <div className='pt-10 w-full text-h1 text-center'>
          For Students, By Students.
        </div>
        <p className='text-center text-base'>Here to help you with all your educational needs, help you see it, plan it, and execute it!</p>
        <div className='flex justify-center my-2'>
          <a href='/' className='mx-auto py-4 px-6 bg-blue-500 rounded-md'>Get Started</a>
        </div>
      </div>
      {/* features section */}
      <div className='py-10'>
        <div>
          <h1 className='text-h1 text-center text-gray-500'>Features.</h1>
          <div className='container mx-auto flex flex-col space-y-10 mt-20 px-10 md:px-24'>
            <div className='flex flex-col gap-4 md:flex-row justify-around'>
              <div className='mx-auto'>
                <h2 className='text-h2 text-center md:text-left'>Dashboard</h2>
                <p className='text-base'>See a snapshot of your work, and academic progress.</p>
              </div>
              <div className='mx-auto'>
                <div className='max-w-[480px] max-h-[360px] aspect-video bg-black flex'>
                  <img src={wisoDashboard} alt='wiso dashboard page'/>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 md:flex-row-reverse justify-around'>
              <div>
                <h2 className='text-h2 text-center md:text-left'>Todo list</h2>
                <p className='text-base'>List and track all your tasks, sieze and conquer the day.</p>
              </div>
              <div className='mx-auto'>
                <div className='max-w-[480px] max-h-[360px] aspect-video bg-black'>
                  <img src={wisoTodo} alt='wiso todo page'/>
                </div>
              </div>
            </div>
            <div className='flex justify-around gap-4 flex-col md:flex-row'>
              <div>
                <h2 className='text-h2 text-center md:text-left'>Course Tracker</h2>
                <p className='text-base'>Organize and track your course progress, know how your doing in each class.</p>
              </div>
              <div className='mx-auto'>
                <div className='max-w-[480px] max-h-[360px] aspect-video bg-black'>
                  <img src={wisoCourse} alt='wiso calendar'/>
                </div>
              </div>
            </div>
            <div className='flex justify-around gap-4 flex-col md:flex-row-reverse'>
              <div>
                <h2 className='text-h2 text-center md:text-left'>Calendar</h2>
                <p className='text-base'>View and plan your upcoming days, weeks and months, scheduled and organized.</p>
              </div>
              <div className='mx-auto'>
                <div className='max-w-[480px] max-h-[360px] aspect-video bg-black'>
                  <img src={wisoCalendar} alt='wiso calendar'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <Footer />
    </div>
  )
}

export default Home