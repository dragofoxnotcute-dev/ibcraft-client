"use client"
import { useRouter } from 'next/navigation'
import Loader from '@components/Loader'
import { useEffect } from 'react'

export default function AdminRedirect() {
    const router = useRouter()
    useEffect(() => {
        router.push('/admin/home')
    }, [])

    return (
        <Loader />
    )
}