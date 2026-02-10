import React from 'react'
import LeftContent from './leftcontent'
import RightContent from './rightcontent'

const Page1Content = () => {
  return (
    <div className='py-10 flex gap-8 h-[90vh] bg-amber-950 px-12'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
