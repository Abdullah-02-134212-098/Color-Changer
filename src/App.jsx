import { useState } from 'react'


function App() {

  let [color, setColor] = useState('olive');

  function changeColor(color) {
    setColor(color);
  }
  return (
    <>
     
      <div className='box' style={{ backgroundColor: color , position: 'fixed',width: '100%', height: '100%'}
      }>
      <h1 className='heading'>COLOR CHANGER</h1>
      </div>

      <div className='Container'>
        <button onClick={() => changeColor('red')} className='colorbtn'>Red</button>
        <button onClick={() => changeColor('green')} className='colorbtn'>Green</button>
        <button onClick={() => changeColor('blue')} className='colorbtn'>Blue</button>
        <button onClick={() => changeColor('pink')} className='colorbtn'>Pink</button>
      </div>

    </>
  )
}

export default App
