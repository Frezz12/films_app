import React from 'react'

export const PlayLine: React.FC = () => {
  return (
    <>
      <div className="flex-col justify-center items-center pb-2">
        <div className="flex justify-center">
          <p className="text-[12px] text-whiteText font-light opacity-80">13:00</p>
        </div>
        <div className="bg-timeLine flex-1 rounded-[50px] h-2">
          <p className="opacity-0">.</p>
        </div>
      </div>
    </>
  )
}
