import React, { useContext } from 'react'
import { data } from '../App'

const Search = () => {
  const {searchHandler, search, setSearch } = useContext(data);
  return (
    <div className=' space-x-4 mt-5'>
      <input type="text" placeholder="search" className="input input-bordered w-full max-w-xs" onChange={(e)=> setSearch(e.target.value)} value={search}/>
      <button className="btn btn-active btn-primary" onClick={searchHandler}>Search</button>
    </div>
  )
}

export default Search