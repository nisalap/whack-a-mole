import { useEffect, useState } from 'react'
import background from './assets/background.png'
import useWindowDimensions from './Dimensions';
import './Game.css';
import startButton from './assets/start.png';
import finishButton from './assets/finish.png';
import moleImage from './assets/mole.png';

import Mole from './Moles';

function App() {
  const { height, width } = useWindowDimensions();
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [hscore, setHScore] = useState(0);
  const [mole, setMole] = useState(null);
  const [mainTimerId, setMainTimerId] = useState(null);
  const [loopTimerId, setLoopTimerId] = useState(null);

  const positions = [
    {top: '56%', left: '51%', width: '16%', id:1},
    {top: '60%', left: '75%', width: '12%', id:2},
    {top: '60%', left: '27%', width: '12%', id:3},
    {top: '75%', left: '19%', width: '13%', id:4},
    {top: '75%', left: '51%', width: '13%', id:5},
    {top: '74%', left: '84%', width: '13%', id:6},
    {top: '52%', left: '88%', width: '11%', id:7},
    {top: '50%', left: '66%', width: '10%', id:8},
    {top: '50%', left: '36%', width: '10%', id:9},
    {top: '52%', left: '13%', width: '10%', id:10},
    {top: '44%', left: '26%', width: '8%', id:11},
    {top: '43%', left: '51%', width: '9%', id:12},
    {top: '44%', left: '76%', width: '8%', id:13},
  ];

  const each = positions[Math.floor(Math.random() * positions.length)]

  const onStartClick = () => {
    setStarted(true);
    mainTimer();
    setScore(0);
    loopMole();
  };

  const mainTimer = () => {
    const mT = setTimeout(() => {
      setStarted(false);
      if (loopTimerId) clearTimeout(loopTimerId);
      if (mainTimerId) clearTimeout(mainTimerId);
      setMainTimerId(null);
      setLoopTimerId(null);
      if (score > hscore) setHScore(score);
    }, 30000);
    setMainTimerId(mT);
  };

  const loopMole = () => {
    if (loopTimerId) {
      clearTimeout(loopTimerId);
      setLoopTimerId(null);
    }
    const lT = setTimeout(() => {
      loopMole();
    }, 2000);
    setLoopTimerId(lT);
  };

  const onFinish = () => {
    setStarted(false);
    if (mainTimerId) clearTimeout(mainTimerId);
    if (loopTimerId) clearTimeout(loopTimerId);
    if (score > hscore) setHScore(score);
    console.log('play finish');
  };

  const countClick = () => {
    setScore(score + 1);
    console.log('nice click!');
    loopMole();
  };
  
  return (
    <div className='container'>
      <img src={background} height={height}/>
      <h1 style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '10%',
            left: '50%',
            color: 'black',
            fontFamily: '"Joti One", cursive',
            fontSize: 40,
            fill: '#d6d33e'
          }}>High Score: {hscore}</h1>
      <h1 style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '15%',
            left: '50%',
            color: 'black',
            fontFamily: '"Joti One", cursive',
            fontSize: 40,
            fill: '#d6d33e'
          }}>Score: {score}</h1>
      {
        started ? 
        null
        : <img className="overlay-start" src={startButton} onClick={onStartClick}/>
      }
      {
        started ? 
        <img className="overlay-finish" src={finishButton} onClick={onFinish}/>
        : null
      }
      {
        started ?
        <img className='animated-mole' src={moleImage} onClick={countClick} key={each.id}
          style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: each.top,
          left: each.left,
          width: each.width,
          }}
        />
        : null
      }
    </div>
  )
}

export default App
