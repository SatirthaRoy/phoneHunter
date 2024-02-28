import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const Modal = ({id}) => {
  let [detail, setDetail] = useState({});

  console.log(detail);

  // detail button handler
  const detailHandler = ()=> {
    setDetail({});
    let url = 'https://openapi.programming-hero.com/api/phone/'+id;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setDetail(data.data);
    });
  }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-primary" onClick={()=>{
          detailHandler();
          document.getElementById(id).showModal();
          
          }}>Details</button>
        <dialog id={id} className="modal">
          <div className="modal-box md:w-1/2 max-w-7xl max-h-screen">
            {detail.name ? 
              <div className='flex flex-col items-center gap-4'>
                <img src={detail.image} alt="" width="150px"/>
                <h3 className="font-bold text-lg">{detail.name}</h3>
                <div className='flex flex-col items-start gap-2 divide-y'>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">Brand:</h3><span>{detail.brand}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">Storage:</h3><span>{detail.mainFeatures?.storage}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">Display size:</h3><span>{detail.mainFeatures?.displaySize}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">Chipset:</h3><span>{detail.mainFeatures?.chipSet}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">WLAN:</h3><span>{detail.others?.WLAN}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">GPS:</h3><span>{detail.others?.GPS}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">Bluetooth:</h3><span>{detail.others?.Bluetooth}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">USB:</h3><span>{detail.others?.USB}</span></div>
                  <div className='w-full flex items-center text-lg'><h3 className="font-bold">Sensors:</h3><span>
                    {detail.mainFeatures?.sensors.join(', ')}</span></div>
                </div>
             
                
              </div>
            : <Loading/>}
            
            <div className="modal-action flex justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error text-white">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  )
}

export default Modal