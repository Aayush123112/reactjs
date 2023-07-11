import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const {title,price,image,id,description}=props.item 

  return (
    <>
      <div class="col">
        <div class="card">
          <img src={image} class="card-img-top" alt={title} />
          <div class="card-body">
            <h5 class="card-title">{title.slice(0, 20)}...</h5>
            <h6>${price}</h6>
            <Link to={`/productdetails/${id}`} className="btn btn-success">
              View Details
            </Link>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card