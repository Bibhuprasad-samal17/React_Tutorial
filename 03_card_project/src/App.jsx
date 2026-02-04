import React from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://logos-world.net/amazon-logo/" alt="" />
          <button>Save <Bookmark  size={12}/></button>
        </div>
        <div className="centre">
          <h3>Amazon <span>5 Days ago</span></h3>
          <h2>Senor UI/UX Designer </h2>
          <div>

            <h4>Part time</h4>
            <h4>Senior Level</h4></div>
          <div className="buttom">
            <div>
              <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
              </div>

            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
