'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="Home" className="text-center flex flex-col justify-center pt-5 mb-8">
      {/* Judul dengan teks gradasi */}
      <h1 className="mb-2 text-balance text-6xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent sm:text-7xl">
        Penerjemah Dayak Ngaju
      </h1>

      {/* Garis & Subjudul */}
    <div className="flex items-center pt-4">
      <div className="flex-grow border-t border-gray-600"></div>
        <h2 className="mx-3 text-gray-300 text-lg">
          Menerjemahkan Bahasa Dayak Ngaju ke Indonesia & sebaliknya
        </h2>
      <div className="flex-grow border-t border-gray-600"></div>
    </div>

      {/* Deskripsi */}
      <p className="mt-8 mx-9 text-pretty text-lg font-medium text-gray-200 sm:text-xl">
        Jelajahi kekayaan bahasa dan budaya Dayak Ngaju. Gunakan alat penerjemah ini untuk memahami dan belajar bahasa lokal Kalimantan Tengah dengan mudah.
      </p>
    </div>
  );
}
