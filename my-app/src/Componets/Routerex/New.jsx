import React from 'react'

const New = () => {
  return (
    <div className='flex justify-center mt-[80px]'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-[200px]"
          src="https://play-lh.googleusercontent.com/ymjfUSgwgbFfM1yI9IqgwHSXxELhCRogQCv7J_Wj_7fbhVH2KPl8KWMHa4lHX0qO2s4=w240-h480-rw"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  )
}

export default New
