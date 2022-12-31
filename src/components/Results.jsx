import React from 'react'


function Results(props) {

  return (
   
    <div> {props.data.map(obj => (
        
        <div key={obj.show.id}>
            <img src={obj.show.image.medium} alt={`${obj.show.name}${obj.show.id} show`} />
            {obj.show.name}
        </div> ))}
      
      </div>
  )
}

export default Results