"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import { X } from 'lucide-react'

const STORAGE_KEY = 'promotionPopupClosedAt'
const COOLDOWN_MS = 5 * 60 * 1000 //  5 minutes in milliseconds

const InitialPopup = () => {
  const [isOpen, setIsOpen] = useState(true)

  // useEffect(() => {
  //   // Check if we should show the dialog
  //   const checkShouldShow = () => {
  //     if (typeof window === 'undefined') return false

  //     const closedAt = localStorage.getItem(STORAGE_KEY)
      
  //     if (!closedAt) {
  //       // Never closed before, show it
  //       return true
  //     }

  //     const closedTimestamp = parseInt(closedAt, 10)
  //     const now = Date.now()
  //     const timeSinceClose = now - closedTimestamp

  //     // Show if 6 hours have passed
  //     return timeSinceClose >= COOLDOWN_MS
  //   }

  //   const shouldShow = checkShouldShow()
  //   setIsOpen(shouldShow)
  // }, [])

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Dialog is being closed - save timestamp
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, Date.now().toString())
      }
    }
    setIsOpen(open)
  }

  useEffect(() => {
    if (!isOpen) {
    setTimeout(() => {
        handleOpenChange(true)
      }, COOLDOWN_MS)
    }
  }, [isOpen])

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent className="w-[93%] sm:w-[90%] md:max-w-[600px] p-0 rounded-lg">
        <div className="relative">
          <Image 
            src='/images/promotion/promotion3.jpeg' 
            alt='Promotional Offer' 
            width={600} 
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <button
            className='absolute right-[-10px] top-[-12px] bg-white/90 border hover:bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-black z-10'
            onClick={() => handleOpenChange(false)}
            aria-label="Close promotion"
          >
            <X className='w-4 h-4' />
          </button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default InitialPopup