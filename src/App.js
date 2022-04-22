import './App.css';
import { useEffect, useRef, useState } from 'react';
import uuid from 'react-uuid'
import { blue_piece, green_piece, piece, red_piece, yellow_piece } from './utils/ludo_piece';

function App() {
  const diceEl = useRef(null);
  const [blue_state, setBlue_state] = useState(blue_piece)
  const [red_state, setRed_state] = useState(red_piece)
  const [green_state, setGreen_state] = useState(green_piece)
  const [yellow_state, setYellow_state] = useState(yellow_piece)

  const [dice, setDice] = useState(null)
  const [turn, setTurn] = useState([true, false, false, false]);

  const [firsttime, setFirsttime] = useState(true);

  const nextTurn = () => {
    let current_index = turn.indexOf(true);
    let temp = [...turn];
    temp[current_index] = false;
    if (current_index == 3) {
      diceEl.current.classList.remove('blue-dice');
      diceEl.current.classList.remove('red-dice');
      diceEl.current.classList.remove('green-dice');
      diceEl.current.classList.add('yellow-dice');
      temp[0] = true;
    }
    else if (current_index === 0) {
      diceEl.current.classList.remove('blue-dice');
      diceEl.current.classList.remove('yellow-dice');
      diceEl.current.classList.remove('red-dice');
      diceEl.current.classList.remove('green-dice');
      diceEl.current.classList.add('blue-dice');
      temp[current_index + 1] = true;
    }
    else if (current_index === 1) {
      diceEl.current.classList.remove('blue-dice');
      diceEl.current.classList.remove('yellow-dice');
      diceEl.current.classList.remove('green-dice');
      diceEl.current.classList.add('red-dice');

      temp[current_index + 1] = true;
    }
    else if (current_index === 2) {
      diceEl.current.classList.remove('yellow-dice');
      diceEl.current.classList.remove('blue-dice');
      diceEl.current.classList.remove('red-dice');
      diceEl.current.classList.add('green-dice');
      temp[current_index + 1] = true;
    }
    setTurn(temp)
  }
  const roll = () => {
    let dice = Math.trunc(Math.random() * 6) + 1;
    setDice(dice);
    // diceEl.current.src = `../dice-${dice}.png`
    diceEl.current.style.display = "block"
  }

  useEffect(() => {

    if(!firsttime){
      if (dice == 6) {
        // console.log(turn);
      }
      else{
        nextTurn()
      }
    }
    else{
      setFirsttime(false)
    }
  }, [dice])


  return (
    <div className="App">
      <div>
        {/* <img ref={diceEl} src='../dice-5.png' alt="" className='dice blue-dice' /> */}
        <p ref={diceEl} style={{fontSize: "25px"}} className='dice blue-dice'>{dice}</p>
      </div>
      <table>
        <tr className='row1'>
          {/* <td>hello</td> */}
          <td rowSpan={6} colSpan={6}>
            <div className='red-block'>
              <div className='circle-container'>
                {
                  red_state.map((item, index)=>{
                      return <>
                        <div className="circle" key={index}></div>
                      </>;
                  })
                }
              </div>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan={6} colSpan={6}>
            <div className='green-block'>
              <div className='circle-container'>
                {
                  red_state.map((item, index)=>{
                      return <>
                        <div className="circle" key={index}></div>
                      </>;
                  })
                }
              </div>
            </div>

          </td>
          {/* <td>hello</td> */}

        </tr>
        <tr className='row row2'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row3'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row4'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row5'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row6'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row7'>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan={3} rowSpan={3}>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row8'>
          <td className='child1'></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row9'>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row10'>
          <td rowSpan={6} colSpan={6}>
            <div className='blue-block'>
              <div className='circle-container'>
                {
                  blue_state.map((item, index)=>{
                      return <>
                        <div className="circle" key={index}></div>
                      </>;
                  })
                }
              </div>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan={6} colSpan={6}>

            <div className='yellow-block'>
              <div className='circle-container'>
              {
                  yellow_state.map((item, index)=>{
                      return <>
                        <div className="circle" key={index}></div>
                      </>;
                  })
                }
              </div>
            </div>
          </td>
        </tr>
        <tr className='row row11'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row12'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row13'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row14'>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className='row row15'>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </table>

      <button className='roll-dice' onClick={roll}>Roll Dice</button>

      <div className='green-dice-text'>
        {turn[0] == true ? <>blue turn</> : <></>}
      </div>
      <div className='yellow-dice-text'>
        {turn[1] == true ? <>red turn</> : <></>}
      </div>
      <div className='blue-dice-text'>
        {turn[2] == true ? <>green turn</> : <></>}
      </div>
      <div className='red-dice-text'>
        {turn[3] == true ? <>yellow turn</> : <></>}
      </div>
    </div>
  );
}

export default App;
