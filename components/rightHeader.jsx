import { BellIcon, ChatIcon, ChevronDownIcon, ViewGridIcon } from '@heroicons/react/solid'
import React from 'react'

const RightHeader = () => {
  return (
    <div className='flex items-center sm:space-x-2 justify-end'>
        {/* profilePic  */}

         <p className='whitespace-nowrap font-semibold pr-3'>User Name</p>
         <ViewGridIcon className='icon'/>
         <ChatIcon className='icon'/>
         <BellIcon className='icon'/>
         <ChevronDownIcon className='icon'/>
    </div>
  )
}

export default RightHeader