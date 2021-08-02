import React from 'react'
import "@lottiefiles/lottie-player"

export default function Loader() {
    return (
        <div className="w-full fixed top-0 left-0 h-screen bg-white flex items-center justify-center z-50 flex-col">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_f68jsjyn.json"
                background="transparent" speed="1" style={{ width: '200px', height: '200px' }} loop autoplay>
            </lottie-player>
            <span className="font-Mulish text-gray-500 font-semibold">Loading !</span>
        </div>
    )
}

