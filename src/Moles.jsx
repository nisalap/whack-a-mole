import moleImage from './assets/mole.png';

const Mole = (props) => {
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
    
    return (
        <img className='animated-mole' src={moleImage} onClick={() => {props.onMoleClick(); console.log('nice!',)}} key={each.id}
            style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: each.top,
            left: each.left,
            width: each.width,
            }}
      />
    )
}

export default Mole;