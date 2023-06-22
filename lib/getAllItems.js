import React from 'react'

export default async function getAllItems() {
    const res = await fetch('http://localhost:3000/items/', {
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
