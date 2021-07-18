import React from 'react'

export default ({ breed, imgUrl }) => {
  return (
    <div className='card dog-card'>
      <div className='card-image'>
        <figure className='image' style={{ backgroundImage: `url(${imgUrl})` }}>
          <img
            src={imgUrl}
            alt={`A breed ${breed} dog!`}
            className='is-sr-only'
          />
        </figure>
      </div>
      <div className='card-content'>
        <div className='content breed'>
          <strong>breed: </strong>
          {breed}
        </div>
      </div>
    </div>
  )
}
