'use client'

import { useState } from "react"
import Modal from "./components/Modal"
import SubscribeWindow from "./components/SubscribeWindow"

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden pt-14 bg-cover bg-red-500">
        <img
          alt=""
          src="./src/assets/waffle-cone2.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dustyGreen sm:text-9xl">
              A Little Taste of Home
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="rounded-none bg-white px-14 py-5 text-xl font-semibold text-auburn shadow-sm hover:bg-opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                onClick={() => setShowModal(true)}
              >
                Subscribe
              </button>
              <Modal isVisible={showModal} boogaloo={() => setShowModal(false)}>
                <SubscribeWindow />
              </Modal>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
