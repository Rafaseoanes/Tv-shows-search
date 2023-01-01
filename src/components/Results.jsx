import React from 'react'
import './Results.css'


function Results(props) {

  return (
   
    <div className='results'> {props.data.map(obj => (

        <div className='eachShow' key={obj.show.id}>
            <img className='showImage' src={obj.show.image.medium} alt={`${obj.show.name}${obj.show.id} show`} />
           
           <div className='title'>
            <h5> {obj.show.name}</h5>
            {/* <p className='genres' key={obj.show.id}>&#9733; {obj.show.rating.average}</p> */}
            <p className='genres' key={obj.show.id}>{obj.show.genres[0]} / <span className='star'> &#9733;</span> <span className='rating'> {obj.show.rating.average}</span></p>
            </div>
        </div> ))}
      
      </div>
  )
}

export default Results