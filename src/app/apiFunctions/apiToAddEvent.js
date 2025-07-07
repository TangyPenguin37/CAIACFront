// import { json } from "react-router-dom";

const token = '96bf3bf39979f4f7838c0d01d2535e2b4b2fa000c785145c40ea7cf97e544fb8313b4575fae49991ed0acf7c32080d2890349ac68fa8c5ee21c92a66a3fb578586bb4eae1230939495ef6001571fb8cf8bfb24219c5ad035b58dd19820bfdd5a3a11eb082f53c7da1be03dc04c7ebe56a3f3cde5e32badb69eaa175849729e0e';

export default async function apiToAddEvent(newEvent) {

    const url = `http://localhost:1337/api/events`;

    const token = localStorage.getItem('jwt');
    if (!token) {
        console.error('No JWT found in localStorage');
        return null;
    }


    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ data: newEvent }),
        });

        if (!response.ok) {
            throw new Error('Failed to add new event');
        }

        const uploadedEvent = await response.json();
        console.log('Uploaded event:', uploadedEvent);

        // Return the uploaded file's ID
        const eventToReturn = uploadedEvent.data;
        return eventToReturn;
    } catch (error) {
        console.error('Error adding event:', error);
        return null;
    }


} 


async function uploadEventImage(file) {
    const formData = new FormData();
    formData.append('files', file);

    try {
        const response = await fetch('http://localhost:1337/api/upload', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload QR code');
        }

        const uploadedFiles = await response.json();
        console.log('Uploaded event image details:', uploadedFiles);

        // Return the uploaded file's ID
        return uploadedFiles[0].id; // Assuming the first file is what we need
    } catch (error) {
        console.error('Error uploading QR code:', error);
        return null;
    }
}

export { uploadEventImage };