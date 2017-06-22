import React from 'react';

function Ending(props){
  const {code, text} = props.ending;

  return(
    <div>
      <p className="lose" style={{color: code}}>{text}</p>
      <button onClick={props.resetGame}>Try Again!</button>
    </div>
  )
}

export default Ending;