import React from 'react'
import Aside from '../components/Aside'

import Navbar from '../components/Navbar';
import Mainsection from '../components/Mainsection';

import Playersection from '../components/Playersection';

const Dashboard = () => {
  return (
    <div className='flex ' >

        <div className=' flex-1'>


        <Aside/>


        </div>

        <div className='flex-[6] flex flex-col h-screen '>

        <div className=''>

            <Navbar/>
        </div>

        <div className=''>
            <Playersection/>

        </div>

        <div className=''>

            <Mainsection/>
        </div>

        </div>
    </div>
  )
}

export default Dashboard