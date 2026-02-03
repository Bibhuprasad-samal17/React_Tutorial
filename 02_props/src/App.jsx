import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="John" age = '25' />
      <Card  user="Jane" age="30" />
      <Card />
    </div>
  )
}

export default App
