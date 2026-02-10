import React from 'react'
import LeftContent from './leftcontent'
import RightContent from './rightcontent'

const Page1Content = () => {
  return (
    <div className='py-10 flex justify-between h-[90vh] bg-amber-950 px-18'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
