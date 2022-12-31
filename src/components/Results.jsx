import React from 'react'
import './Results.css'


function Results(props) {

  return (
   
    <div className='results'> {props.data.map(obj => (

        <div key={obj.show.id}>
            <img className='showImage' src={obj.show.image.medium} alt={`${obj.show.name}${obj.show.id} show`} />
           
           <div>
            <h5> {obj.show.name}</h5>
            </div>
        </div> ))}
      
      </div>
  )
}

export default Results