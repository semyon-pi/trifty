import React from 'react';

export default async function getAllCategoriesByGender(id) {
    try {
        const res = await fetch(`http://localhost:3000/categories/gender/${id}`, {
            method: 'GET', // Use the GET method to fetch an item
            cache: 'no-store',
        });

        if (!res.ok) {
            return notFound();
        }

        const data = await res.json(); // Parse the response JSON data

        return data; // Return the fetched item data
    } catch (error) {
        console.error('Error while fetching item by ID:', error);
        throw error; // Re-throw the error for error handling at a higher level
    }
}

