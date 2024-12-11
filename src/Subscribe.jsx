/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import spicyChocolate from './assets/spicy-chocolate.jpg'
import coffee from './assets/coffee.jpg'
import teaBread from './assets/tea-bread.jpg'
import chinchinCream from './assets/chinchin-cream.jpg'
import SubscribeWindow from './components/SubscribeWindow'
import Modal from './components/Modal'
import { useState } from 'react'

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: spicyChocolate,
      imageAlt: "Spicy chocolate ice cream",
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: chinchinCream,
        imageAlt: "Front of men's Basic Tee in black.",
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: teaBread,
        imageAlt: "Front of men's Basic Tee in black.",
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: coffee,
        imageAlt: "Front of men's Basic Tee in black.",
      },
  ]
  
  export default function Subscribe() {
    const [showModal, setShowModal] = useState(false)
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-auto w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <h1 className='m-52 mb-10 text-black text-7xl'>What's the Scoop?</h1>
          <p className='text-black text-xl'>Sign up with your email address to receive news and updates.</p>
          <button className='bg-auburn px-10 py-4 mt-7 mb-24 text-lg' onClick={() => setShowModal(true)}>Subscribe</button>
          <Modal isVisible={showModal} boogaloo={() => setShowModal(false)}>
            <SubscribeWindow />
          </Modal>
        </div>
      </div>
    )
  }
  