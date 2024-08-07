import React, { useEffect, useRef, useState } from 'react'

const Preloading = () => {

    const loadingRef = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const addEventOnElements = (elements, eventType, callback) => {
        elements.forEach(element => {
            element.addEventListener(eventType, callback)
        });
    }

    useEffect(() => {

        const handleLoad = () => {
            setIsLoaded(true)
            document.body.classList.remove('active')
        }

        window.addEventListener('load', handleLoad)

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

  return (
    <div 
    ref={loadingRef}
    className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-white z-[5] origin-bottom duration-500 ease-cubic-in delay-500 loading ${isLoaded ? 'loaded' : 'loading'}`}
    data-loading >
        <img src="icons/loading.svg" alt="loading" width={55} height={55}/>
        <img src="icons/loading-circle.svg" alt="" width={70} height={70} className='circle '/>
    </div>
  )
}

export default Preloading