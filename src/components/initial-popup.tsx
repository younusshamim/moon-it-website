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
const COOLDOWN_HOURS = 6
const COOLDOWN_MS = COOLDOWN_HOURS * 60 * 60 * 1000 // 6 hours in milliseconds

const InitialPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if we should show the dialog
    const checkShouldShow = () => {
      if (typeof window === 'undefined') return false

      const closedAt = localStorage.getItem(STORAGE_KEY)
      
      if (!closedAt) {
        // Never closed before, show it
        return true
      }

      const closedTimestamp = parseInt(closedAt, 10)
      const now = Date.now()
      const timeSinceClose = now - closedTimestamp

      // Show if 6 hours have passed
      return timeSinceClose >= COOLDOWN_MS
    }

    const shouldShow = checkShouldShow()
    setIsOpen(shouldShow)
  }, [])

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Dialog is being closed - save timestamp
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, Date.now().toString())
      }
    }
    setIsOpen(open)
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent className="max-w-[600px] p-0">
        <div className="relative">
          <Image 
            src='/images/promotion/promotion1.jpeg' 
            alt='Promotional Offer' 
            width={600} 
            height={600}
            className="w-full h-auto rounded-lg"
          />
         <span className='absolute right-2 top-2 bg-white hover:bg-white/80 cursor-pointer text-black' onClick={() => handleOpenChange(false)}><X className='w-4 h-4' /></span>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default InitialPopup