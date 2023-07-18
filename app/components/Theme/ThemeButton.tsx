'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import Link from 'next/link'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <Link
        href="#"
        aria-label='Toggle Dark Mode'
        className='inline transition-colors '
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? (
          <><BsSunFill className='text-yellow-600' /></>
        ) : (
          <><BsMoonStarsFill className='text-purple-800' /></>
        )}
      </Link>
    </div>
  )
}

export default ThemeButton