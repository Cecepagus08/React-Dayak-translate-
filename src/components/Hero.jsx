'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return(
        <div className="text-center flex flex-col justify-content-center mb-8">
            <h1 className="text-balance text-12xl font-bold gradient-text  font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Dayak Ngaju Translater
            </h1>
            
            <div className="flex items-center pt-4 ">
              <div className="flex-grow border-t border-gray-400"></div>
                <h2 className="mx-3">Dayak nagju dari kalimantan tengah</h2>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>


            <p className="mt-8 mx-9 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>

          </div>
          );
}
