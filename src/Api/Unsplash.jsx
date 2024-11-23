import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Unsplash() {
    const accessKey = "codkAR2h2NffZR8ihaGKzWvrO4Y3WwJZvalwDx1G5qc";
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?query=nature&client_id=${accessKey}&orientation=landscape&per_page=1`
                );
                 // Get the first image in results
                setImage(response.data); // Set the image data to state
                console.log(fetchedImage.urls.small); // Log the small image URL for debugging
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    return (
        <div className='img'>
            {image ? (
                <img 
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="w-full h-[70vh] brightness-50" 
                alt={image.alt_description || 'Nature Image'} 
           />
            ) : (
                <p>Uploading...</p>
            )}
        </div>
    );
}

export default Unsplash;
