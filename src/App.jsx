import './App.css'
import Card from './Card/Card'

function App() {

  return (
    <>
      <div>
        <div className='top-bar'>
        <h1 className='main-text'>Trending Novels</h1>
        <input type="text" placeholder='Finding Trending novels' />
        </div>
        <div className='card-holder'>
        <Card/>
        </div>
      </div>
    </>
  )
}

export default App
