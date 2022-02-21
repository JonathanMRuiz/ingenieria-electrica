import React from 'react'
import imageOne from '../images/viriBurger.jpg'
import imageTwo from '../images/classicBurger.jpg'

const data = [
  {
    img: imageOne,
    name: "Viri Burger",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    img: imageTwo,
    name:"Classic Burger",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
]

const content = () => {
  return (
    <>
    {data.map((e)=>(
      <div className="menu-card">
        <img className="h-80 rounded mb-20 shadow" src={e.img} alt="..." />
        <div className="center-content">
          <h2 className="text-2xl mb-2">{e.name}</h2>
          <p className="mb-2">{e.desc}</p>
          <span>450 AR$</span>
        </div>
      </div>
    ))}
      
    </>
  )
}

export default content