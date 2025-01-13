import React from 'react'
import { useDispatchCart, useCart } from './ContextReducer'
export default function Card(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);
  const hanndelAddToCart = () => {

  }

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img className="card-img-top" src={props.foodItem.img} alt="Card cap" style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>

            <div className='container w-100'>
              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>
              <div className='d-inline h-100 fs-5'>Total price</div>
            </div>
            <hr />
            <button className={'btn btn-success justify-cintent-centre ms-2'} onClick={hanndelAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
