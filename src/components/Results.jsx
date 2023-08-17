import React from 'react'
import './Results.css'


function Results(props) {

  return (
    // main div with results
    <div className='results'> 

     {/* Card creation from each element of the data array */}
    {props.data.map(obj => (

        <div className='eachShow' key={obj.show.id}>
            <img className='showImage' src={obj.show.image?.medium ?? "https://i.imgur.com/o3V783L.jpeg" } alt={`${obj.show.name}${obj.show.id} show`} />
            
            <div className='title'>
              {/* Show title */}
            <h5> {obj.show.name}</h5>
              {/* Show genre and rating */}
            <p className='genres' key={obj.show.id}>{obj.show.genres[0]} / <span className='star'> &#9733;</span> <span className='rating'> {obj.show.rating.average}</span></p>
            </div>

        </div> ))}
      
    </div>
  )
}

export default Results