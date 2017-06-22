import React from 'react';

function Choice(props){
  const label = props.details.label;
  const to = props.details.to;
  
  return(
    <a className="button" onClick={()=> props.changeAdventure(to)}>
      {label}
    </a>
  )
  
  
}

export default Choice;