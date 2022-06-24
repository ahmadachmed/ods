import React from 'react'

function Support() {
  return (
    <div className='md:max-w-4xl mx-auto md:py-5'>
      <div className="grid grid-cols-3 gap-x-5 px-5 gap-y-3 md:grid-cols-5 items-center  md:gap-x-16 ease-in-out duration-300 transition-all">
        <img className="opacity-60 grayscale hover:filter-none hover:opacity-100" src="icons/linkedin.svg"/>
        <img className="opacity-60 grayscale hover:filter-none hover:opacity-100" src="icons/gojek.svg"/>
        <img className="opacity-60 grayscale hover:filter-none hover:opacity-100" src="icons/googlesvg.svg"/>
        <img className="opacity-60 grayscale hover:filter-none hover:opacity-100" src="icons/bukalapak.svg"/>
        <img className="opacity-60 grayscale hover:filter-none hover:opacity-100" src="icons/tokopedia.svg"/>
      </div>
    </div>
  )
}

export default Support