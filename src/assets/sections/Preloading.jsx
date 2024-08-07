import React, { useEffect } from 'react'

const Preloading = () => {

    useEffect(() => {
        const addEventOnElements = (elements, eventType, callback) => {
            elements.forEach(element => {
                element.addEventListener(eventType, callback)
            });
        }

        const loadingElement = document.querySelector("[data-loading]")

        window.addEventListener("load", () => {
            loadingElement.classList.add("loaded")
            document.body.classList.remove("active")
        })

    }, [])

  return (
    <div 
    className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-white z-[5] origin-bottom duration-500 ease-cubic-in delay-500 hidden loading'
    data-loading >
        <img src="icons/loading.svg" alt="loading" width={55} height={55}/>
        <img src="icons/loading-circle.svg" alt="" width={70} height={70} className='circle '/>
    </div>
  )
}

export default Preloading