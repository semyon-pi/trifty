import { notFound } from 'next/navigation';

export default async function deleteItem(id) {
    const res = await fetch(`http://localhost:3000/items/${id}`, {
        method: 'DELETE', // Use the DELETE method
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        return notFound();
    }

    return res.status; // Return true if the deletion was successful (204 No Content status code)
}