import {React, Component} from 'react';

function Card ({title, text}) {
  return(
      <div style={{background:'green',textAlign:'center',width:'200px',margin:'auto',border:'1px solid black'}}>
          <h1 style={{background:'white',color:'green'}}>{title}</h1>
          <h3 style={{color:'white'}}>{text}</h3>
      </div>
  )
}

export default Card;