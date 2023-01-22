import { useState } from 'react'
import './App.css'
import profilepht from './assets/image-victor.jpg'
import bgimg from './assets/bg-pattern-card.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <section className='header'>
          <div className='bg-container'>
            <img src={bgimg} alt="background image" />
          </div>
          <div className='img-profile'>
            <img src={profilepht} alt="profile" />
          </div>
        </section>
        <section className='content'>
          <h1>Victor Crest <span>26</span></h1>
          <h2>London</h2>
        </section>
        <section className='social-networks'>
          <div>
            <p className='p-1'>80K</p>
            <p className='p-2'>Followers</p>
          </div>
          <div>
            <p className='p-1'>803K</p>
            <p className='p-2'>Likes</p>
          </div>
          <div>
            <p className='p-1'>1.4K</p>
            <p className='p-2'>Photos</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
