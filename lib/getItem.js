import React from 'react'
import { notFound } from 'next/navigation'

export default async function getItem(id) {
    const res = await fetch(`http://localhost:3000/items/${id}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}
