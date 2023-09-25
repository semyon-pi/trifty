import React from 'react';

export default async function getAllUserItems(userId) {
    try {
        const res = await fetch(`http://localhost:3000/items/user/${userId}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        // Handle errors gracefully
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for the caller to handle if needed
    }
}
