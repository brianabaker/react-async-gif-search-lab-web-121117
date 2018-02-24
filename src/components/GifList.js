
import React from 'react'

const GifList = (props) => {

  return(
    <div>
      <ul>
      {props.data.map(item =>
        <li key={item}><img src={item} alt="gif" height="200" width="300"/></li>
      )}
      </ul>
  </div>
  )
}

export default GifList;
