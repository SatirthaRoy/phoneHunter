import React, { useContext } from 'react'
import { data } from '../App'

const ShowAll = () => {
  let {phones, setShown} = useContext(data);
  return (
    <div className='flex justify-center'> 
      <button className="btn btn-active btn-primary" onClick={() => setShown(phones.length)}>Show all</button>
    </div>
    
  )
}

export default ShowAll