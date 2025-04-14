import Player from './components/Player.jsx'
import TimerChallange from './components/TimerChallange.jsx'

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="First Challange" targetTime={1} />
        <TimerChallange title="Second Challange" targetTime={5} />
        <TimerChallange title="Third Challange" targetTime={10} />
        <TimerChallange title="Fourth Challange" targetTime={15} />
      </div>
    </>
  )
}

export default App
