import React, { useContext } from 'react'
import { data } from '../App'
import Modal from './Modal';

const Cards = () => {
  let {phones, shown} = useContext(data);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {phones.slice(0,shown).map((phone, i)=> {
        return <div className="card bg-base-100 shadow-xl" key={i}>
        <figure className="px-10 pt-10">
          <img src={phone.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            {/* <button className="btn btn-primary">Show Details</button> */}
            <Modal id = {phone.slug}/>
          </div>
        </div>
      </div>
      })}
    </div>
  )
}

export default Cards