'use client'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <button
            type="button"
            aria-label='Toggle Dark Mode'
            className='flex items-center justify-center rounded-lg p-2 mr-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
            {resolvedTheme === 'light' ? (
                <MoonIcon className='h-5 w-5 text-slate-800' />
            ) : (
                <SunIcon className='h-5 w-5 text-orange-300' />
            )}
        </button>
    )
}

export default ThemeButton